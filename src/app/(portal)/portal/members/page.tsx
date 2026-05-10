import { requireAuth } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { TierBadge } from "@/components/shared/tier-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Mail } from "lucide-react";

export const dynamic = "force-dynamic";

const sampleMembers = [
  { id: "1", name: "Dr. Ahmed Khan", specialty: "Stem Cell Therapy", country: "UAE", city: "Dubai", tier: "fellow" },
  { id: "2", name: "Dr. Emily Rodriguez", specialty: "Regenerative Medicine", country: "United States", city: "Miami", tier: "member" },
  { id: "3", name: "Dr. Yuki Tanaka", specialty: "Anti-Aging Medicine", country: "United Kingdom", city: "London", tier: "fellow" },
  { id: "4", name: "Dr. Priya Sharma", specialty: "Functional Medicine", country: "India", city: "Mumbai", tier: "member" },
  { id: "5", name: "Dr. Hans Mueller", specialty: "Orthopedic Regenerative Medicine", country: "Germany", city: "Berlin", tier: "associate" },
  { id: "6", name: "Dr. Layla Al-Sayed", specialty: "PRP Treatment", country: "Saudi Arabia", city: "Riyadh", tier: "member" },
];

export default async function MembersPage() {
  await requireAuth();

  return (
    <div>
      <PageHeader
        title="Member Directory"
        description="Connect with fellow RMF members worldwide."
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search members..." className="pl-9 w-64" />
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-rmf-navy flex items-center justify-center">
                  <span className="text-rmf-gold font-bold text-sm">
                    {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{member.name}</h3>
                  <p className="text-xs text-rmf-gold">{member.specialty}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                <MapPin className="h-3 w-3" />
                {member.city}, {member.country}
              </div>
              <div className="flex items-center justify-between">
                <TierBadge tier={member.tier} />
                <Button size="sm" variant="outline">
                  <Mail className="h-3 w-3 mr-1" /> Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
