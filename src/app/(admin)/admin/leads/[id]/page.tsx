import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Check, X } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await requireRole("admin");

  return (
    <div>
      <div className="mb-6">
        <Button variant="ghost" render={<Link href="/admin/leads" />}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Leads
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Application Details</CardTitle>
                <StatusBadge status="new" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">First Name</p>
                  <p className="font-medium">Dr. Maria</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Last Name</p>
                  <p className="font-medium">Santos</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">maria@example.com</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p className="font-medium">+55 11 99999-0000</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Specialty</p>
                  <p className="font-medium">Stem Cell Therapy</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Country</p>
                  <p className="font-medium">Brazil</p>
                </div>
                <div>
                  <p className="text-muted-foreground">City</p>
                  <p className="font-medium">Sao Paulo</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Years of Experience</p>
                  <p className="font-medium">15</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground text-sm">Qualifications</p>
                <p className="text-sm mt-1">MD, PhD in Regenerative Medicine from University of Sao Paulo. Board certified in internal medicine with additional training in stem cell therapies.</p>
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground text-sm">Motivation</p>
                <p className="text-sm mt-1">I am passionate about advancing regenerative medicine in Latin America and would like to collaborate with international experts through RMF to bring evidence-based therapies to more patients in our region.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Review Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Review Notes (internal only)</Label>
                <Textarea placeholder="Add notes about this application..." rows={4} />
              </div>
              <div className="space-y-2">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Check className="h-4 w-4 mr-2" /> Approve & Send Invite
                </Button>
                <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
                  <X className="h-4 w-4 mr-2" /> Decline
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Approving will create a user account and send a magic link invitation email via Resend.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
