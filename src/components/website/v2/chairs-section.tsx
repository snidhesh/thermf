import Image from "next/image";
import { ScrollReveal } from "@/components/website/scroll-reveal";

const chairs = [
  {
    num: "01",
    title: "Systemic Regenerative Medicine",
    desc: "Stem cells, exosomes, PRP and cellular therapies",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
        <path d="M16 4v6M16 22v6M4 16h6M22 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5 7.5l4.2 4.2M20.3 20.3l4.2 4.2M7.5 24.5l4.2-4.2M20.3 11.7l4.2-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Neuroregeneration & Brain Health",
    desc: "Neuroplasticity, cognition and degenerative prevention",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 4c-4 0-7 2-8 5-1.5 0-3 1.5-3 3.5 0 1.5.8 2.8 2 3.3-.2.8-.2 1.5 0 2.2-1.2.5-2 1.8-2 3.2 0 2 1.5 3.5 3 3.5 1 3 4 5 8 5s7-2 8-5c1.5 0 3-1.5 3-3.5 0-1.4-.8-2.7-2-3.2.2-.7.2-1.4 0-2.2 1.2-.5 2-1.8 2-3.3 0-2-1.5-3.5-3-3.5-1-3-4-5-8-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 8v16M12 12c2 1 4 1 6 0M11 18c2-1 5-1 8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Functional Longevity",
    desc: "Active prevention, metabolic health, aging biomarkers",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 4v2M16 26v2M8 8l1.5 1.5M22.5 22.5L24 24M4 16h2M26 16h2M8 24l1.5-1.5M22.5 9.5L24 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Metabolic Medicine & Obesity",
    desc: "Metabolic dysfunction and advanced weight management",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 4c-2 0-4 2-4 5 0 2 1 4 2.5 5.5L12 28h8l-2.5-13.5C19 13 20 11 20 9c0-3-2-5-4-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13 20h6M14 24h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Integrative Oncology",
    desc: "Regenerative support and patient quality of life",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 4L6 10v8c0 6 4.5 11.5 10 13 5.5-1.5 10-7 10-13v-8L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 16h8M16 12v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Hormonal & Endocrine Health",
    desc: "Hormonal modulation and endocrine longevity",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 14v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 20h8M13 24h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="10" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Cardiovascular Medicine",
    desc: "Vascular regeneration and endothelial health",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 28s-10-6-10-14c0-4 3-7 6-7 2 0 3.5 1 4 2.5.5-1.5 2-2.5 4-2.5 3 0 6 3 6 7 0 8-10 14-10 14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 16h4l2-3 2 6 2-4 2 1h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "Regenerative Aesthetics",
    desc: "Advanced dermatology and skin longevity",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="22" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 21c1 2 3 2 4 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "09",
    title: "Regenerative Dentistry",
    desc: "Oral health as systemic pillar, tissue regeneration",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M11 5c-3 0-5 2.5-5 5.5 0 3.5 2 5.5 3 8.5 1.5 4.5 1.5 8 3 8s2-3 2-5c0 2 .5 5 2 5s1.5-3.5 3-8c1-3 3-5 3-8.5C22 7.5 20 5 17 5c-1 0-2 1-2 1H15s-1-1-4-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "10",
    title: "Male & Female Health",
    desc: "Fertility and sex-specific healthy aging",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="12" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 23v5M10 26h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M25.5 10.5L28 8M28 8h-4M28 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "11",
    title: "Research & Clinical Data",
    desc: "Data collection, protocols and results tracking",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="5" y="4" width="22" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 12h12M10 16h8M10 20h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10 8h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "12",
    title: "Global Medical Leadership",
    desc: "Certification, mobility, exchange and ethics",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="4.5" ry="11" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 12h22M5 20h22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M16 5v22" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export function ChairsSectionV2() {
  return (
    <section id="chairs" className="bg-white py-14 md:py-20 px-5 md:px-12 border-t border-[var(--wt2-border)]">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[11px] tracking-[3px] uppercase text-[var(--wt2-primary)] font-semibold mb-3 text-center">
          12 Scientific Chairs
        </p>
        <h2 className="font-heading text-[32px] md:text-[38px] font-light text-[var(--wt2-text)] text-center mb-3">
          Areas of Clinical Focus
        </h2>
        <p className="text-[15px] text-[var(--wt2-text-muted)] text-center max-w-[600px] mx-auto mb-8">
          Our clinical framework is structured around 12 interconnected scientific chairs. Each is led by an institutional expert, not a guest speaker, but a committed clinical leader.
        </p>

        {/* Lab image */}
        <div className="relative rounded-lg overflow-hidden aspect-[21/5] mb-10">
          <Image
            src="/images/lab-research.jpg"
            alt="Medical research laboratory"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90" />
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {chairs.map((chair) => (
              <div
                key={chair.num}
                className="bg-[var(--wt2-bg-alt)] border border-[var(--wt2-border)] rounded p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <div className="text-[var(--wt2-primary)] opacity-60 group-hover:opacity-100 transition-opacity mb-3">
                  {chair.icon}
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-semibold text-[var(--wt2-primary)] opacity-40">
                    {chair.num}
                  </span>
                  <h3 className="text-[14px] font-semibold text-[var(--wt2-text)] leading-[1.3]">
                    {chair.title}
                  </h3>
                </div>
                <p className="text-[12px] text-[var(--wt2-text-muted)] leading-[1.5]">
                  {chair.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
