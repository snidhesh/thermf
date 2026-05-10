import { ScrollReveal } from "./scroll-reveal";

const chairs = [
  { num: "01", name: "Systemic Regenerative Medicine", desc: "Stem cells, exosomes, PRP and cellular therapies" },
  { num: "02", name: "Neuroregeneration & Brain Health", desc: "Neuroplasticity, cognition and degenerative prevention" },
  { num: "03", name: "Functional Longevity", desc: "Active prevention, metabolic health, aging biomarkers" },
  { num: "04", name: "Metabolic Medicine & Obesity", desc: "Metabolic dysfunction and advanced weight management" },
  { num: "05", name: "Integrative Oncology", desc: "Regenerative support and patient quality of life" },
  { num: "06", name: "Hormonal & Endocrine Health", desc: "Hormonal modulation and endocrine longevity" },
  { num: "07", name: "Cardiovascular Medicine", desc: "Vascular regeneration and endothelial health" },
  { num: "08", name: "Regenerative Aesthetics", desc: "Advanced dermatology and skin longevity" },
  { num: "09", name: "Regenerative Dentistry", desc: "Oral health as systemic pillar, tissue regeneration" },
  { num: "10", name: "Male & Female Health", desc: "Fertility and sex-specific healthy aging" },
  { num: "11", name: "Research & Clinical Data", desc: "Data collection, protocols and results tracking" },
  { num: "12", name: "Global Medical Leadership", desc: "Certification, mobility, exchange and ethics" },
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

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-11">
            {chairs.map((c) => (
              <div
                key={c.num}
                className="bg-[var(--wt-bg3)] border border-[var(--wt-border)] rounded p-5 transition-all duration-200 hover:border-[rgba(184,137,42,0.32)] hover:bg-[var(--wt-bg4)] hover:-translate-y-0.5"
              >
                <div className="font-heading text-[10px] text-[var(--wt-gold)] tracking-[2px] mb-2">
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
