import { ScrollReveal } from "./scroll-reveal";

const videos = [
  {
    title: "Dr. Marina Cordeiro · Keynote Address",
    subtitle: "International Regenerative Medicine Congress · Dubai 2025",
  },
  {
    title: "Live Immersion Session",
    subtitle: "Behind the science · Dubai",
  },
];

const socials = [
  {
    name: "Instagram",
    handle: "@rmfederation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[var(--wt-gold)]">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Regenerative Medicine Federation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[var(--wt-gold)]">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "Connect directly",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[var(--wt-gold)]">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@rmfederation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[var(--wt-gold)]">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

export function NewsSection() {
  return (
    <section
      id="news"
      className="py-[60px] md:py-[92px] px-5 md:px-[52px] bg-[var(--wt-bg3)] border-t border-[var(--wt-border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="wt-eyebrow">News &amp; Media</div>
        <h2 className="wt-heading">
          On stage &amp;
          <br />
          <em>in the field.</em>
        </h2>
        <p className="wt-lead">
          Congress footage, member sessions, and clinical insights from
          Dr.&nbsp;Marina Cordeiro and the RMF physician network.
        </p>

        {/* Video cards */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-11 mb-10">
            {videos.map((v, i) => (
              <div
                key={i}
                className="bg-[var(--wt-bg2)] border border-[var(--wt-border)] rounded overflow-hidden transition-colors hover:border-[rgba(184,137,42,0.3)]"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-[var(--wt-bg4)] relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#071522] via-[#0B1D2E] to-[#071522]" />
                  {/* DNA decoration */}
                  <svg
                    className="absolute opacity-[0.08]"
                    width="180"
                    height="180"
                    viewBox="0 0 140 140"
                    fill="none"
                  >
                    <path
                      d="M62 20 C56 38 56 50 62 63 C68 76 68 88 62 106"
                      stroke="#B8892A"
                      strokeWidth="1.2"
                      opacity=".3"
                    />
                    <path
                      d="M78 20 C84 38 84 50 78 63 C72 76 72 88 78 106"
                      stroke="#B8892A"
                      strokeWidth="1.2"
                      opacity=".3"
                    />
                    <line x1="62" y1="35" x2="78" y2="35" stroke="#B8892A" strokeWidth=".8" opacity=".2" />
                    <line x1="60" y1="48" x2="80" y2="48" stroke="#B8892A" strokeWidth=".8" opacity=".2" />
                    <line x1="62" y1="61" x2="78" y2="61" stroke="#B8892A" strokeWidth=".8" opacity=".2" />
                    <line x1="62" y1="79" x2="78" y2="79" stroke="#B8892A" strokeWidth=".8" opacity=".2" />
                  </svg>
                  {/* Play button */}
                  <div className="w-[50px] h-[50px] rounded-full bg-[var(--wt-gold)] flex items-center justify-center z-10 relative border-2 border-[rgba(255,255,255,0.15)] cursor-pointer hover:bg-[var(--wt-gold-light)] hover:scale-105 transition-all">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[15px] border-l-white ml-[3px]" />
                  </div>
                  <div className="absolute top-2.5 right-2.5 bg-[rgba(184,137,42,0.14)] border border-[rgba(184,137,42,0.28)] rounded-[2px] px-[9px] py-[3px] text-[9px] text-[var(--wt-gold)] tracking-[1px]">
                    + Upload Video
                  </div>
                </div>
                {/* Caption */}
                <div className="p-3.5 px-4">
                  <strong className="block text-[13px] font-medium text-white mb-[3px]">
                    {v.title}
                  </strong>
                  <span className="text-[11px] text-[var(--wt-slate)]">
                    {v.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Social row */}
        <div className="wt-eyebrow mb-[18px]">Follow the Federation</div>
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {socials.map((s) => (
              <div
                key={s.name}
                className="bg-[var(--wt-bg2)] border border-[var(--wt-border)] rounded p-5 flex gap-3 items-center transition-all hover:border-[rgba(184,137,42,0.3)] hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="w-[38px] h-[38px] rounded-full border border-[rgba(184,137,42,0.2)] flex items-center justify-center shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-white mb-0.5">
                    {s.name}
                  </div>
                  <div className="text-[11px] text-[var(--wt-slate)]">
                    {s.handle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
