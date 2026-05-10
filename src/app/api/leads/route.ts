import { NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { hasPermission } from "@/lib/permissions";
import { db } from "@/db";
import { leads, applications } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  const session = await auth();
  if (!session?.user || !hasPermission(session.user.role, "manage_leads")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const [leadRows, appRows] = await Promise.all([
      db
        .select({
          id: leads.id,
          referenceNumber: leads.referenceNumber,
          firstName: leads.firstName,
          lastName: leads.lastName,
          email: leads.email,
          specialty: leads.specialty,
          country: leads.country,
          status: leads.status,
          submittedAt: leads.submittedAt,
        })
        .from(leads)
        .orderBy(desc(leads.submittedAt)),
      db
        .select({
          id: applications.id,
          referenceNumber: applications.referenceNumber,
          firstName: applications.firstName,
          lastName: applications.lastName,
          email: applications.email,
          specialty: applications.specialty,
          country: applications.country,
          status: applications.status,
          submittedAt: applications.submittedAt,
        })
        .from(applications)
        .orderBy(desc(applications.submittedAt)),
    ]);

    const unified = [
      ...leadRows.map((r) => ({
        id: `lead_${r.id}`,
        type: "lead" as const,
        referenceNumber: r.referenceNumber,
        name: `${r.firstName} ${r.lastName}`,
        email: r.email,
        specialty: r.specialty,
        country: r.country,
        status: r.status,
        submittedAt: r.submittedAt?.toISOString() ?? "",
      })),
      ...appRows.map((r) => ({
        id: `app_${r.id}`,
        type: "application" as const,
        referenceNumber: r.referenceNumber,
        name: `${r.firstName} ${r.lastName}`,
        email: r.email,
        specialty: r.specialty,
        country: r.country,
        status: r.status,
        submittedAt: r.submittedAt?.toISOString() ?? "",
      })),
    ].sort(
      (a, b) =>
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );

    return NextResponse.json({ leads: unified });
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
