"use client";

import { useState } from "react";
import { Clock, MessageSquare, ShieldCheck, Mail, Phone } from "lucide-react";

export function ContactSectionV2() {
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const specialties = [
    "Functional Medicine",
    "Regenerative Medicine",
    "Endocrinology",
    "Internal Medicine / General Practice",
    "Dermatology / Aesthetic Medicine",
    "Neurology",
    "Orthopedics / Sports Medicine",
    "Gynaecology / Women\u2019s Health",
    "Urology / Men\u2019s Health",
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

  const experienceOptions = [
    { label: "Less than 1 year", value: 0 },
    { label: "1\u20132 years", value: 1 },
    { label: "3\u20135 years", value: 3 },
    { label: "6\u201310 years", value: 6 },
    { label: "11\u201315 years", value: 11 },
    { label: "16\u201320 years", value: 16 },
    { label: "21+ years", value: 21 },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        specialty: formData.get("specialty"),
        country: formData.get("country"),
        city: formData.get("city"),
        yearsExperience: Number(formData.get("yearsExperience")),
      };

      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Something went wrong");
      }

      const result = await res.json();
      setRefNumber(result.referenceNumber);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-[var(--wt2-bg-alt)] py-14 md:py-20 px-5 md:px-12 border-t border-[var(--wt2-border)]"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* LEFT COLUMN */}
          <div>
            <p className="text-[11px] tracking-[3px] uppercase text-[var(--wt2-primary)] font-semibold mb-3">
              Join the Federation
            </p>
            <h2 className="font-heading text-[30px] md:text-[36px] font-light text-[var(--wt2-text)] leading-[1.2] mb-5">
              The network begins here.
            </h2>
            <div className="w-[40px] h-[2px] bg-[var(--wt2-gold)] mb-5" />
            <p className="text-[15px] text-[var(--wt2-text-body)] leading-[1.8] mb-6">
              The RMF does not have open applications. This form places you on the official interest list. Your profile will be reviewed by the board within 7 working days, and you will be contacted directly if there is alignment.
            </p>

            {/* Quote */}
            <div className="border-l-[3px] border-[var(--wt2-gold)] pl-5 my-6">
              <p className="font-heading text-[16px] italic text-[var(--wt2-text-body)] leading-[1.6]">
                &ldquo;Not only a course, a biological, clinical, and professional transformation that redefines your practice and your life.&rdquo;
              </p>
            </div>

            {/* Info box with icons */}
            <div className="bg-white border border-[var(--wt2-border)] rounded p-5 mt-6">
              <p className="text-[14px] font-semibold text-[var(--wt2-text)] mb-4">
                What happens next
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-[rgba(27,58,92,0.06)] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[var(--wt2-primary)]" />
                  </div>
                  <span className="text-[13px] text-[var(--wt2-text-body)] pt-1">
                    Your details are reviewed within 7 working days
                  </span>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-[rgba(27,58,92,0.06)] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-[var(--wt2-primary)]" />
                  </div>
                  <span className="text-[13px] text-[var(--wt2-text-body)] pt-1">
                    A board member will reach out if there is alignment
                  </span>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-[rgba(27,58,92,0.06)] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[var(--wt2-primary)]" />
                  </div>
                  <span className="text-[13px] text-[var(--wt2-text-body)] pt-1">
                    Membership and immersion details shared at that stage
                  </span>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--wt2-primary)]" />
                <p className="text-[14px] text-[var(--wt2-primary)] font-medium">
                  info@thermf.org
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--wt2-text-muted)]" />
                <p className="text-[12px] text-[var(--wt2-text-muted)]">
                  Monday – Friday, 9:00 – 17:00 GST
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Form */}
          <div className="bg-white border border-[var(--wt2-border)] rounded shadow-sm p-6 md:p-8">
            <h3 className="text-[16px] font-semibold text-[var(--wt2-text)] mb-1">
              Register Your Interest
            </h3>
            <p className="text-[13px] text-[var(--wt2-text-muted)] mb-5">
              For established physicians seeking RMF membership or immersion selection
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="wt2-field">
                    <label>First Name</label>
                    <input
                      name="firstName"
                      placeholder="Dr. Marina"
                      required
                    />
                  </div>
                  <div className="wt2-field">
                    <label>Last Name</label>
                    <input
                      name="lastName"
                      placeholder="Cordeiro"
                      required
                    />
                  </div>
                </div>

                <div className="wt2-field mb-3">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@clinic.com"
                    required
                  />
                </div>

                <div className="wt2-field mb-3">
                  <label>Mobile / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+971 50 000 0000"
                    required
                  />
                </div>

                <div className="wt2-field mb-3">
                  <label>Medical Specialty</label>
                  <select name="specialty" required defaultValue="">
                    <option value="" disabled></option>
                    {specialties.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="wt2-field">
                    <label>Country of Practice</label>
                    <select name="country" required defaultValue="">
                      <option value="" disabled></option>
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="wt2-field">
                    <label>City of Practice</label>
                    <input name="city" placeholder="Dubai" required />
                  </div>
                </div>

                <div className="wt2-field mb-4">
                  <label>Years in Clinical Practice</label>
                  <select name="yearsExperience" required defaultValue="">
                    <option value="" disabled></option>
                    {experienceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <div className="text-[13px] text-red-600 bg-red-50 border border-red-200 p-3 rounded mb-3">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[var(--wt2-primary)] text-white py-3 rounded text-[13px] tracking-[1px] uppercase font-semibold hover:bg-[var(--wt2-primary-light)] transition-colors disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Your Interest"}
                </button>

                <p className="text-[11px] text-[var(--wt2-text-muted)] text-center mt-3">
                  By submitting you confirm you hold a valid medical licence. Data handled under PDPL and DHA standards.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-[24px] font-light text-[var(--wt2-text)] mb-2">
                  Interest Received
                </h3>
                <p className="text-[14px] text-[var(--wt2-text-body)] mb-4">
                  Your details have been received. The RMF board will review your profile within 7 working days. If there is alignment, a board member will be in touch directly to begin a conversation.
                </p>
                <span className="bg-[var(--wt2-bg-alt)] border border-[var(--wt2-border)] rounded py-2 px-4 inline-block text-[13px] text-[var(--wt2-text-body)]">
                  Reference:{" "}
                  <strong className="text-[var(--wt2-primary)]">
                    {refNumber}
                  </strong>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
