"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/v2" },
  { label: "About", href: "/v2#about" },
  { label: "Membership", href: "/v2#membership" },
  { label: "Chairs", href: "/v2#chairs" },
  { label: "Immersion", href: "/v2#immersion" },
  { label: "Board", href: "/v2#board" },
  { label: "News", href: "/v2#news" },
  { label: "Contact", href: "/v2#contact" },
];

export function NavbarV2() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Gold accent bar */}
      <div className="h-[3px] bg-[var(--wt2-gold)] w-full fixed top-0 z-50" />

      {/* Main header bar */}
      <header
        className={`fixed top-[3px] z-50 w-full h-[80px] bg-white border-b border-[var(--wt2-border)] transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-[1100px] mx-auto h-full flex items-center justify-between px-5 md:px-12">
          {/* Left: Logo + text */}
          <Link href="/v2" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              width={44}
              height={44}
              alt="RMF Logo"
              className="flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-[13px] font-semibold tracking-[1.5px] text-[var(--wt2-primary)] uppercase leading-tight">
                Regenerative Medicine Federation
              </span>
              <span className="text-[10px] tracking-[1px] text-[var(--wt2-text-muted)] uppercase leading-tight">
                UAE-Based Global Scientific Society
              </span>
            </div>
          </Link>

          {/* Right: Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-[var(--wt2-text-body)] hover:text-[var(--wt2-primary)] transition"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-[var(--wt2-border)]">|</span>
            <Link
              href="/login"
              className="text-[12px] text-[var(--wt2-primary)] font-semibold"
            >
              Member Login
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-[var(--wt2-primary)]" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--wt2-primary)]" />
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="lg:hidden bg-white w-full border-b border-[var(--wt2-border)] shadow-md">
            <nav className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[13px] font-medium text-[var(--wt2-text-body)] hover:text-[var(--wt2-primary)] transition py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-[var(--wt2-border)] mt-2 pt-2">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="text-[12px] text-[var(--wt2-primary)] font-semibold py-2 block"
                >
                  Member Login
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer to offset fixed header */}
      <div className="h-[83px]" />
    </>
  );
}
