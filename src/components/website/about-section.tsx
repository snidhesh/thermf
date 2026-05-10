import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";
import { BookOpen, Users, Stethoscope, Award } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: <BookOpen className="w-4 h-4" />,
    title: "Knowledge",
    desc: "Research access, clinical protocols, scientific literature, and an advanced immersion curriculum at the frontier of regenerative medicine.",
  },
  {
    num: "02",
    icon: <Users className="w-4 h-4" />,
    title: "Network",
    desc: "Peer-to-peer collaboration, board member access, consultative sessions, seminars, webinars, and international congresses.",
  },
  {
    num: "03",
    icon: <Stethoscope className="w-4 h-4" />,
    title: "Practice",
    desc: "Clinical support, market positioning, supplement and diagnostic access, and business tools for clinic operations and growth.",
  },
  {
    num: "04",
    icon: <Award className="w-4 h-4" />,
    title: "Recognition",
    desc: "The RMF Fellow badge, member directory, and CME tracking. Verified markers of frontline regenerative medicine commitment.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-[60px] md:py-[92px] px-5 md:px-[52px] bg-[var(--wt-bg2)] border-t border-b border-[var(--wt-border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left column */}
          <ScrollReveal>
            <div className="wt-eyebrow">About the Federation</div>
            <h2 className="wt-heading">
              Not a platform.
              <br />A <em>hub.</em>
            </h2>
            <div className="wt-rule" />
            <p className="wt-lead mb-6">
              The RMF is a global network of established physicians committed to
              practising regenerative medicine at its highest level. Part
              scientific network, part clinical community, part professional hub,
              it connects physicians, advances their practice, and elevates what
              regenerative medicine looks like when done right.
            </p>
            <div className="font-heading text-[21px] font-light text-[rgba(255,255,255,0.7)] leading-[1.75] italic border-l-2 border-[var(--wt-gold)] pl-6 my-6">
              &ldquo;You don&rsquo;t learn regenerative medicine. You become
              it.&rdquo; &mdash; Dr. Marina Cordeiro
            </div>
            <p className="wt-lead">
              Headquartered in the UAE and reaching physicians across 24
              countries, the RMF operates across four pillars: Knowledge,
              Network, Practice, and Recognition. It is not a course platform. It
              is a federation of physicians who believe the future of medicine
              belongs to those willing to live it.
            </p>

            {/* Illustrative image */}
            <div className="relative mt-8 rounded overflow-hidden aspect-[16/9]">
              <Image
                src="/images/about-doctors.jpg"
                alt="Medical professionals in clinical setting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--wt-bg2)] via-transparent to-transparent opacity-60" />
            </div>
          </ScrollReveal>

          {/* Right column — pillars */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-2.5">
              {pillars.map((p) => (
                <div
                  key={p.num}
                  className="grid grid-cols-[52px_1fr] border border-[rgba(255,255,255,0.05)] rounded overflow-hidden transition-all duration-200 hover:border-[rgba(184,137,42,0.3)] hover:translate-x-1"
                >
                  <div className="bg-[rgba(184,137,42,0.07)] flex flex-col items-center justify-center gap-2 py-3">
                    <span className="text-[var(--wt-gold)]">{p.icon}</span>
                    <span className="font-heading text-[12px] text-[var(--wt-gold)] tracking-[1px] [writing-mode:vertical-rl] rotate-180">
                      {p.num}
                    </span>
                  </div>
                  <div className="py-4 px-[18px] bg-[rgba(255,255,255,0.023)]">
                    <h4 className="text-[13px] font-medium text-white mb-1">
                      {p.title}
                    </h4>
                    <p className="text-[12px] text-[var(--wt-slate)] leading-[1.55]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
