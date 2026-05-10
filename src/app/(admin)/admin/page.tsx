import { requireRole } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { StatCard } from "@/components/shared/stat-card";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserPlus, Video, FileText, TrendingUp, Calendar, Mail, DollarSign } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  await requireRole("admin");

  return (
    <div>
      <PageHeader title="Admin Dashboard" description="Overview of the RMF platform." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Members" value="247" icon={Users} change="+12 this month" changeType="positive" />
        <StatCard title="Pending Applications" value="18" icon={UserPlus} change="+5 today" changeType="neutral" />
        <StatCard title="Published Videos" value="24" icon={Video} change="+3 this week" changeType="positive" />
        <StatCard title="Documents" value="56" icon={FileText} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-rmf-gold" />
              Recent Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Dr. Maria Santos", specialty: "Stem Cell Therapy", country: "Brazil", status: "new" },
                { name: "Dr. David Kim", specialty: "Anti-Aging Medicine", country: "South Korea", status: "reviewing" },
                { name: "Dr. Amira Hassan", specialty: "Regenerative Medicine", country: "Egypt", status: "new" },
                { name: "Dr. John Peterson", specialty: "Sports Medicine", country: "United States", status: "approved" },
              ].map((app) => (
                <div key={app.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{app.name}</p>
                    <p className="text-xs text-muted-foreground">{app.specialty} &middot; {app.country}</p>
                  </div>
                  <span className={cn(
                    "text-xs px-2 py-1 rounded-full font-medium",
                    app.status === "new" ? "bg-blue-100 text-blue-800" :
                    app.status === "reviewing" ? "bg-yellow-100 text-yellow-800" :
                    "bg-green-100 text-green-800"
                  )}>
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-rmf-gold" />
              Quick Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Active Sessions</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">This Month Bookings</span>
                <span className="font-semibold">34</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Emails Sent</span>
                <span className="font-semibold">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Associates</span>
                <span className="font-semibold">89</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Members</span>
                <span className="font-semibold">112</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Fellows</span>
                <span className="font-semibold">46</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
