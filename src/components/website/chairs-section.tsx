import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";

const chairs = [
  {
    num: "01",
    name: "Systemic Regenerative Medicine",
    desc: "Stem cells, exosomes, PRP and cellular therapies",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
        <path d="M16 4v6M16 22v6M4 16h6M22 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5 7.5l4.2 4.2M20.3 20.3l4.2 4.2M7.5 24.5l4.2-4.2M20.3 11.7l4.2-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    name: "Neuroregeneration & Brain Health",
    desc: "Neuroplasticity, cognition and degenerative prevention",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 4c-4 0-7 2-8 5-1.5 0-3 1.5-3 3.5 0 1.5.8 2.8 2 3.3-.2.8-.2 1.5 0 2.2-1.2.5-2 1.8-2 3.2 0 2 1.5 3.5 3 3.5 1 3 4 5 8 5s7-2 8-5c1.5 0 3-1.5 3-3.5 0-1.4-.8-2.7-2-3.2.2-.7.2-1.4 0-2.2 1.2-.5 2-1.8 2-3.3 0-2-1.5-3.5-3-3.5-1-3-4-5-8-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 8v16M12 12c2 1 4 1 6 0M11 18c2-1 5-1 8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "Functional Longevity",
    desc: "Active prevention, metabolic health, aging biomarkers",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 4v2M16 26v2M4 16h2M26 16h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    name: "Metabolic Medicine & Obesity",
    desc: "Metabolic dysfunction and advanced weight management",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 4c-2 0-4 2-4 5 0 2 1 4 2.5 5.5L12 28h8l-2.5-13.5C19 13 20 11 20 9c0-3-2-5-4-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13 20h6M14 24h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "05",
    name: "Integrative Oncology",
    desc: "Regenerative support and patient quality of life",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 4L6 10v8c0 6 4.5 11.5 10 13 5.5-1.5 10-7 10-13v-8L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 16h8M16 12v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "06",
    name: "Hormonal & Endocrine Health",
    desc: "Hormonal modulation and endocrine longevity",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 14v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 20h8M13 24h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="10" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "07",
    name: "Cardiovascular Medicine",
    desc: "Vascular regeneration and endothelial health",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 28s-10-6-10-14c0-4 3-7 6-7 2 0 3.5 1 4 2.5.5-1.5 2-2.5 4-2.5 3 0 6 3 6 7 0 8-10 14-10 14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 16h4l2-3 2 6 2-4 2 1h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "08",
    name: "Regenerative Aesthetics",
    desc: "Advanced dermatology and skin longevity",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="22" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 21c1 2 3 2 4 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "09",
    name: "Regenerative Dentistry",
    desc: "Oral health as systemic pillar, tissue regeneration",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M11 5c-3 0-5 2.5-5 5.5 0 3.5 2 5.5 3 8.5 1.5 4.5 1.5 8 3 8s2-3 2-5c0 2 .5 5 2 5s1.5-3.5 3-8c1-3 3-5 3-8.5C22 7.5 20 5 17 5c-1 0-2 1-2 1H15s-1-1-4-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "10",
    name: "Male & Female Health",
    desc: "Fertility and sex-specific healthy aging",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="12" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 23v5M10 26h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M25.5 10.5L28 8M28 8h-4M28 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "11",
    name: "Research & Clinical Data",
    desc: "Data collection, protocols and results tracking",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <rect x="5" y="4" width="22" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 12h12M10 16h8M10 20h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10 8h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "12",
    name: "Global Medical Leadership",
    desc: "Certification, mobility, exchange and ethics",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="4.5" ry="11" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 12h22M5 20h22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M16 5v22" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export function ChairsSection() {
  return (
    <section
      id="chairs"
      className="py-[60px] md:py-[92px] px-5 md:px-[52px] bg-[var(--wt-bg2)] border-t border-[var(--wt-border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="wt-eyebrow">12 Scientific Chairs</div>
        <h2 className="wt-heading">
          Areas of
          <br />
          <em>Clinical Focus</em>
        </h2>
        <p className="wt-lead">
          Our clinical framework is structured around 12 interconnected
          scientific chairs. Each is led by an institutional expert, not a guest
          speaker, but a committed clinical leader.
        </p>

        {/* Lab banner */}
        <div className="relative rounded overflow-hidden aspect-[21/5] mt-8 mb-11">
          <Image
            src="/images/lab-research.jpg"
            alt="Research laboratory"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--wt-bg2)] via-[rgba(4,16,30,0.5)] to-[var(--wt-bg2)]" />
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-11">
            {chairs.map((c) => (
              <div
                key={c.num}
                className="bg-[var(--wt-bg3)] border border-[var(--wt-border)] rounded p-5 transition-all duration-200 hover:border-[rgba(184,137,42,0.32)] hover:bg-[var(--wt-bg4)] hover:-translate-y-0.5 group"
              >
                <div className="text-[var(--wt-gold)] opacity-50 group-hover:opacity-80 transition-opacity mb-2.5">
                  {c.icon}
                </div>
                <div className="font-heading text-[10px] text-[var(--wt-gold)] tracking-[2px] mb-1.5">
                  {c.num}
                </div>
                <div className="text-[13px] font-medium text-white leading-[1.3] mb-1">
                  {c.name}
                </div>
                <div className="text-[11px] text-[var(--wt-slate)] leading-[1.5]">
                  {c.desc}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
