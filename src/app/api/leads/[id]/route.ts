import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import { hasPermission } from "@/lib/permissions";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const patchSchema = z.object({
  status: z
    .enum(["new", "contacted", "converted", "closed"])
    .optional(),
  notes: z.string().optional(),
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user || !hasPermission(session.user.role, "manage_leads")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { id } = await params;

  if (!id.startsWith("lead_")) {
    return NextResponse.json(
      { error: "Only lead records can be updated via this endpoint" },
      { status: 400 }
    );
  }

  const leadId = id.replace("lead_", "");

  try {
    const body = await request.json();
    const validated = patchSchema.parse(body);

    const updates: Record<string, unknown> = {};
    if (validated.status !== undefined) updates.status = validated.status;
    if (validated.notes !== undefined) updates.notes = validated.notes;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: "No fields to update" },
        { status: 400 }
      );
    }

    const [updated] = await db
      .update(leads)
      .set(updates)
      .where(eq(leads.id, leadId))
      .returning();

    if (!updated) {
      return NextResponse.json(
        { error: "Lead not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated);
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "name" in error &&
      error.name === "ZodError"
    ) {
      return NextResponse.json(
        { error: "Validation failed" },
        { status: 400 }
      );
    }
    console.error("Failed to update lead:", error);
    return NextResponse.json(
      { error: "Failed to update lead" },
      { status: 500 }
    );
  }
}
