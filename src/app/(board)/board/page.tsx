import { requireRole } from "@/lib/auth";
import { StatCard } from "@/components/shared/stat-card";
import { PageHeader } from "@/components/shared/page-header";
import { Calendar, Users, FileUp, Clock } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function BoardDashboardPage() {
  const user = await requireRole(["board", "admin"]);

  return (
    <div>
      <PageHeader
        title="Board Dashboard"
        description={`Welcome, ${user.name?.split(" ")[0]}. Manage your sessions and content.`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Upcoming Sessions" value="5" icon={Calendar} />
        <StatCard title="Total Bookings" value="23" icon={Users} change="+8 this month" changeType="positive" />
        <StatCard title="Content Submitted" value="12" icon={FileUp} />
        <StatCard title="Hours Contributed" value="45" icon={Clock} />
      </div>
    </div>
  );
}
