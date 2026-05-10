import Link from "next/link";
import Image from "next/image";

export function HeroV2() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full min-h-[520px] md:min-h-[600px] overflow-hidden flex items-center pt-[83px] bg-gradient-to-br from-[#0F2A45] via-[#1B3A5C] to-[#0A1628]">
        {/* Background image */}
        <Image
          src="/images/hero-medical.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          priority
        />
        {/* Decorative dot pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:32px_32px] pointer-events-none" />

        {/* Gold gradient strip at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-[var(--wt2-gold)] to-transparent opacity-40" />

        {/* Content */}
        <div className="max-w-[1100px] mx-auto px-5 md:px-12 py-16 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            {/* Left column — text */}
            <div>
              <p className="text-[10px] tracking-[3px] text-[var(--wt2-gold)] uppercase font-medium mb-4">
                Headquartered in the UAE · Global Medical Federation · Est. 2025
              </p>
              <h1 className="font-heading text-[36px] md:text-[48px] font-light text-white leading-[1.1] mb-3">
                Regenerative Medicine Federation
              </h1>
              <p className="text-[18px] text-white/80 italic font-heading mb-5">
                Where Science Becomes Practice.
              </p>
              <p className="text-[15px] text-white/60 leading-[1.75] mb-4 max-w-[540px]">
                The RMF is an invitation-only scientific society and elite medical hub for established physicians at the frontier of evidence-based regenerative medicine. We connect, advance, and recognise physicians who have committed to the highest level of practice in peptides, stem cells, exosomes, longevity biology, and cellular protocols.
              </p>
              <p className="text-[14px] text-white/50 leading-[1.7] mb-6 max-w-[540px]">
                Membership is earned through a rigorous process. It is not a transaction.
              </p>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Invitation only", "Evidence-based", "UAE headquarters", "Global network"].map((chip) => (
                  <span
                    key={chip}
                    className="bg-white/5 border border-white/15 rounded px-3 py-1.5 text-[11px] tracking-[1px] uppercase text-white/60"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="flex flex-row gap-3">
                <Link
                  href="/v2#contact"
                  className="bg-[var(--wt2-gold)] text-white px-7 py-3 text-[12px] tracking-[1.5px] uppercase font-semibold hover:bg-[var(--wt2-gold-light)] transition-colors rounded-sm"
                >
                  Register Interest
                </Link>
                <Link
                  href="/v2#about"
                  className="border border-white/30 text-white/80 px-7 py-3 text-[12px] tracking-[1.5px] uppercase font-medium hover:bg-white/10 transition-colors rounded-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right column — decorative logo */}
            <div className="hidden lg:block">
              <Image
                src="/logo.png"
                width={220}
                height={220}
                alt="RMF Logo"
                className="w-[220px] h-[220px] object-contain opacity-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlights Bar */}
      <div className="bg-white border-b border-[var(--wt2-border)] py-5">
        <div className="max-w-[1100px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-heading text-[32px] font-light text-[var(--wt2-primary)]">
                24+
              </div>
              <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--wt2-text-muted)]">
                Countries
              </div>
            </div>
            <div>
              <div className="font-heading text-[32px] font-light text-[var(--wt2-primary)]">
                12
              </div>
              <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--wt2-text-muted)]">
                Scientific Chairs
              </div>
            </div>
            <div>
              <div className="font-heading text-[32px] font-light text-[var(--wt2-primary)]">
                3
              </div>
              <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--wt2-text-muted)]">
                Membership Tiers
              </div>
            </div>
            <div>
              <div className="font-heading text-[24px] font-light text-[var(--wt2-primary)]">
                Est. 2025
              </div>
              <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--wt2-text-muted)]">
                UAE Headquarters
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
