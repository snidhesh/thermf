import { ScrollReveal } from "./scroll-reveal";

const boardMembers = [
  {
    initials: "MC",
    name: "Dr. Marina Cordeiro",
    role: "Scientific Director",
    bio: "DHA licensed physician specialising in functional and regenerative medicine. Member and Speaker, International Society for Stem Cell Application. Postgraduate in Nutrology. Medical Degree, Federal Fluminense University.",
    tags: ["Peptides", "Stem Cells", "Longevity"],
    tba: false,
  },
  {
    initials: "RA",
    name: "Rafael Azambuja",
    role: "Board Member",
    bio: "Strategic co-founder of the RMF. Engineer and business leader with deep expertise in diagnostics, genetics, longevity, and precision medicine across the UAE and Brazil.",
    tags: ["Strategy", "Precision Medicine"],
    tba: false,
  },
  {
    initials: "+1",
    name: "Board Member",
    role: "To Be Announced",
    bio: "A senior international physician. Appointment subject to scientific board approval. To be announced in due course.",
    tags: [],
    tba: true,
  },
  {
    initials: "+1",
    name: "Board Member",
    role: "To Be Announced",
    bio: "A senior international physician. Appointment subject to scientific board approval. To be announced in due course.",
    tags: [],
    tba: true,
  },
  {
    initials: "+1",
    name: "Board Member",
    role: "To Be Announced",
    bio: "A senior international physician. Appointment subject to scientific board approval. To be announced in due course.",
    tags: [],
    tba: true,
  },
];

export function BoardSection() {
  return (
    <section
      id="board"
      className="py-[60px] md:py-[92px] px-5 md:px-[52px] bg-[var(--wt-bg2)] border-t border-[var(--wt-border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="wt-eyebrow">Scientific Board</div>
        <h2 className="wt-heading">
          Governed by
          <br />
          <em>practitioners.</em>
        </h2>
        <p className="wt-lead">
          The RMF is governed by its founding board and a growing panel of
          internationally recognised clinical leaders. Three further board
          appointments will be announced as the federation expands its scientific
          leadership globally.
        </p>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-11">
            {boardMembers.map((m, i) => (
              <div
                key={`${m.name}-${i}`}
                className={`border border-[var(--wt-border)] rounded overflow-hidden transition-colors hover:border-[rgba(184,137,42,0.35)] ${
                  m.tba ? "" : ""
                }`}
              >
                {/* Top zone */}
                <div className="bg-[var(--wt-bg3)] py-[26px] px-[18px] text-center border-b border-[var(--wt-border)]">
                  <div
                    className={`w-[60px] h-[60px] rounded-full mx-auto mb-[11px] flex items-center justify-center font-heading text-[18px] font-light bg-[var(--wt-bg4)] ${
                      m.tba
                        ? "border-[1.5px] border-dashed border-[rgba(184,137,42,0.2)] text-[rgba(184,137,42,0.2)]"
                        : "border-[1.5px] border-[rgba(184,137,42,0.26)] text-[var(--wt-gold)]"
                    }`}
                  >
                    {m.initials}
                  </div>
                  <div
                    className={`font-heading text-[16px] font-normal mb-[3px] ${
                      m.tba ? "text-[rgba(255,255,255,0.18)]" : "text-white"
                    }`}
                  >
                    {m.name}
                  </div>
                  <div
                    className={`text-[8px] tracking-[1.5px] uppercase ${
                      m.tba
                        ? "text-[rgba(184,137,42,0.2)]"
                        : "text-[var(--wt-gold)]"
                    }`}
                  >
                    {m.role}
                  </div>
                </div>
                {/* Bottom zone */}
                <div className="bg-[var(--wt-bg2)] p-3.5 px-4">
                  <p
                    className={`text-[11px] leading-[1.6] ${
                      m.tba
                        ? "text-[rgba(255,255,255,0.15)]"
                        : "text-[var(--wt-slate)]"
                    }`}
                  >
                    {m.bio}
                  </p>
                  {m.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {m.tags.map((t) => (
                        <span
                          key={t}
                          className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-[2px] px-[7px] py-[2px] text-[9px] text-[rgba(255,255,255,0.26)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
