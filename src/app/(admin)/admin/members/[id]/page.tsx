import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { TierBadge } from "@/components/shared/tier-badge";
import { RoleBadge } from "@/components/shared/role-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminMemberDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await requireRole("admin");

  return (
    <div>
      <div className="mb-6">
        <Button variant="ghost" render={<Link href="/admin/members" />}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Members
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Member Profile</CardTitle>
                <div className="flex items-center gap-2">
                  <TierBadge tier="fellow" />
                  <RoleBadge role="member" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <Input defaultValue="Dr. Ahmed Khan" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input defaultValue="ahmed@example.com" disabled />
                </div>
                <div>
                  <Label>Specialty</Label>
                  <Input defaultValue="Stem Cell Therapy" />
                </div>
                <div>
                  <Label>Country</Label>
                  <Input defaultValue="UAE" />
                </div>
                <div>
                  <Label>City</Label>
                  <Input defaultValue="Dubai" />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input defaultValue="+971 50 123 4567" />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Button className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy">Save Changes</Button>
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">Deactivate</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Membership</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tier</span>
                <TierBadge tier="fellow" />
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Role</span>
                <RoleBadge role="member" />
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Member Since</span>
                <span>Mar 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sessions Used</span>
                <span>3 / 10</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full">Change Tier</Button>
              <Button variant="outline" size="sm" className="w-full">Change Role</Button>
              <Button variant="outline" size="sm" className="w-full">Reset Sessions</Button>
              <Button variant="outline" size="sm" className="w-full">Send Email</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
