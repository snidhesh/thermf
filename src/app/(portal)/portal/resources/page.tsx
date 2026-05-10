import { requireAuth } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FolderOpen, FileText, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

const resources = [
  { id: "1", name: "RMF Brand Guidelines", type: "PDF", icon: FileText },
  { id: "2", name: "RMF Logo Pack", type: "ZIP", icon: Image },
  { id: "3", name: "Member Certificate Template", type: "PDF", icon: FileText },
  { id: "4", name: "Presentation Templates", type: "PPTX", icon: FolderOpen },
];

export default async function ResourcesPage() {
  await requireAuth();

  return (
    <div>
      <PageHeader
        title="Resources"
        description="Download brand assets, certificates, and templates."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((resource) => (
          <Card key={resource.id}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-rmf-gold/10 flex items-center justify-center">
                <resource.icon className="h-6 w-6 text-rmf-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm">{resource.name}</h3>
                <p className="text-xs text-muted-foreground">{resource.type}</p>
              </div>
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-1" /> Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
