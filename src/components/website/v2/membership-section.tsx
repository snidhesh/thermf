import { ScrollReveal } from "@/components/website/scroll-reveal";
import Link from "next/link";
import {
  GraduationCap,
  Globe,
  FlaskConical,
  BookOpen,
  Video,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

const tiers = [
  {
    name: "RMF Fellow",
    tag: "By invitation only",
    tagColor: "bg-[rgba(27,58,92,0.08)] text-[var(--wt2-primary)]",
    featured: true,
    description:
      "Fellows have completed the full Dubai immersion with Dr Marina Cordeiro and stand as living proof of the science they prescribe. The RMF Fellow badge is earned through transformation, not a course. Renewed each year through continued commitment.",
    features: [
      { icon: <GraduationCap className="w-4 h-4" />, text: "Full immersion with Dr Marina Cordeiro in Dubai" },
      { icon: <FlaskConical className="w-4 h-4" />, text: "Clinical visits, networking, consultative sessions with medical exams and structured study" },
      { icon: <ShieldCheck className="w-4 h-4" />, text: "Lived experience of the protocols they will prescribe" },
      { icon: <TrendingUp className="w-4 h-4" />, text: "6 months post-visit clinic operational support" },
      { icon: <Globe className="w-4 h-4" />, text: "Personalised market positioning strategy by geography and specialty" },
      { icon: <Users className="w-4 h-4" />, text: "Access to the global RMF Fellows network and board" },
      { icon: <ShieldCheck className="w-4 h-4" />, text: "Annual renewal maintains public badge rights" },
    ],
    badge: "Public Fellow badge + directory listing",
  },
  {
    name: "RMF Member",
    tag: "By invitation",
    tagColor: "bg-[rgba(27,58,92,0.08)] text-[var(--wt2-primary)]",
    featured: false,
    description:
      "A professional home for physicians whose practice already reflects the regenerative medicine standard. Admitted exclusively by invitation from a Fellow or board member. Access to the global diagnostic and supplement network, the clinical content library, and direct Fellow connections.",
    features: [
      { icon: <FlaskConical className="w-4 h-4" />, text: "Global access to RMF-approved diagnostic panels" },
      { icon: <Globe className="w-4 h-4" />, text: "Curated supplement access worldwide" },
      { icon: <BookOpen className="w-4 h-4" />, text: "Full clinical protocol and content library" },
      { icon: <BookOpen className="w-4 h-4" />, text: "Supplement guide updated quarterly by the scientific board" },
      { icon: <Video className="w-4 h-4" />, text: "Full access to the RMF Online Technical Hub" },
      { icon: <Video className="w-4 h-4" />, text: "Live webinars, case reviews, and board member sessions" },
      { icon: <Users className="w-4 h-4" />, text: "Private network with direct Fellow and board connections" },
      { icon: <MessageCircle className="w-4 h-4" />, text: "5 online consultative sessions with a board member of their choice" },
      { icon: <GraduationCap className="w-4 h-4" />, text: "Priority consideration for the immersion programme" },
    ],
    badge: "Member directory only \u00B7 No public badge",
  },
  {
    name: "RMF Associate",
    tag: "Coming soon",
    tagColor: "bg-gray-100 text-[var(--wt2-text-muted)]",
    featured: false,
    description:
      "A structured entry into the RMF for emerging-market and early-career physicians building towards full eligibility. Access to clinical content, the supplement guide, and the broader community, with a direct line to scientific leadership through consultative sessions.",
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "Selected RMF clinical content and research updates" },
      { icon: <BookOpen className="w-4 h-4" />, text: "RMF Supplement Guide, standard version" },
      { icon: <Users className="w-4 h-4" />, text: "Associate community forum and peer network access" },
      { icon: <GraduationCap className="w-4 h-4" />, text: "Discounted access to RMF congresses and events" },
      { icon: <MessageCircle className="w-4 h-4" />, text: "2 online consultative sessions with a board member of their choice" },
      { icon: <TrendingUp className="w-4 h-4" />, text: "Clear pathway to Member via invitation from a Fellow or board member" },
    ],
    badge: "No badge rights at this level",
  },
];

export function MembershipSectionV2() {
  return (
    <section
      id="membership"
      className="bg-[var(--wt2-bg-alt)] py-14 md:py-20 px-5 md:px-12 border-t border-[var(--wt2-border)]"
    >
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[11px] tracking-[3px] uppercase text-[var(--wt2-primary)] font-semibold mb-3 text-center">
          Membership
        </p>
        <h2 className="font-heading text-[32px] md:text-[38px] font-light text-[var(--wt2-text)] text-center mb-3">
          An invitation to belong.
        </h2>
        <p className="text-[15px] text-[var(--wt2-text-muted)] text-center max-w-[650px] mx-auto mb-12">
          The RMF recognises physicians who have committed to practising at the highest level of regenerative medicine. Each pathway reflects a different depth of that commitment, earned through demonstrated practice, peer endorsement, or lived transformation.
        </p>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white border rounded overflow-hidden hover:shadow-lg transition-shadow flex flex-col ${
                  tier.featured
                    ? "border-[var(--wt2-primary)] shadow-md"
                    : "border-[var(--wt2-border)]"
                }`}
              >
                {tier.featured && (
                  <div className="h-[3px] w-full bg-[var(--wt2-primary)]" />
                )}
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[18px] font-semibold text-[var(--wt2-text)]">
                      {tier.name}
                    </h3>
                    <span
                      className={`text-[10px] tracking-[1px] uppercase font-semibold px-2.5 py-1 rounded ${tier.tagColor}`}
                    >
                      {tier.tag}
                    </span>
                  </div>
                  <p className="text-[14px] text-[var(--wt2-text-body)] leading-[1.7] mb-5">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-5 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature.text} className="flex gap-2.5">
                        <span className="text-[var(--wt2-primary)] shrink-0 mt-0.5">
                          {feature.icon}
                        </span>
                        <span className="text-[13px] text-[var(--wt2-text-body)]">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-[var(--wt2-border)] pt-4 mt-auto">
                    <p className="text-[12px] text-[var(--wt2-text-muted)] italic">
                      {tier.badge}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="text-center mt-10">
          <Link
            href="/v2#contact"
            className="bg-[var(--wt2-primary)] text-white px-8 py-3.5 rounded-sm text-[12px] tracking-[1.5px] uppercase font-semibold hover:bg-[var(--wt2-primary-light)] transition-colors inline-block"
          >
            Register Interest
          </Link>
        </div>
      </div>
    </section>
  );
}
