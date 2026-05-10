import Image from "next/image";
import Link from "next/link";

const chips = [
  "Invitation only",
  "Evidence-based",
  "UAE headquarters",
  "Global network",
];

export function Hero() {
  return (
    <div className="min-h-screen bg-[var(--wt-bg)] flex flex-col items-center justify-center text-center px-5 md:px-[52px] pt-[100px] pb-20 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_38%,rgba(184,137,42,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(184,137,42,0.06)] to-transparent pointer-events-none" />

      {/* Logo */}
      <div className="mb-9 animate-[fadeIn_0.9s_ease_0.2s_both]">
        <Image
          src="/logo.png"
          alt="Regenerative Medicine Federation"
          width={150}
          height={150}
          className="w-[150px] h-[150px] object-contain mx-auto drop-shadow-[0_0_28px_rgba(184,137,42,0.3)]"
          priority
        />
      </div>

      {/* Eyebrow */}
      <div className="text-[9px] tracking-[5px] text-[var(--wt-gold)] uppercase mb-5 animate-[riseUp_0.8s_ease_0.65s_both] font-light">
        Headquartered in the UAE &nbsp;&middot;&nbsp; Global Medical
        Federation &nbsp;&middot;&nbsp; Est. 2025
      </div>

      {/* H1 */}
      <h1 className="font-heading text-[50px] md:text-[78px] font-light text-white leading-[0.94] mb-2 animate-[riseUp_0.8s_ease_0.8s_both]">
        Regenerative
        <br />
        Medicine
        <br />
        <em className="text-[var(--wt-gold)] italic">Federation</em>
      </h1>

      {/* Subtitle */}
      <div className="font-heading text-[22px] font-light text-[rgba(255,255,255,0.28)] italic mb-7 animate-[riseUp_0.8s_ease_0.9s_both]">
        Where Science Becomes Practice.
      </div>

      {/* Separator */}
      <div className="flex items-center gap-3.5 justify-center mb-7 animate-[fadeIn_0.8s_ease_1s_both]">
        <div className="w-12 h-px bg-[rgba(184,137,42,0.3)]" />
        <div className="w-[3px] h-[3px] rounded-full bg-[var(--wt-gold)]" />
        <div className="w-12 h-px bg-[rgba(184,137,42,0.3)]" />
      </div>

      {/* Explainer block */}
      <div className="max-w-[680px] mx-auto mb-5 animate-[riseUp_0.8s_ease_1s_both]">
        <p className="font-heading text-[19px] italic text-[rgba(255,255,255,0.6)] leading-[1.6] mb-4">
          Science that Regenerates. Medicine that Transforms.
        </p>
        <p className="text-[14px] text-[rgba(255,255,255,0.32)] leading-[1.9] font-light">
          The RMF is an invitation-only scientific society and elite medical hub
          for established physicians at the frontier of evidence-based
          regenerative medicine. We connect, advance, and recognise physicians
          who have committed to the highest level of practice in peptides, stem
          cells, exosomes, longevity biology, and cellular protocols.
          <br />
          <br />
          Membership is earned through a rigorous process. It is not a
          transaction.
        </p>
      </div>

      {/* Chips */}
      <div className="flex gap-2.5 justify-center flex-wrap mx-auto my-[22px] mb-11 animate-[riseUp_0.8s_ease_1.05s_both]">
        {chips.map((chip) => (
          <div
            key={chip}
            className="border border-[rgba(184,137,42,0.25)] rounded-[2px] px-4 py-[5px] text-[10px] tracking-[2px] text-[rgba(184,137,42,0.75)] uppercase font-light"
          >
            {chip}
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div className="flex gap-3.5 justify-center animate-[riseUp_0.8s_ease_1.15s_both]">
        <Link
          href="#register"
          className="bg-[var(--wt-gold)] text-[var(--wt-bg)] px-[38px] py-3.5 rounded-[2px] text-[10px] tracking-[2.5px] uppercase font-medium hover:bg-[var(--wt-gold-light)] transition-all inline-block"
        >
          Register Interest
        </Link>
      </div>
    </div>
  );
}
