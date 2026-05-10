import Image from "next/image";
import { ScrollReveal } from "@/components/website/scroll-reveal";
import { BookOpen, Users, Stethoscope, Award } from "lucide-react";

const pillars = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Knowledge",
    desc: "Research access, clinical protocols, scientific literature, and an advanced immersion curriculum at the frontier of regenerative medicine.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Network",
    desc: "Peer-to-peer collaboration, board member access, consultative sessions, seminars, webinars, and international congresses.",
  },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    title: "Practice",
    desc: "Clinical support, market positioning, supplement and diagnostic access, and business tools for clinic operations and growth.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Recognition",
    desc: "The RMF Fellow badge, member directory, and CME tracking. Verified markers of frontline regenerative medicine commitment.",
  },
];

export function AboutMembershipV2() {
  return (
    <section id="about" className="bg-white py-14 md:py-20 px-5 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column — text */}
          <ScrollReveal>
            <div>
              <p className="text-[11px] tracking-[3px] uppercase text-[var(--wt2-primary)] font-semibold mb-3">
                About the Federation
              </p>
              <h2 className="font-heading text-[30px] md:text-[36px] font-light text-[var(--wt2-text)] leading-[1.2] mb-5">
                Not a platform. A hub.
              </h2>
              <div className="w-[40px] h-[2px] bg-[var(--wt2-gold)] mb-5" />
              <p className="text-[15px] text-[var(--wt2-text-body)] leading-[1.8] mb-4">
                The RMF is a global network of established physicians committed to practising regenerative medicine at its highest level. Part scientific network, part clinical community, part professional hub, it connects physicians, advances their practice, and elevates what regenerative medicine looks like when done right.
              </p>

              {/* Quote */}
              <div className="border-l-[3px] border-[var(--wt2-gold)] pl-5 my-6">
                <p className="font-heading text-[18px] italic text-[var(--wt2-text-body)] leading-[1.6]">
                  &ldquo;You don&apos;t learn regenerative medicine. You become it.&rdquo;
                </p>
                <p className="text-[13px] text-[var(--wt2-text-muted)] mt-2">
                  — Dr. Marina Cordeiro
                </p>
              </div>

              <p className="text-[15px] text-[var(--wt2-text-body)] leading-[1.8]">
                Headquartered in the UAE and reaching physicians across 24 countries, the RMF operates across four pillars: Knowledge, Network, Practice, and Recognition. It is not a course platform. It is a federation of physicians who believe the future of medicine belongs to those willing to live it.
              </p>
            </div>
          </ScrollReveal>

          {/* Right column — pillars */}
          <ScrollReveal delay={0.15}>
            <div className="bg-[var(--wt2-bg-alt)] border border-[var(--wt2-border)] rounded p-7">
              <h3 className="text-[15px] font-semibold text-[var(--wt2-text)] mb-5">
                Our Four Pillars
              </h3>
              <div>
                {pillars.map((pillar, i) => (
                  <div
                    key={pillar.title}
                    className={`flex gap-4 items-start py-4 ${
                      i < pillars.length - 1
                        ? "border-b border-[var(--wt2-border)]"
                        : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-[var(--wt2-border)] flex items-center justify-center text-[var(--wt2-primary)] shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-[var(--wt2-text)] mb-1">
                        {pillar.title}
                      </div>
                      <div className="text-[13px] text-[var(--wt2-text-muted)] leading-[1.6]">
                        {pillar.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Illustrative image banner */}
        <div className="mt-14 relative overflow-hidden rounded-lg aspect-[21/7]">
          <Image
            src="/images/medical-team.jpg"
            alt="Medical professionals collaborating"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(27,58,92,0.85)] to-[rgba(27,58,92,0.7)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 text-center max-w-[500px] mx-auto px-5">
              <p className="text-[11px] tracking-[3px] uppercase text-white/60 font-semibold mb-2">
                Global Reach
              </p>
              <p className="font-heading text-[24px] md:text-[28px] font-light text-white">
                Connecting physicians across <span className="text-[var(--wt2-gold)]">24 countries</span>
              </p>
              <p className="text-[14px] text-white/60 mt-3">
                From the UAE to Brazil, the UK to Australia — a network built on shared commitment to clinical excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
