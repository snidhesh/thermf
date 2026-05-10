"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#membership", label: "Membership" },
  { href: "/#board", label: "Board" },
  { href: "/#news", label: "News" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-rmf-navy flex items-center justify-center">
            <span className="text-rmf-gold font-heading font-bold text-lg">R</span>
          </div>
          <span className="font-heading text-xl font-bold text-rmf-navy hidden sm:block">
            RMF
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-rmf-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" render={<Link href="/login" />}>
            Sign In
          </Button>
          <Button render={<Link href="/register" />} className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy font-semibold">
            Apply Now
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-white p-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-rmf-navy"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2" />
            <Link href="/login" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>
              Sign In
            </Link>
            <Button render={<Link href="/register" />} className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy font-semibold">
              Apply Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
