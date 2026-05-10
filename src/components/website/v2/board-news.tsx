import { ScrollReveal } from "@/components/website/scroll-reveal";
import Link from "next/link";
import { Camera, Globe, MessageCircle, Video } from "lucide-react";

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
    name: "To Be Announced",
    role: "Board Member",
    bio: "A senior international physician. Appointment subject to scientific board approval. To be announced in due course.",
    tags: [],
    tba: true,
  },
  {
    initials: "+1",
    name: "To Be Announced",
    role: "Board Member",
    bio: "A senior international physician. Appointment subject to scientific board approval. To be announced in due course.",
    tags: [],
    tba: true,
  },
  {
    initials: "+1",
    name: "To Be Announced",
    role: "Board Member",
    bio: "A senior international physician. Appointment subject to scientific board approval. To be announced in due course.",
    tags: [],
    tba: true,
  },
];

const newsItems = [
  {
    title: "Dr. Marina Cordeiro \u00B7 Keynote Address",
    subtitle: "International Regenerative Medicine Congress \u00B7 Dubai 2025",
  },
  {
    title: "Live Immersion Session",
    subtitle: "Behind the science \u00B7 Dubai",
  },
];

const socialLinks = [
  { name: "Instagram", handle: "@rmfederation", icon: <Camera className="w-5 h-5" /> },
  { name: "LinkedIn", handle: "Regenerative Medicine Federation", icon: <Globe className="w-5 h-5" /> },
  { name: "WhatsApp", handle: "Connect directly", icon: <MessageCircle className="w-5 h-5" /> },
  { name: "YouTube", handle: "@rmfederation", icon: <Video className="w-5 h-5" /> },
];

export function BoardNewsV2() {
  return (
    <section
      id="board"
      className="bg-white py-14 md:py-20 px-5 md:px-12 border-t border-[var(--wt2-border)]"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* PART 1 — Board */}
        <div className="mb-16">
          <p className="text-[11px] tracking-[3px] uppercase text-[var(--wt2-primary)] font-semibold mb-3">
            Scientific Board
          </p>
          <h2 className="font-heading text-[30px] md:text-[36px] font-light text-[var(--wt2-text)] mb-3">
            Governed by practitioners.
          </h2>
          <p className="text-[15px] text-[var(--wt2-text-muted)] mb-8 max-w-[600px]">
            The RMF is governed by its founding board and a growing panel of internationally recognised clinical leaders. Three further board appointments will be announced as the federation expands its scientific leadership globally.
          </p>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {boardMembers.map((member, i) => (
                <div
                  key={`${member.initials}-${i}`}
                  className="bg-[var(--wt2-bg-alt)] border border-[var(--wt2-border)] rounded p-5 hover:shadow-md transition-shadow flex flex-col"
                >
                  {/* Avatar */}
                  <div
                    className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center font-heading text-[18px] bg-white ${
                      member.tba
                        ? "border border-dashed border-[var(--wt2-border)] text-[var(--wt2-text-muted)]"
                        : "border-2 border-[var(--wt2-primary)] text-[var(--wt2-primary)]"
                    }`}
                  >
                    {member.initials}
                  </div>
                  {/* Name */}
                  <div
                    className={`text-[14px] font-semibold text-center ${
                      member.tba
                        ? "text-[var(--wt2-text-muted)]"
                        : "text-[var(--wt2-text)]"
                    }`}
                  >
                    {member.name}
                  </div>
                  {/* Role */}
                  <div
                    className={`text-[11px] uppercase tracking-[1px] mt-0.5 text-center ${
                      member.tba
                        ? "text-[var(--wt2-text-muted)]"
                        : "text-[var(--wt2-primary)]"
                    }`}
                  >
                    {member.role}
                  </div>
                  {/* Bio */}
                  {member.bio && (
                    <p className="text-[12px] text-[var(--wt2-text-muted)] leading-[1.5] mt-2 text-center">
                      {member.bio}
                    </p>
                  )}
                  {/* Tags */}
                  {member.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[rgba(27,58,92,0.06)] text-[var(--wt2-primary)] text-[10px] tracking-[0.5px] px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* PART 2 — News */}
        <div id="news">
          <p className="text-[11px] tracking-[3px] uppercase text-[var(--wt2-primary)] font-semibold mb-3">
            News &amp; Media
          </p>
          <h2 className="font-heading text-[30px] md:text-[36px] font-light text-[var(--wt2-text)] mb-3">
            On stage &amp; in the field.
          </h2>
          <p className="text-[15px] text-[var(--wt2-text-muted)] mb-8 max-w-[600px]">
            Congress footage, member sessions, and clinical insights from Dr. Marina Cordeiro and the RMF physician network.
          </p>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {newsItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-[var(--wt2-bg-alt)] border border-[var(--wt2-border)] rounded overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-[#1B3A5C] to-[#0F2A45] flex items-center justify-center relative">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:20px_20px] pointer-events-none" />
                    {/* Play button */}
                    <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                      <svg
                        className="w-5 h-5 text-white ml-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="8,5 20,12 8,19" />
                      </svg>
                    </div>
                    {/* Corner tag */}
                    <span className="absolute top-3 right-3 bg-white/10 border border-white/20 rounded px-2 py-1 text-[9px] text-white/60 tracking-[1px] uppercase">
                      Video
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[15px] font-semibold text-[var(--wt2-text)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[var(--wt2-text-muted)]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal delay={0.1}>
            <h3 className="text-[13px] font-semibold text-[var(--wt2-text)] mb-4">
              Follow the Federation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href="#"
                  className="bg-[var(--wt2-bg-alt)] border border-[var(--wt2-border)] rounded p-4 hover:shadow-md transition-shadow flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-[var(--wt2-border)] flex items-center justify-center text-[var(--wt2-primary)] group-hover:bg-[rgba(27,58,92,0.06)] transition-colors shrink-0">
                    {social.icon}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[var(--wt2-text)]">
                      {social.name}
                    </div>
                    <div className="text-[11px] text-[var(--wt2-text-muted)]">
                      {social.handle}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
