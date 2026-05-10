import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  await requireRole("admin");

  return (
    <div>
      <PageHeader title="Settings" description="Platform configuration and system settings." />

      <div className="max-w-2xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Organization Name</Label>
              <Input defaultValue="Regenerative Medicine Federation" />
            </div>
            <div>
              <Label>Support Email</Label>
              <Input defaultValue="info@thermf.org" />
            </div>
            <div>
              <Label>Default Timezone</Label>
              <Input defaultValue="Asia/Dubai" />
            </div>
            <Button className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy">
              Save Settings
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Session Defaults</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Default Session Duration (minutes)</Label>
              <Input type="number" defaultValue={30} />
            </div>
            <div>
              <Label>Default Sessions Allowed (per member)</Label>
              <Input type="number" defaultValue={5} />
            </div>
            <Button className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy">
              Save Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
