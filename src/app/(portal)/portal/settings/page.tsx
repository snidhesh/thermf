import { requireAuth } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TierBadge } from "@/components/shared/tier-badge";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const user = await requireAuth();

  return (
    <div>
      <PageHeader title="Settings" description="Manage your profile and account settings." />

      <div className="max-w-2xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-20 w-20 rounded-full bg-rmf-navy flex items-center justify-center">
                <span className="text-rmf-gold font-heading font-bold text-2xl">
                  {user.name?.split(" ").map((n: string) => n[0]).join("").slice(0, 2) || "U"}
                </span>
              </div>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <TierBadge tier={user.membershipTier} className="mt-1" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>First Name</Label>
                <Input defaultValue={user.name?.split(" ")[0] || ""} />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input defaultValue={user.name?.split(" ").slice(1).join(" ") || ""} />
              </div>
            </div>
            <div>
              <Label>Email</Label>
              <Input value={user.email || ""} disabled />
            </div>
            <div>
              <Label>Bio</Label>
              <Textarea placeholder="Tell other members about yourself..." rows={4} />
            </div>
            <Button className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy">
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
