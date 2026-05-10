import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Plus, Trash2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function BoardSessionsPage() {
  await requireRole(["board", "admin"]);

  return (
    <div>
      <PageHeader title="Manage Sessions" description="Create and manage your availability slots.">
        <Button className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy">
          <Plus className="h-4 w-4 mr-2" /> Add Slot
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Create New Slot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Date & Start Time</Label>
              <Input type="datetime-local" />
            </div>
            <div>
              <Label>Duration (minutes)</Label>
              <Input type="number" defaultValue={30} min={15} max={120} />
            </div>
            <div>
              <Label>Total Spots</Label>
              <Input type="number" defaultValue={1} min={1} max={20} />
            </div>
            <Button className="w-full bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy">
              Create Slot
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Upcoming Slots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "May 15, 2026", time: "10:00 AM", duration: 30, spots: "1/3 booked" },
                { date: "May 18, 2026", time: "2:00 PM", duration: 45, spots: "2/2 booked" },
                { date: "May 22, 2026", time: "11:00 AM", duration: 30, spots: "0/1 booked" },
              ].map((slot, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{slot.date} at {slot.time}</p>
                      <p className="text-xs text-muted-foreground">{slot.duration} min &middot; {slot.spots}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
