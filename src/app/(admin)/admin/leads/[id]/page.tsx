import { requireRole } from "@/lib/auth";
import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { db } from "@/db";
import { leads, applications } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await requireRole("admin");

  const isLead = id.startsWith("lead_");
  const isApp = id.startsWith("app_");
  const rawId = id.replace(/^(lead_|app_)/, "");

  let record: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    specialty: string;
    country: string;
    city: string | null;
    yearsExperience: number;
    status: string | null;
    referenceNumber: string;
    qualifications?: string;
    motivation?: string;
    notes?: string | null;
  } | null = null;

  let type: "lead" | "application" = "lead";

  try {
    if (isLead) {
      type = "lead";
      const [row] = await db
        .select()
        .from(leads)
        .where(eq(leads.id, rawId))
        .limit(1);
      if (row) {
        record = {
          firstName: row.firstName,
          lastName: row.lastName,
          email: row.email,
          phone: row.phone,
          specialty: row.specialty,
          country: row.country,
          city: row.city,
          yearsExperience: row.yearsExperience,
          status: row.status,
          referenceNumber: row.referenceNumber,
          notes: row.notes,
        };
      }
    } else if (isApp) {
      type = "application";
      const [row] = await db
        .select()
        .from(applications)
        .where(eq(applications.id, rawId))
        .limit(1);
      if (row) {
        record = {
          firstName: row.firstName,
          lastName: row.lastName,
          email: row.email,
          phone: row.phone,
          specialty: row.specialty,
          country: row.country,
          city: row.city,
          yearsExperience: row.yearsExperience,
          status: row.status,
          referenceNumber: row.referenceNumber,
          qualifications: row.qualifications,
          motivation: row.motivation,
        };
      }
    }
  } catch {
    // Tables may not exist yet
  }

  if (!record) {
    notFound();
  }

  return (
    <div>
      <div className="mb-6">
        <Button variant="ghost" render={<Link href="/admin/leads" />}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Leads
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {type === "lead" ? "Interest" : "Application"} Details
                </CardTitle>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      type === "lead"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-violet-50 text-violet-700"
                    }`}
                  >
                    {type === "lead" ? "Interest" : "Application"}
                  </span>
                  <StatusBadge status={record.status ?? "new"} />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">First Name</p>
                  <p className="font-medium">{record.firstName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Last Name</p>
                  <p className="font-medium">{record.lastName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">{record.email}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p className="font-medium">{record.phone ?? "—"}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Specialty</p>
                  <p className="font-medium">{record.specialty}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Country</p>
                  <p className="font-medium">{record.country}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">City</p>
                  <p className="font-medium">{record.city ?? "—"}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Years of Experience</p>
                  <p className="font-medium">{record.yearsExperience}</p>
                </div>
              </div>

              <div className="mt-3 text-sm text-muted-foreground">
                Reference: <span className="font-mono">{record.referenceNumber}</span>
              </div>

              {type === "application" && record.qualifications && (
                <div className="mt-4">
                  <p className="text-muted-foreground text-sm">
                    Qualifications
                  </p>
                  <p className="text-sm mt-1">{record.qualifications}</p>
                </div>
              )}
              {type === "application" && record.motivation && (
                <div className="mt-4">
                  <p className="text-muted-foreground text-sm">Motivation</p>
                  <p className="text-sm mt-1">{record.motivation}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Internal Notes</Label>
                <Textarea
                  placeholder="Add notes..."
                  rows={4}
                  defaultValue={record.notes ?? ""}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Status and notes can be updated via the API. Conversion to
                full application is planned for Phase 2.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
