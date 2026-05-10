import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function AdminResourcesPage() {
  await requireRole("admin");

  return (
    <div>
      <PageHeader title="Resources" description="Manage brand assets, certificates, and downloadable resources." />
      <Card>
        <CardContent className="p-8">
          <div className="h-96 flex items-center justify-center text-muted-foreground">
            Resources management (Phase 5)
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
