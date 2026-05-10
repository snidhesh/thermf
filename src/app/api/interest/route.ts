import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { interestSchema } from "@/lib/validations/interest";
import { checkRateLimit } from "@/lib/rate-limit";
import { db } from "@/db";
import { leads } from "@/db/schema";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    const { success } = checkRateLimit(ip);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validatedData = interestSchema.parse(body);

    const referenceNumber = `RMF-${new Date().getFullYear()}-${nanoid(7).toUpperCase()}`;

    await db.insert(leads).values({
      ...validatedData,
      referenceNumber,
    });

    return NextResponse.json(
      { referenceNumber, message: "Interest submitted successfully" },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "name" in error &&
      error.name === "ZodError"
    ) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: "issues" in error ? error.issues : undefined,
        },
        { status: 400 }
      );
    }
    console.error("Interest submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit interest" },
      { status: 500 }
    );
  }
}
