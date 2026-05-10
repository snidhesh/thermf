import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Associate",
    description: "For physicians beginning their journey in regenerative medicine",
    features: [
      "Access to basic educational content",
      "Member directory access",
      "Community forum participation",
      "Monthly newsletter",
    ],
    highlighted: false,
  },
  {
    name: "Member",
    description: "For established practitioners in regenerative medicine",
    features: [
      "All Associate benefits",
      "Full video library access",
      "Clinical protocol downloads",
      "Board member session booking",
      "Annual immersion program access",
    ],
    highlighted: true,
  },
  {
    name: "Fellow",
    description: "For leaders and pioneers in regenerative medicine",
    features: [
      "All Member benefits",
      "Priority session booking",
      "Exclusive research papers",
      "Speaking opportunities",
      "Advisory board eligibility",
      "Premium networking events",
    ],
    highlighted: false,
  },
];

export function MembershipSection() {
  return (
    <section id="membership" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-rmf-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Membership
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-rmf-navy mb-4">
            Join Our Community
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the membership tier that best fits your career stage and goals
            in regenerative medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-8 ${
                tier.highlighted
                  ? "bg-rmf-navy text-white ring-2 ring-rmf-gold shadow-xl scale-105"
                  : "bg-white border shadow-sm"
              }`}
            >
              <h3 className={`font-heading text-2xl font-bold mb-2 ${
                tier.highlighted ? "text-rmf-gold" : "text-rmf-navy"
              }`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 ${
                tier.highlighted ? "text-gray-300" : "text-muted-foreground"
              }`}>
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${
                      tier.highlighted ? "text-rmf-gold" : "text-rmf-mint"
                    }`} />
                    <span className={tier.highlighted ? "text-gray-200" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                render={<Link href="/register" />}
                className={`w-full ${
                  tier.highlighted
                    ? "bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy"
                    : ""
                }`}
                variant={tier.highlighted ? "default" : "outline"}
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
