import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

export const dynamic = "force-dynamic";

const sampleBookings = [
  { id: "1", memberName: "Dr. Ahmed Khan", topic: "Stem Cell Consultation", date: "May 15, 2026", time: "10:00 AM", status: "confirmed" },
  { id: "2", memberName: "Dr. Emily Rodriguez", topic: "PRP Protocol Review", date: "May 18, 2026", time: "2:00 PM", status: "confirmed" },
  { id: "3", memberName: "Dr. Yuki Tanaka", topic: "Research Discussion", date: "May 10, 2026", time: "11:00 AM", status: "completed" },
];

export default async function BoardBookingsPage() {
  await requireRole(["board", "admin"]);

  return (
    <div>
      <PageHeader title="My Bookings" description="View sessions booked with you by members." />

      <div className="space-y-3">
        {sampleBookings.map((booking) => (
          <Card key={booking.id}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-rmf-navy flex items-center justify-center shrink-0">
                <User className="h-5 w-5 text-rmf-gold" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">{booking.memberName}</p>
                <p className="text-xs text-muted-foreground">{booking.topic}</p>
              </div>
              <div className="text-right text-sm">
                <p className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-3 w-3" /> {booking.date}
                </p>
                <p className="text-xs text-muted-foreground">{booking.time}</p>
              </div>
              <StatusBadge status={booking.status} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
