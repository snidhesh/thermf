import { requireAuth } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, MapPin } from "lucide-react";

export const dynamic = "force-dynamic";

const sampleSlots = [
  { id: "1", boardMember: "Dr. Sarah Al-Rashid", specialty: "Regenerative Medicine", date: "May 15, 2026", time: "10:00 AM", timezone: "GST", spotsLeft: 2, totalSpots: 3 },
  { id: "2", boardMember: "Prof. Michael Chen", specialty: "Stem Cell Therapy", date: "May 18, 2026", time: "2:00 PM", timezone: "GMT", spotsLeft: 1, totalSpots: 1 },
  { id: "3", boardMember: "Dr. Fatima Hassan", specialty: "Anti-Aging Medicine", date: "May 22, 2026", time: "11:00 AM", timezone: "GST", spotsLeft: 0, totalSpots: 2 },
  { id: "4", boardMember: "Dr. James Wilson", specialty: "Orthopedic Regenerative Medicine", date: "May 25, 2026", time: "3:00 PM", timezone: "EST", spotsLeft: 3, totalSpots: 3 },
];

export default async function SessionsPage() {
  await requireAuth();

  return (
    <div>
      <PageHeader
        title="Book Sessions"
        description="Schedule one-on-one or group sessions with board members."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleSlots.map((slot) => (
          <Card key={slot.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-full bg-rmf-navy flex items-center justify-center shrink-0">
                  <span className="text-rmf-gold font-heading font-bold">
                    {slot.boardMember.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{slot.boardMember}</h3>
                  <p className="text-sm text-rmf-gold">{slot.specialty}</p>
                  <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> {slot.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" /> {slot.time} {slot.timezone}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {slot.spotsLeft > 0
                        ? `${slot.spotsLeft} of ${slot.totalSpots} spots available`
                        : "Fully booked"}
                    </div>
                  </div>
                  <Button
                    className="mt-4 bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy"
                    disabled={slot.spotsLeft === 0}
                    size="sm"
                  >
                    {slot.spotsLeft > 0 ? "Book Session" : "Full"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
