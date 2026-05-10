import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function AdminCalendarPage() {
  await requireRole("admin");

  return (
    <div>
      <PageHeader title="Calendar" description="Manage events and important dates." />
      <Card>
        <CardContent className="p-8">
          <div className="h-96 flex items-center justify-center text-muted-foreground">
            Calendar view - Events management (Phase 5)
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
