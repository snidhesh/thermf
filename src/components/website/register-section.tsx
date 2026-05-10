"use client";

import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { Clock, MessageSquare, ShieldCheck } from "lucide-react";

const specialties = [
  "Functional Medicine",
  "Regenerative Medicine",
  "Endocrinology",
  "Internal Medicine / General Practice",
  "Dermatology / Aesthetic Medicine",
  "Neurology",
  "Orthopedics / Sports Medicine",
  "Gynaecology / Women's Health",
  "Urology / Men's Health",
  "Oncology / Integrative Oncology",
  "Cardiology",
  "Psychiatry / Mental Health",
  "Other",
];

const countries = [
  "United Arab Emirates",
  "Brazil",
  "United Kingdom",
  "United States",
  "Saudi Arabia",
  "Qatar",
  "Portugal",
  "Germany",
  "Switzerland",
  "India",
  "Australia",
  "Canada",
  "Other",
];

const experienceRanges = [
  { label: "Less than 1 year", value: 0 },
  { label: "1–2 years", value: 1 },
  { label: "3–5 years", value: 3 },
  { label: "6–10 years", value: 6 },
  { label: "11–15 years", value: 11 },
  { label: "16–20 years", value: 16 },
  { label: "21+ years", value: 21 },
];

export function RegisterSection() {
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const data = {
      firstName: fd.get("firstName") as string,
      lastName: fd.get("lastName") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      specialty: fd.get("specialty") as string,
      country: fd.get("country") as string,
      city: fd.get("city") as string,
      yearsExperience: Number(fd.get("yearsExperience")),
    };

    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to submit");
      }

      const result = await res.json();
      setRefNumber(result.referenceNumber);
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="register"
      className="py-[60px] md:py-[92px] px-5 md:px-[52px] bg-[var(--wt-bg2)] border-t border-[var(--wt-border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-start">
          {/* Left info */}
          <ScrollReveal>
            <div className="wt-eyebrow">Join the Federation</div>
            <h2 className="wt-heading">
              The network
              <br />
              begins <em>here.</em>
            </h2>
            <div className="wt-rule" />
            <p className="wt-lead mb-5">
              The RMF does not have open applications. This form places you on
              the official interest list. Your profile will be reviewed by the
              board within 7 working days, and you will be contacted directly if
              there is alignment.
            </p>
            <div className="font-heading text-[19px] font-light italic text-[rgba(255,255,255,0.38)] leading-[1.75] border-l-2 border-[var(--wt-gold)] pl-5 my-5 mb-[26px]">
              &ldquo;Not only a course, a biological, clinical, and professional
              transformation that redefines your practice and your life.&rdquo;
            </div>

            {/* What happens next - with icons */}
            <div className="p-[15px] bg-[rgba(184,137,42,0.04)] border border-[rgba(184,137,42,0.12)] rounded-[2px]">
              <strong className="block text-[12px] text-[rgba(255,255,255,0.48)] mb-3">
                What happens next
              </strong>
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full border border-[rgba(184,137,42,0.22)] flex items-center justify-center shrink-0">
                    <Clock className="w-3 h-3 text-[var(--wt-gold)]" />
                  </div>
                  <span className="text-[11px] text-[var(--wt-slate)] leading-[1.65] pt-0.5">
                    Your details are reviewed within 7 working days
                  </span>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full border border-[rgba(184,137,42,0.22)] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-3 h-3 text-[var(--wt-gold)]" />
                  </div>
                  <span className="text-[11px] text-[var(--wt-slate)] leading-[1.65] pt-0.5">
                    A board member will reach out if there is alignment
                  </span>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full border border-[rgba(184,137,42,0.22)] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3 h-3 text-[var(--wt-gold)]" />
                  </div>
                  <span className="text-[11px] text-[var(--wt-slate)] leading-[1.65] pt-0.5">
                    Membership and immersion details shared at that stage
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right form */}
          <ScrollReveal delay={0.15}>
            <div className="bg-[var(--wt-bg3)] border border-[var(--wt-border)] rounded overflow-hidden">
              <div className="bg-[var(--wt-bg4)] p-5 px-6 border-b border-[var(--wt-border)]">
                <h3 className="font-heading text-[21px] font-light text-white">
                  Register Your Interest
                </h3>
                <p className="text-[12px] text-[var(--wt-slate)] mt-[3px]">
                  For established physicians seeking RMF membership or immersion
                  selection
                </p>
              </div>

              {!submitted ? (
                <div className="p-5 px-6">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-[11px] mb-[13px]">
                      <div className="wt-field">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Dr. Marina"
                          required
                        />
                      </div>
                      <div className="wt-field">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Cordeiro"
                          required
                        />
                      </div>
                    </div>
                    <div className="wt-field mb-[13px]">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@clinic.com"
                        required
                      />
                    </div>
                    <div className="wt-field mb-[13px]">
                      <label>Mobile / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+971 50 000 0000"
                        required
                      />
                    </div>
                    <div className="wt-field mb-[13px]">
                      <label>Medical Specialty</label>
                      <select name="specialty" required defaultValue="">
                        <option value="" disabled>
                          Select your specialty...
                        </option>
                        {specialties.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-[11px] mb-[13px]">
                      <div className="wt-field">
                        <label>Country of Practice</label>
                        <select name="country" required defaultValue="">
                          <option value="" disabled>
                            Country...
                          </option>
                          {countries.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="wt-field">
                        <label>City of Practice</label>
                        <input
                          type="text"
                          name="city"
                          placeholder="Dubai"
                          required
                        />
                      </div>
                    </div>
                    <div className="wt-field mb-[13px]">
                      <label>Years in Clinical Practice</label>
                      <select name="yearsExperience" required defaultValue="">
                        <option value="" disabled>
                          Select...
                        </option>
                        {experienceRanges.map((r) => (
                          <option key={r.value} value={r.value}>
                            {r.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {error && (
                      <p className="text-[12px] text-red-400 bg-[rgba(239,68,68,0.1)] p-3 rounded mb-3">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[var(--wt-gold)] text-[var(--wt-bg)] py-3 rounded-[2px] text-[10px] tracking-[2.5px] uppercase font-medium mt-[5px] hover:bg-[var(--wt-gold-light)] transition-colors disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Submit Your Interest"}
                    </button>
                    <p className="text-[9px] text-[rgba(255,255,255,0.15)] text-center mt-[9px] leading-[1.6]">
                      By submitting you confirm you hold a valid medical licence.
                      Data handled under PDPL and DHA standards.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="p-[38px] px-6 text-center">
                  <div className="w-12 h-12 rounded-full border-[1.5px] border-[var(--wt-gold)] flex items-center justify-center mx-auto mb-4 text-[18px] text-[var(--wt-gold)]">
                    &#10003;
                  </div>
                  <h4 className="font-heading text-[24px] font-light text-white mb-[7px]">
                    Interest Received
                  </h4>
                  <p className="text-[13px] text-[var(--wt-slate)] leading-[1.6] mb-4">
                    Your details have been received. The RMF board will review
                    your profile within 7 working days. If there is alignment, a
                    board member will be in touch directly to begin a
                    conversation.
                  </p>
                  <div className="bg-[rgba(184,137,42,0.07)] border border-[rgba(184,137,42,0.16)] rounded-[2px] py-[9px] px-4 inline-block text-[11px] text-[rgba(255,255,255,0.35)]">
                    Reference:{" "}
                    <strong className="text-[var(--wt-gold)] tracking-[1px]">
                      {refNumber}
                    </strong>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
