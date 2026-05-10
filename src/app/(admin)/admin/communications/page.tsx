import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Send } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function CommunicationsPage() {
  await requireRole("admin");

  return (
    <div>
      <PageHeader title="Communications" description="Send messages to members via email, WhatsApp, or SMS." />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Compose Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Channel</Label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="email">Email</option>
                  <option value="whatsapp" disabled>WhatsApp (Phase 5)</option>
                  <option value="sms" disabled>SMS (Phase 5)</option>
                </select>
              </div>
              <div>
                <Label>Recipients</Label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="all">All Members</option>
                  <option value="associates">Associates Only</option>
                  <option value="members">Members Only</option>
                  <option value="fellows">Fellows Only</option>
                  <option value="board">Board Members</option>
                </select>
              </div>
              <div>
                <Label>Subject</Label>
                <Input placeholder="Message subject" />
              </div>
              <div>
                <Label>Message</Label>
                <Textarea placeholder="Type your message..." rows={8} />
              </div>
              <div className="flex gap-3">
                <Button className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy">
                  <Send className="h-4 w-4 mr-2" /> Send Now
                </Button>
                <Button variant="outline">Save as Draft</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Mail className="h-5 w-5 text-rmf-gold" />
                <div>
                  <p className="text-sm font-medium">156</p>
                  <p className="text-xs text-muted-foreground">Emails sent this month</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <MessageCircle className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm font-medium">0</p>
                  <p className="text-xs text-muted-foreground">WhatsApp messages (Phase 5)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
