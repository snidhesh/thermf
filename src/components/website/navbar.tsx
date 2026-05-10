"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#membership", label: "Membership" },
  { href: "/#chairs", label: "Curriculum" },
  { href: "/#board", label: "Board" },
  { href: "/#news", label: "News" },
  { href: "/#register", label: "Join" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 md:px-[52px] transition-shadow duration-300 border-b border-[rgba(184,137,42,0.14)] bg-[rgba(4,16,30,0.97)] backdrop-blur-[16px] ${
        scrolled ? "shadow-[0_4px_40px_rgba(0,0,0,0.6)]" : ""
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3.5 shrink-0">
        <Image
          src="/logo.png"
          alt="RMF"
          width={44}
          height={44}
          className="h-11 w-auto max-w-[44px] object-contain"
        />
        <div className="flex flex-col leading-none">
          <span className="font-heading text-[15px] text-white tracking-[2px] font-normal">
            Regenerative Medicine Federation
          </span>
          <span className="text-[8px] tracking-[3px] text-[var(--wt-gold)] uppercase mt-0.5 font-light hidden sm:block">
            UAE-Based Global Federation
          </span>
        </div>
      </Link>

      {/* Center nav links */}
      <nav className="hidden lg:flex items-center gap-7">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[12px] tracking-[0.5px] font-light text-[rgba(255,255,255,0.4)] hover:text-[var(--wt-gold-light)] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Right actions */}
      <div className="hidden lg:flex items-center gap-1">
        <Link
          href="/login"
          className="text-[rgba(255,255,255,0.38)] text-[11px] tracking-[1.5px] px-4 py-2 hover:text-[var(--wt-gold-light)] transition-colors font-light border-r border-[rgba(255,255,255,0.08)] mr-1"
        >
          Log In
        </Link>
        <Link
          href="/register"
          className="border border-[rgba(184,137,42,0.5)] text-[var(--wt-gold)] bg-transparent px-[22px] py-2 rounded-[2px] text-[10px] tracking-[2px] uppercase hover:bg-[var(--wt-gold)] hover:text-[var(--wt-bg)] transition-all"
        >
          Become a Member
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        className="lg:hidden p-2 text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-[var(--wt-bg)] border-t border-[var(--wt-border)] p-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-[rgba(255,255,255,0.5)] hover:text-[var(--wt-gold-light)]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-[var(--wt-border)] my-2" />
            <Link
              href="/login"
              className="text-[13px] text-[rgba(255,255,255,0.5)]"
              onClick={() => setMobileOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="border border-[rgba(184,137,42,0.5)] text-[var(--wt-gold)] text-center py-2.5 rounded-[2px] text-[10px] tracking-[2px] uppercase hover:bg-[var(--wt-gold)] hover:text-[var(--wt-bg)] transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Become a Member
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
