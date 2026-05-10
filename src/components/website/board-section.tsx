import { Card, CardContent } from "@/components/ui/card";

const boardMembers = [
  {
    name: "Dr. Sarah Al-Rashid",
    title: "Founding Chair",
    specialty: "Regenerative Medicine",
    location: "Dubai, UAE",
  },
  {
    name: "Prof. Michael Chen",
    title: "Vice Chair",
    specialty: "Stem Cell Therapy",
    location: "London, UK",
  },
  {
    name: "Dr. Fatima Hassan",
    title: "Board Member",
    specialty: "Anti-Aging Medicine",
    location: "Abu Dhabi, UAE",
  },
  {
    name: "Dr. James Wilson",
    title: "Board Member",
    specialty: "Orthopedic Regenerative Medicine",
    location: "New York, USA",
  },
  {
    name: "Dr. Aisha Patel",
    title: "Board Member",
    specialty: "Functional Medicine",
    location: "Mumbai, India",
  },
  {
    name: "Dr. Klaus Schmidt",
    title: "Board Member",
    specialty: "Gene Therapy",
    location: "Berlin, Germany",
  },
];

export function BoardSection() {
  return (
    <section id="board" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-rmf-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Leadership
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-rmf-navy mb-4">
            Our Board Members
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Led by world-renowned specialists committed to advancing regenerative
            medicine globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boardMembers.map((member) => (
            <Card key={member.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-rmf-navy flex items-center justify-center shrink-0">
                    <span className="text-rmf-gold font-heading font-bold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-rmf-navy">{member.name}</h3>
                    <p className="text-sm text-rmf-gold">{member.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {member.specialty} &middot; {member.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
