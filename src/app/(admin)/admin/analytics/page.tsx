import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserPlus, Video, TrendingUp, Calendar, FileText } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AnalyticsPage() {
  await requireRole("admin");

  return (
    <div>
      <PageHeader title="Analytics" description="Platform performance and engagement metrics." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatCard title="Total Members" value="247" icon={Users} change="+12% vs last month" changeType="positive" />
        <StatCard title="New Applications" value="34" icon={UserPlus} change="+8% vs last month" changeType="positive" />
        <StatCard title="Video Views" value="1,234" icon={Video} change="+23% vs last month" changeType="positive" />
        <StatCard title="Session Bookings" value="89" icon={Calendar} change="+15% vs last month" changeType="positive" />
        <StatCard title="Document Downloads" value="456" icon={FileText} change="+5% vs last month" changeType="positive" />
        <StatCard title="Conversion Rate" value="67%" icon={TrendingUp} change="+3% vs last month" changeType="positive" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Member Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground text-sm">
              Chart placeholder - Member growth over time
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Content Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground text-sm">
              Chart placeholder - Content views and downloads
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
