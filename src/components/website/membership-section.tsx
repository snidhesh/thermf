import { ScrollReveal } from "./scroll-reveal";

const tiers = [
  {
    label: "Fellow · Premium",
    name: "RMF Fellow",
    chipType: "gold" as const,
    chipText: "By invitation only",
    featured: true,
    desc: "Fellows have completed the full Dubai immersion with Dr Marina Cordeiro and stand as living proof of the science they prescribe. The RMF Fellow badge is earned through transformation, not a course. Renewed each year through continued commitment.",
    features: [
      "Full immersion with Dr Marina Cordeiro in Dubai",
      "Clinical visits, networking, consultative sessions with medical exams and structured study",
      "Lived experience of the protocols they will prescribe",
      "6 months post-visit clinic operational support",
      "Personalised market positioning strategy by geography and specialty",
      "Access to the global RMF Fellows network and board",
      "Annual renewal maintains public badge rights",
    ],
    badge: null,
  },
  {
    label: "Member · Professional",
    name: "RMF Member",
    chipType: "gold" as const,
    chipText: "By invitation",
    featured: false,
    desc: "A professional home for physicians whose practice already reflects the regenerative medicine standard. Admitted exclusively by invitation from a Fellow or board member. Access to the global diagnostic and supplement network, the clinical content library, and direct Fellow connections.",
    features: [
      "Global access to RMF-approved diagnostic panels",
      "Curated supplement access worldwide",
      "Full clinical protocol and content library",
      "Supplement guide updated quarterly by the scientific board",
      "Full access to the RMF Online Technical Hub",
      "Live webinars, case reviews, and board member sessions",
      "Private network with direct Fellow and board connections",
      "5 online consultative sessions with a board member of their choice",
      "Priority consideration for the immersion programme",
    ],
    badge: { text: "Member directory only · No public badge", type: "res" as const },
  },
  {
    label: "Associate · Entry",
    name: "RMF Associate",
    chipType: "soon" as const,
    chipText: "Coming soon",
    featured: false,
    desc: "A structured entry into the RMF for emerging-market and early-career physicians building towards full eligibility. Access to clinical content, the supplement guide, and the broader community, with a direct line to scientific leadership through consultative sessions.",
    features: [
      "Selected RMF clinical content and research updates",
      "RMF Supplement Guide, standard version",
      "Associate community forum and peer network access",
      "Discounted access to RMF congresses and events",
      "2 online consultative sessions with a board member of their choice",
      "Clear pathway to Member via invitation from a Fellow or board member",
    ],
    badge: { text: "No badge rights at this level", type: "none" as const },
  },
];

const chipStyles = {
  gold: "bg-[rgba(184,137,42,0.1)] border border-[rgba(184,137,42,0.22)] text-[var(--wt-gold)]",
  soon: "bg-[rgba(92,122,150,0.07)] border border-[rgba(92,122,150,0.12)] text-[rgba(92,122,150,0.6)]",
};

const badgeStyles = {
  res: "bg-[rgba(92,122,150,0.07)] border border-[rgba(92,122,150,0.14)] text-[rgba(92,122,150,0.7)]",
  none: "bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.2)]",
};

export function MembershipSection() {
  return (
    <section
      id="membership"
      className="py-[60px] md:py-[92px] px-5 md:px-[52px] bg-[var(--wt-bg)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[620px] mb-[52px]">
          <div className="wt-eyebrow">Membership</div>
          <h2 className="wt-heading">
            An invitation
            <br />
            to <em>belong.</em>
          </h2>
          <p className="wt-lead">
            The RMF recognises physicians who have committed to practising at
            the highest level of regenerative medicine. Each pathway reflects a
            different depth of that commitment, earned through demonstrated
            practice, peer endorsement, or lived transformation.
          </p>
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--wt-border)] border border-[var(--wt-border)] rounded-md overflow-hidden">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`${
                  tier.featured
                    ? "bg-[var(--wt-bg3)]"
                    : "bg-[var(--wt-bg2)]"
                } p-[30px] md:p-9 flex flex-col relative transition-colors hover:bg-[var(--wt-bg3)] ${
                  tier.featured
                    ? "before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-[var(--wt-gold)]"
                    : ""
                }`}
              >
                <div className="text-[9px] tracking-[3px] text-[var(--wt-gold)] uppercase mb-3">
                  {tier.label}
                </div>
                <div className="font-heading text-[34px] font-light text-white mb-2.5 leading-none">
                  {tier.name}
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 rounded-[2px] py-1 px-3 text-[9px] tracking-[2px] uppercase mb-[18px] w-fit ${
                    chipStyles[tier.chipType]
                  }`}
                >
                  {tier.chipText}
                </div>
                <p className="text-[13px] text-[rgba(255,255,255,0.42)] leading-[1.7] mb-[22px] flex-1">
                  {tier.desc}
                </p>
                <ul className="flex flex-col gap-2 mb-6">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="text-[12px] text-[rgba(255,255,255,0.46)] flex items-start gap-[9px] leading-[1.5]"
                    >
                      <span className="w-[3px] h-[3px] rounded-full bg-[var(--wt-gold)] shrink-0 mt-[6px]" />
                      {f}
                    </li>
                  ))}
                </ul>
                {tier.badge && (
                  <div
                    className={`text-[10px] py-2 px-3 rounded-[2px] text-center tracking-[0.8px] mt-auto ${
                      badgeStyles[tier.badge.type]
                    }`}
                  >
                    {tier.badge.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
