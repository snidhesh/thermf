import { requireAuth } from "@/lib/auth";
import { StatCard } from "@/components/shared/stat-card";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, FileText, Calendar, Users, Clock, TrendingUp } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const user = await requireAuth();

  return (
    <div>
      <PageHeader
        title={`Welcome back, ${user.name?.split(" ")[0] || "Member"}`}
        description="Here's an overview of your membership activity."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Videos Available" value="24" icon={Video} change="+3 this month" changeType="positive" />
        <StatCard title="Documents" value="18" icon={FileText} change="+2 this month" changeType="positive" />
        <StatCard title="Upcoming Sessions" value="3" icon={Calendar} />
        <StatCard title="Network" value="156" icon={Users} change="Members in your specialty" changeType="neutral" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-rmf-gold" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "New video published: Advanced PRP Techniques", time: "2 hours ago" },
                { title: "Session booked with Dr. Al-Rashid", time: "1 day ago" },
                { title: "New protocol available: Exosome Therapy v2", time: "3 days ago" },
                { title: "Member directory updated", time: "5 days ago" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 py-2 border-b last:border-0">
                  <div className="h-2 w-2 rounded-full bg-rmf-gold mt-2 shrink-0" />
                  <div>
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-rmf-gold" />
              Upcoming Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Stem Cell Therapy Consultation", doctor: "Dr. Sarah Al-Rashid", date: "May 15, 2026", time: "10:00 AM GST" },
                { title: "PRP Protocol Review", doctor: "Prof. Michael Chen", date: "May 18, 2026", time: "2:00 PM GST" },
                { title: "Research Collaboration", doctor: "Dr. Fatima Hassan", date: "May 22, 2026", time: "11:00 AM GST" },
              ].map((session) => (
                <div key={session.title} className="flex items-start gap-3 py-2 border-b last:border-0">
                  <div className="h-10 w-10 rounded-lg bg-rmf-mint/10 flex items-center justify-center shrink-0">
                    <Calendar className="h-5 w-5 text-rmf-mint" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{session.title}</p>
                    <p className="text-xs text-muted-foreground">{session.doctor}</p>
                    <p className="text-xs text-muted-foreground">{session.date} at {session.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
