import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function AdminWhatsAppPage() {
  await requireRole("admin");

  return (
    <div>
      <PageHeader title="WhatsApp" description="WhatsApp Business API integration." />
      <Card>
        <CardContent className="p-8">
          <div className="h-96 flex items-center justify-center text-muted-foreground">
            WhatsApp integration (Phase 5)
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
