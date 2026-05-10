import Image from "next/image";
import { ScrollReveal } from "@/components/website/scroll-reveal";
import {
  BookOpen,
  Microscope,
  Activity,
  FileText,
  Stethoscope,
  Users,
  UserCheck,
  TrendingUp,
  Globe,
  RefreshCw,
  ShieldCheck,
  Award,
  MapPin,
} from "lucide-react";

const phases = [
  {
    num: "01",
    title: "Before Dubai",
    timeline: "Remote \u00B7 4 weeks",
    description:
      "Foundational scientific modules, diagnostic panel review, and baseline health assessments completed remotely before arrival.",
    items: [
      { icon: <BookOpen className="w-4 h-4" />, text: "Online modules in peptide science, stem cell biology, and longevity protocols" },
      { icon: <Microscope className="w-4 h-4" />, text: "Personal diagnostic panel review with scientific board" },
      { icon: <Activity className="w-4 h-4" />, text: "Baseline health metrics and biomarker assessment" },
      { icon: <FileText className="w-4 h-4" />, text: "Pre-immersion reading and case study preparation" },
    ],
    goal: "Scientific foundation",
    active: false,
  },
  {
    num: "02",
    title: "The Dubai Immersion",
    timeline: "On-site \u00B7 5 days",
    description:
      "A transformative clinical immersion in Dubai with Dr Marina Cordeiro. Live protocols, clinical visits, and direct experience of the medicine you will prescribe.",
    items: [
      { icon: <Stethoscope className="w-4 h-4" />, text: "Live clinical protocols with Dr Marina Cordeiro" },
      { icon: <MapPin className="w-4 h-4" />, text: "Clinical site visits and operational walkthroughs" },
      { icon: <Users className="w-4 h-4" />, text: "Networking sessions with fellows and board members" },
      { icon: <Activity className="w-4 h-4" />, text: "Personalised medical exams and protocol exposure" },
      { icon: <BookOpen className="w-4 h-4" />, text: "Structured study and case-based learning" },
    ],
    goal: "Lived transformation",
    active: true,
  },
  {
    num: "03",
    title: "After Dubai",
    timeline: "Remote \u00B7 6 months",
    description:
      "Post-immersion support, clinic operational guidance, market positioning, and ongoing access to the fellow network.",
    items: [
      { icon: <TrendingUp className="w-4 h-4" />, text: "6-month clinic operational support programme" },
      { icon: <Globe className="w-4 h-4" />, text: "Market positioning strategy by geography and specialty" },
      { icon: <Users className="w-4 h-4" />, text: "Ongoing access to fellows network and board" },
      { icon: <RefreshCw className="w-4 h-4" />, text: "Quarterly supplement guide updates" },
      { icon: <UserCheck className="w-4 h-4" />, text: "Annual renewal pathway" },
    ],
    goal: "Clinical integration",
    active: false,
  },
];

const gateItems = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Fellowship Certification",
    desc: "Earned through completion of all three phases. The RMF Fellow badge is a verified marker of frontline commitment.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Annual Renewal",
    desc: "Continued commitment through annual renewal maintains public badge rights and network access.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Global Recognition",
    desc: "Listed in the RMF Fellow directory. Recognised across 24 countries as a practitioner at the highest level.",
  },
];

