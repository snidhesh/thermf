"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { SPECIALTIES, COUNTRIES } from "@/lib/constants";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      specialty: formData.get("specialty") as string,
      country: formData.get("country") as string,
      city: formData.get("city") as string,
      yearsExperience: Number(formData.get("yearsExperience")),
      qualifications: formData.get("qualifications") as string,
      motivation: formData.get("motivation") as string,
    };

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to submit application");
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

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-[72px]">
        <div className="bg-[var(--wt-bg3)] border border-[var(--wt-border)] rounded max-w-lg w-full p-8 text-center">
          <CheckCircle className="h-16 w-16 text-[var(--wt-gold)] mx-auto mb-4" />
          <h2 className="font-heading text-2xl font-light text-white mb-2">
            Application Submitted
          </h2>
          <p className="text-[var(--wt-slate)] mb-4">
            Thank you for applying to the Regenerative Medicine Federation.
          </p>
          <p className="text-sm text-[rgba(255,255,255,0.4)] mb-2">
            Your reference number:
          </p>
          <p className="font-mono text-lg text-[var(--wt-gold)] mb-4">
            {refNumber}
          </p>
          <p className="text-xs text-[var(--wt-slate)]">
            Save this reference number to track your application status.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12 pt-[100px]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-light text-white mb-2">
            Apply for Membership
          </h1>
          <p className="text-[var(--wt-slate)]">
            Complete the form below to apply for RMF membership. Our team will
            review your application.
          </p>
        </div>

        <div className="bg-[var(--wt-bg3)] border border-[var(--wt-border)] rounded overflow-hidden">
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="wt-field">
                  <label htmlFor="firstName">First Name *</label>
                  <input id="firstName" name="firstName" required />
                </div>
                <div className="wt-field">
                  <label htmlFor="lastName">Last Name *</label>
                  <input id="lastName" name="lastName" required />
                </div>
              </div>

              <div className="wt-field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="wt-field">
                <label htmlFor="phone">Phone *</label>
                <input id="phone" name="phone" type="tel" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="wt-field">
                  <label htmlFor="specialty">Specialty *</label>
                  <select id="specialty" name="specialty" required defaultValue="">
                    <option value="" disabled>
                      Select specialty
                    </option>
                    {SPECIALTIES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="wt-field">
                  <label htmlFor="country">Country *</label>
                  <select id="country" name="country" required defaultValue="">
                    <option value="" disabled>
                      Select country
                    </option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="wt-field">
                  <label htmlFor="city">City *</label>
                  <input id="city" name="city" required />
                </div>
                <div className="wt-field">
                  <label htmlFor="yearsExperience">
                    Years of Experience *
                  </label>
                  <input
                    id="yearsExperience"
                    name="yearsExperience"
                    type="number"
                    min={0}
                    max={60}
                    required
                  />
                </div>
              </div>

              <div className="wt-field">
                <label htmlFor="qualifications">Qualifications *</label>
                <textarea
                  id="qualifications"
                  name="qualifications"
                  placeholder="List your medical qualifications, certifications, and training..."
                  rows={3}
                  required
                  className="w-full p-[10px] px-3 bg-[rgba(255,255,255,0.04)] border border-[var(--wt-border)] rounded-[2px] text-[13px] text-white font-[var(--font-sans)] transition-colors focus:outline-none focus:border-[var(--wt-gold)] placeholder:text-[rgba(255,255,255,0.16)] resize-vertical"
                />
              </div>

              <div className="wt-field">
                <label htmlFor="motivation">
                  Why do you want to join RMF? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  placeholder="Explain your interest in regenerative medicine and what you hope to gain from membership..."
                  rows={4}
                  required
                  className="w-full p-[10px] px-3 bg-[rgba(255,255,255,0.04)] border border-[var(--wt-border)] rounded-[2px] text-[13px] text-white font-[var(--font-sans)] transition-colors focus:outline-none focus:border-[var(--wt-gold)] placeholder:text-[rgba(255,255,255,0.16)] resize-vertical"
                />
              </div>

              {error && (
                <p className="text-[12px] text-red-400 bg-[rgba(239,68,68,0.1)] p-3 rounded">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--wt-gold)] text-[var(--wt-bg)] py-3 rounded-[2px] text-[10px] tracking-[2.5px] uppercase font-medium hover:bg-[var(--wt-gold-light)] transition-colors disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
