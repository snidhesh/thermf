import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Eye, Check, X } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

const sampleLeads = [
  { id: "1", ref: "abc123def456", name: "Dr. Maria Santos", email: "maria@example.com", specialty: "Stem Cell Therapy", country: "Brazil", status: "new", submittedAt: "May 8, 2026" },
  { id: "2", ref: "ghi789jkl012", name: "Dr. David Kim", email: "david@example.com", specialty: "Anti-Aging Medicine", country: "South Korea", status: "reviewing", submittedAt: "May 6, 2026" },
  { id: "3", ref: "mno345pqr678", name: "Dr. Amira Hassan", email: "amira@example.com", specialty: "Regenerative Medicine", country: "Egypt", status: "new", submittedAt: "May 9, 2026" },
  { id: "4", ref: "stu901vwx234", name: "Dr. John Peterson", email: "john@example.com", specialty: "Sports Medicine", country: "United States", status: "approved", submittedAt: "May 1, 2026" },
  { id: "5", ref: "yza567bcd890", name: "Dr. Li Wei", email: "li@example.com", specialty: "Functional Medicine", country: "China", status: "declined", submittedAt: "Apr 28, 2026" },
];

export default async function LeadsPage() {
  await requireRole("admin");

  return (
    <div>
      <PageHeader title="Leads / Applications" description="Review and manage membership applications.">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search applications..." className="pl-9 w-64" />
        </div>
      </PageHeader>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium">Applicant</th>
                  <th className="text-left p-4 font-medium">Specialty</th>
                  <th className="text-left p-4 font-medium">Country</th>
                  <th className="text-left p-4 font-medium">Submitted</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleLeads.map((lead) => (
                  <tr key={lead.id} className="border-b hover:bg-muted/30">
                    <td className="p-4">
                      <p className="font-medium">{lead.name}</p>
                      <p className="text-xs text-muted-foreground">{lead.email}</p>
                    </td>
                    <td className="p-4 text-muted-foreground">{lead.specialty}</td>
                    <td className="p-4 text-muted-foreground">{lead.country}</td>
                    <td className="p-4 text-muted-foreground">{lead.submittedAt}</td>
                    <td className="p-4"><StatusBadge status={lead.status} /></td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button size="sm" variant="ghost" render={<Link href={`/admin/leads/${lead.id}`} />}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        {(lead.status === "new" || lead.status === "reviewing") && (
                          <>
                            <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
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