export function ImmersionSectionV2() {
  return (
    <section
      id="immersion"
      className="bg-[var(--wt2-bg-alt)] py-14 md:py-20 px-5 md:px-12 border-t border-[var(--wt2-border)]"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Dubai banner image */}
        <div className="relative rounded-lg overflow-hidden aspect-[21/6] mb-10">
          <Image
            src="/images/immersion-dubai.jpg"
            alt="Dubai skyline"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(27,58,92,0.8)] via-[rgba(27,58,92,0.5)] to-[rgba(27,58,92,0.8)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[11px] tracking-[3px] uppercase text-white/60 font-semibold mb-2">
                The Immersion Programme
              </p>
              <h2 className="font-heading text-[32px] md:text-[42px] font-light text-white">
                The Dubai Immersion
              </h2>
            </div>
          </div>
        </div>

        <p className="text-[15px] text-[var(--wt2-text-muted)] text-center max-w-[600px] mx-auto mb-12">
          A three-phase programme that transforms how you practise regenerative medicine. Not a course — a clinical and professional transformation.
        </p>

        {/* Decorative timeline connector */}
        <div className="hidden lg:block relative mb-6">
          <div className="absolute top-1/2 left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-[var(--wt2-border)] via-[var(--wt2-primary)] to-[var(--wt2-border)] opacity-30" />
          <div className="flex justify-between px-[12%]">
            <div className="w-3 h-3 rounded-full bg-[var(--wt2-border)] border-2 border-white relative z-10" />
            <div className="w-3 h-3 rounded-full bg-[var(--wt2-primary)] border-2 border-white relative z-10" />
            <div className="w-3 h-3 rounded-full bg-[var(--wt2-border)] border-2 border-white relative z-10" />
          </div>
        </div>

        {/* Three Phases */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
            {phases.map((phase) => (
              <div
                key={phase.num}
                className={`bg-white border rounded overflow-hidden hover:shadow-lg transition-shadow flex flex-col ${
                  phase.active
                    ? "border-[var(--wt2-primary)] shadow-md"
                    : "border-[var(--wt2-border)]"
                }`}
              >
                {phase.active && (
                  <div className="h-[3px] w-full bg-[var(--wt2-primary)]" />
                )}
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] tracking-[1.5px] uppercase font-semibold text-[var(--wt2-primary)] bg-[rgba(27,58,92,0.06)] px-2.5 py-1 rounded">
                      Phase {phase.num}
                    </span>
                    <span className="text-[11px] text-[var(--wt2-text-muted)]">
                      {phase.timeline}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-[var(--wt2-text)] mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-[14px] text-[var(--wt2-text-body)] leading-[1.7] mb-4">
                    {phase.description}
                  </p>
                  <ul className="space-y-3 mb-5 flex-1">
                    {phase.items.map((item) => (
                      <li key={item.text} className="flex gap-2.5">
                        <span className="text-[var(--wt2-primary)] shrink-0 mt-0.5">
                          {item.icon}
                        </span>
                        <span className="text-[13px] text-[var(--wt2-text-body)]">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-[var(--wt2-border)] pt-3 mt-auto">
                    <p className="text-[12px] text-[var(--wt2-gold)] font-semibold uppercase tracking-[1px]">
                      Goal: {phase.goal}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Fellowship Gate */}
        <ScrollReveal delay={0.15}>
          <div className="bg-white border border-[var(--wt2-border)] rounded-lg overflow-hidden">
            {/* Header band */}
            <div className="bg-gradient-to-r from-[#1B3A5C] to-[#0F2A45] px-8 py-5">
              <h3 className="font-heading text-[24px] md:text-[28px] font-light text-white">
                The Fellowship Gate
              </h3>
              <p className="text-[14px] text-white/60 mt-1">
                Completion of all three phases grants the RMF Fellow designation — the highest recognition within the federation.
              </p>
            </div>
            <div className="p-8 md:p-10">
              <p className="text-[15px] text-[var(--wt2-text-body)] text-center mb-8 max-w-[550px] mx-auto">
                It is not a certificate. It is evidence of transformation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {gateItems.map((item, i) => (
                  <div
                    key={item.title}
                    className="text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[rgba(27,58,92,0.06)] border border-[rgba(27,58,92,0.1)] text-[var(--wt2-primary)] flex items-center justify-center mx-auto mb-3">
                      {item.icon}
                    </div>
                    <h4 className="text-[14px] font-semibold text-[var(--wt2-text)] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-[var(--wt2-text-muted)] leading-[1.6]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
