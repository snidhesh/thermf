import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Eye } from "lucide-react";
import Link from "next/link";
import { db } from "@/db";
import { leads, applications } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  await requireRole("admin");

  let unified: {
    id: string;
    type: "lead" | "application";
    referenceNumber: string;
    name: string;
    email: string;
    specialty: string;
    country: string;
    status: string;
    submittedAt: string;
  }[] = [];

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

    const combined = [
      ...leadRows.map((r) => ({
        id: `lead_${r.id}`,
        type: "lead" as const,
        referenceNumber: r.referenceNumber,
        name: `${r.firstName} ${r.lastName}`,
        email: r.email,
        specialty: r.specialty,
        country: r.country,
        status: r.status ?? "new",
        submittedAt: r.submittedAt,
      })),
      ...appRows.map((r) => ({
        id: `app_${r.id}`,
        type: "application" as const,
        referenceNumber: r.referenceNumber,
        name: `${r.firstName} ${r.lastName}`,
        email: r.email,
        specialty: r.specialty,
        country: r.country,
        status: r.status ?? "new",
        submittedAt: r.submittedAt,
      })),
    ].sort(
      (a, b) =>
        (b.submittedAt?.getTime() ?? 0) - (a.submittedAt?.getTime() ?? 0)
    );

    unified = combined.map((r) => ({
      ...r,
      submittedAt: r.submittedAt
        ? r.submittedAt.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "",
    }));
  } catch {
    // Tables may not exist yet before migration
  }

  return (
    <div>
      <PageHeader
        title="Leads / Applications"
        description="Review and manage membership interest submissions and full applications."
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-9 w-64" />
        </div>
      </PageHeader>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium">Type</th>
                  <th className="text-left p-4 font-medium">Applicant</th>
                  <th className="text-left p-4 font-medium">Specialty</th>
                  <th className="text-left p-4 font-medium">Country</th>
                  <th className="text-left p-4 font-medium">Submitted</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {unified.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-muted-foreground">
                      No leads or applications yet.
                    </td>
                  </tr>
                )}
                {unified.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-muted/30">
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          item.type === "lead"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-violet-50 text-violet-700"
                        }`}
                      >
                        {item.type === "lead" ? "Interest" : "Application"}
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.email}
                      </p>
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {item.specialty}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {item.country}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {item.submittedAt}
                    </td>
                    <td className="p-4">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="p-4 text-right">
                      <Button
                        size="sm"
                        variant="ghost"
                        render={
                          <Link href={`/admin/leads/${item.id}`} />
                        }
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
