"use client";

import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Mail, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn("resend", {
        email,
        callbackUrl: "/portal/dashboard",
        redirect: false,
      });
      setSent(true);
    } catch {
      // Handle error
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-[72px]">
        <div className="bg-[var(--wt-bg3)] border border-[var(--wt-border)] rounded max-w-md w-full p-8 text-center">
          <Mail className="h-16 w-16 text-[var(--wt-gold)] mx-auto mb-4" />
          <h2 className="font-heading text-2xl font-light text-white mb-2">
            Check Your Email
          </h2>
          <p className="text-[var(--wt-slate)]">
            We sent a sign-in link to <strong className="text-white">{email}</strong>.
            Click the link in the email to access your account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-[72px]">
      <div className="bg-[var(--wt-bg3)] border border-[var(--wt-border)] rounded max-w-md w-full p-8">
        <div className="text-center mb-8">
          <Image
            src="/logo.png"
            alt="RMF"
            width={64}
            height={64}
            className="h-16 w-16 object-contain mx-auto mb-4"
          />
          <h1 className="font-heading text-2xl font-light text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-[var(--wt-slate)] text-sm">
            Sign in to access the RMF Members Portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="wt-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--wt-gold)] text-[var(--wt-bg)] py-3 rounded-[2px] text-[10px] tracking-[2.5px] uppercase font-medium hover:bg-[var(--wt-gold-light)] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? "Sending..." : "Send Sign-In Link"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="text-xs text-[var(--wt-slate)] text-center mt-6">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-[var(--wt-gold)] hover:underline">
            Apply for membership
          </a>
        </p>
      </div>
    </div>
  );
}
