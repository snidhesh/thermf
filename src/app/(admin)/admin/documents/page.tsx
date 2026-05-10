import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { TierBadge } from "@/components/shared/tier-badge";
import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Eye, Pencil, Download } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

const sampleDocs = [
  { id: "1", title: "PRP Therapy Protocol v3", type: "protocol", minTier: "associate", status: "published", downloads: 89 },
  { id: "2", title: "Stem Cell Harvesting Guide", type: "pdf", minTier: "member", status: "published", downloads: 56 },
  { id: "3", title: "Patient Consent Template", type: "template", minTier: "associate", status: "published", downloads: 145 },
  { id: "4", title: "Gene Therapy Safety Protocols", type: "protocol", minTier: "fellow", status: "draft", downloads: 0 },
];

export default async function AdminDocumentsPage() {
  await requireRole("admin");

  return (
    <div>
      <PageHeader title="Documents" description="Manage documents, protocols, and templates.">
        <Button render={<Link href="/admin/documents/upload" />} className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy">
          <Plus className="h-4 w-4 mr-2" /> Upload Document
        </Button>
      </PageHeader>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium">Document</th>
                  <th className="text-left p-4 font-medium">Type</th>
                  <th className="text-left p-4 font-medium">Min Tier</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Downloads</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleDocs.map((doc) => (
                  <tr key={doc.id} className="border-b hover:bg-muted/30">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded bg-rmf-gold/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-rmf-gold" />
                        </div>
                        <span className="font-medium">{doc.title}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground capitalize">{doc.type}</td>
                    <td className="p-4"><TierBadge tier={doc.minTier} /></td>
                    <td className="p-4"><StatusBadge status={doc.status} /></td>
                    <td className="p-4 text-muted-foreground">{doc.downloads}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button size="sm" variant="ghost"><Eye className="h-4 w-4" /></Button>
                        <Button size="sm" variant="ghost"><Pencil className="h-4 w-4" /></Button>
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
