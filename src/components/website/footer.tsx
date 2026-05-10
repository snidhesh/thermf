import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Federation",
    links: [
      { label: "About the RMF", href: "/#about" },
      { label: "Membership", href: "/#membership" },
      { label: "Scientific Board", href: "/#board" },
      { label: "12 Scientific Chairs", href: "/#chairs" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { label: "News & Media", href: "/#news" },
      { label: "Online Technical Hub", href: "#" },
      { label: "CME Programmes", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Join the Federation", href: "/#register" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "WhatsApp", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--wt-bg)] border-t border-[var(--wt-border)] py-[52px] pb-8 px-5 md:px-[52px]">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 max-w-[1200px] mx-auto mb-10">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <Image
              src="/logo.png"
              alt="RMF"
              width={36}
              height={36}
              className="h-9 w-auto max-w-[36px] object-contain"
            />
            <span className="font-heading text-[13px] text-[rgba(255,255,255,0.42)] tracking-[2px]">
              Regenerative Medicine Federation
            </span>
          </div>
          <p className="text-[12px] text-[rgba(255,255,255,0.18)] leading-[1.75] max-w-[200px]">
            An invitation-only scientific society and elite medical hub for
            established physicians. Headquartered in the UAE.
          </p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h5 className="text-[9px] tracking-[2.5px] text-[rgba(184,137,42,0.55)] uppercase mb-[13px] font-normal">
              {col.title}
            </h5>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-[rgba(255,255,255,0.26)] hover:text-[var(--wt-gold-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.04)] pt-4 flex flex-col sm:flex-row justify-between max-w-[1200px] mx-auto">
        <p className="text-[11px] text-[rgba(255,255,255,0.14)]">
          &copy; {new Date().getFullYear()} Regenerative Medicine
          Federation &middot; Headquartered in the UAE &middot; All rights
          reserved
        </p>
        <p className="text-[11px] text-[rgba(184,137,42,0.35)]">
          Membership is earned, not a transaction
        </p>
      </div>
    </footer>
  );
}
