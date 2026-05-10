import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function AdminNewsletterPage() {
  await requireRole("admin");

  return (
    <div>
      <PageHeader title="Newsletter" description="Manage newsletter campaigns and subscribers." />
      <Card>
        <CardContent className="p-8">
          <div className="h-96 flex items-center justify-center text-muted-foreground">
            Newsletter management (Phase 5)
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
