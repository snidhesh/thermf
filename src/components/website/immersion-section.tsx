import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";
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
  MapPin,
  ShieldCheck,
  Award,
} from "lucide-react";

const phases = [
  {
    num: "01",
    tag: "Phase One",
    title: "Before Dubai",
    days: "Remote · 4 weeks",
    desc: "Foundational scientific modules, diagnostic panel review, and baseline health assessments completed remotely before arrival.",
    items: [
      { icon: <BookOpen className="w-3.5 h-3.5" />, text: "Online modules in peptide science, stem cell biology, and longevity protocols" },
      { icon: <Microscope className="w-3.5 h-3.5" />, text: "Personal diagnostic panel review with scientific board" },
      { icon: <Activity className="w-3.5 h-3.5" />, text: "Baseline health metrics and biomarker assessment" },
      { icon: <FileText className="w-3.5 h-3.5" />, text: "Pre-immersion reading and case study preparation" },
    ],
    goal: "Goal → Scientific foundation",
    active: false,
  },
  {
    num: "02",
    tag: "Phase Two",
    title: "The Dubai Immersion",
    days: "On-site · 5 days",
    desc: "A transformative clinical immersion in Dubai with Dr Marina Cordeiro. Live protocols, clinical visits, and direct experience of the medicine you will prescribe.",
    items: [
      { icon: <Stethoscope className="w-3.5 h-3.5" />, text: "Live clinical protocols with Dr Marina Cordeiro" },
      { icon: <MapPin className="w-3.5 h-3.5" />, text: "Clinical site visits and operational walkthroughs" },
      { icon: <Users className="w-3.5 h-3.5" />, text: "Networking sessions with fellows and board members" },
      { icon: <Activity className="w-3.5 h-3.5" />, text: "Personalised medical exams and protocol exposure" },
      { icon: <BookOpen className="w-3.5 h-3.5" />, text: "Structured study and case-based learning" },
    ],
    goal: "Goal → Lived transformation",
    active: true,
  },
  {
    num: "03",
    tag: "Phase Three",
    title: "After Dubai",
    days: "Remote · 6 months",
    desc: "Post-immersion support, clinic operational guidance, market positioning, and ongoing access to the fellow network.",
    items: [
      { icon: <TrendingUp className="w-3.5 h-3.5" />, text: "6-month clinic operational support programme" },
      { icon: <Globe className="w-3.5 h-3.5" />, text: "Market positioning strategy by geography and specialty" },
      { icon: <Users className="w-3.5 h-3.5" />, text: "Ongoing access to fellows network and board" },
      { icon: <RefreshCw className="w-3.5 h-3.5" />, text: "Quarterly supplement guide updates" },
      { icon: <UserCheck className="w-3.5 h-3.5" />, text: "Annual renewal pathway" },
    ],
    goal: "Goal → Clinical integration",
    active: false,
  },
];

const gateItems = [
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    title: "Fellowship Certification",
    desc: "Earned through completion of all three phases. The RMF Fellow badge is a verified marker of frontline commitment.",
  },
  {
    icon: <RefreshCw className="w-4 h-4" />,
    title: "Annual Renewal",
    desc: "Continued commitment through annual renewal maintains public badge rights and network access.",
  },
  {
    icon: <Award className="w-4 h-4" />,
    title: "Global Recognition",
    desc: "Listed in the RMF Fellow directory. Recognised across 24 countries as a practitioner at the highest level.",
  },
];

export function ImmersionSection() {
  return (
    <section
      id="immersion"
      className="py-[60px] md:py-[92px] px-5 md:px-[52px] bg-[var(--wt-bg)] border-t border-[var(--wt-border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Dubai skyline banner */}
        <div className="relative rounded overflow-hidden mb-12 aspect-[21/6]">
          <Image
            src="/images/immersion-dubai.jpg"
            alt="Dubai skyline"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--wt-bg)] via-[rgba(4,16,30,0.6)] to-[var(--wt-bg)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="wt-eyebrow">The Immersion Programme</div>
              <h2 className="font-heading text-[36px] md:text-[48px] font-light text-white leading-[1]">
                The Dubai <em className="text-[var(--wt-gold)] italic">Immersion</em>
              </h2>
            </div>
          </div>
        </div>

        <div className="text-center max-w-[660px] mx-auto mb-[52px]">
          <p className="wt-lead text-center mx-auto">
            A three-phase programme that transforms how you practise
            regenerative medicine. Not a course — a clinical and professional
            transformation.
          </p>
        </div>

        {/* Phases grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--wt-border)] border border-[var(--wt-border)] rounded overflow-hidden mb-9">
            {phases.map((phase) => (
              <div
                key={phase.num}
                className={`${
                  phase.active
                    ? "bg-[var(--wt-bg3)] border-t-2 border-t-[var(--wt-mint)]"
                    : "bg-[var(--wt-bg2)]"
                } p-[26px] md:p-[34px] relative`}
              >
                {/* Watermark number */}
                <div className="absolute top-3.5 right-4 font-heading text-[68px] font-light text-[rgba(184,137,42,0.07)] leading-none pointer-events-none">
                  {phase.num}
                </div>

                <div
                  className={`text-[9px] tracking-[3px] uppercase mb-[9px] ${
                    phase.active
                      ? "text-[var(--wt-mint)]"
                      : "text-[var(--wt-slate)]"
                  }`}
                >
                  {phase.tag}
                </div>
                <h3 className="font-heading text-[24px] font-normal text-white mb-[5px]">
                  {phase.title}
                </h3>
                <div className="text-[11px] text-[var(--wt-slate)] tracking-[0.8px] mb-3.5">
                  {phase.days}
                </div>
                <p className="text-[12px] text-[rgba(255,255,255,0.38)] leading-[1.7] mb-3.5">
                  {phase.desc}
                </p>
                <ul className="flex flex-col gap-2">
                  {phase.items.map((item) => (
                    <li
                      key={item.text}
                      className="text-[12px] text-[rgba(255,255,255,0.44)] flex gap-2.5 items-start leading-[1.45]"
                    >
                      <span
                        className={`shrink-0 mt-[1px] ${
                          phase.active
                            ? "text-[var(--wt-mint)]"
                            : "text-[rgba(184,137,42,0.5)]"
                        }`}
                      >
                        {item.icon}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-3.5 pt-3 border-t border-[rgba(255,255,255,0.05)] text-[9px] tracking-[2px] text-[var(--wt-gold)] uppercase">
                  {phase.goal}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Gate card */}
        <ScrollReveal delay={0.1}>
          <div className="bg-[var(--wt-bg3)] border border-[var(--wt-border)] border-t-[var(--wt-gold)] rounded grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 items-center">
            <div>
              <h3 className="font-heading text-[32px] font-light text-white mb-3 leading-[1.15]">
                The Fellowship
                <br />
                Gate
              </h3>
              <p className="text-[14px] text-[var(--wt-slate)] leading-[1.75]">
                Completion of all three phases grants the RMF Fellow
                designation — the highest recognition within the federation. It
                is not a certificate. It is evidence of transformation.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {gateItems.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3.5 items-start p-3.5 px-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[3px]"
                >
                  <div className="w-8 h-8 rounded-full border border-[rgba(184,137,42,0.22)] flex items-center justify-center shrink-0 text-[var(--wt-gold)]">
                    {item.icon}
                  </div>
                  <div>
                    <strong className="block text-[12px] font-medium text-white mb-0.5">
                      {item.title}
                    </strong>
                    <p className="text-[11px] text-[var(--wt-slate)] leading-[1.5]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
