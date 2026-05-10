"use client";

import { useState, useEffect, use } from "react";
import { StatusBadge } from "@/components/shared/status-badge";
import { Clock, CheckCircle, XCircle, Search } from "lucide-react";

const STATUS_INFO = {
  new: { icon: Clock, text: "Your application has been received and is awaiting review." },
  reviewing: { icon: Search, text: "Your application is currently being reviewed by our team." },
  approved: { icon: CheckCircle, text: "Your application has been approved! Check your email for next steps." },
  declined: { icon: XCircle, text: "Unfortunately, your application was not approved at this time." },
};

export default function ApplicationStatusPage({
  params,
}: {
  params: Promise<{ ref: string }>;
}) {
  const { ref } = use(params);
  const [status, setStatus] = useState<string | null>(null);
  const [submittedAt, setSubmittedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch(`/api/applications/${ref}`);
        if (!res.ok) {
          if (res.status === 429) {
            throw new Error("Too many requests. Please try again later.");
          }
          throw new Error("Application not found.");
        }
        const data = await res.json();
        setStatus(data.status);
        setSubmittedAt(data.submittedAt);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchStatus();
  }, [ref]);

  const info = status ? STATUS_INFO[status as keyof typeof STATUS_INFO] : null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-[72px]">
      <div className="bg-[var(--wt-bg3)] border border-[var(--wt-border)] rounded max-w-lg w-full p-8 text-center">
        <h1 className="font-heading text-2xl font-light text-white mb-6">
          Application Status
        </h1>

        {loading && (
          <div className="py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--wt-gold)] border-t-transparent mx-auto" />
            <p className="text-[var(--wt-slate)] mt-4">Loading...</p>
          </div>
        )}

        {error && (
          <div className="py-8">
            <XCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {status && info && (
          <div className="py-4">
            <info.icon
              className={`h-16 w-16 mx-auto mb-4 ${
                status === "approved"
                  ? "text-green-500"
                  : status === "declined"
                  ? "text-red-500"
                  : "text-[var(--wt-gold)]"
              }`}
            />
            <div className="mb-4">
              <StatusBadge status={status} />
            </div>
            <p className="text-[var(--wt-slate)] mb-4">{info.text}</p>
            {submittedAt && (
              <p className="text-xs text-[var(--wt-slate)]">
                Submitted: {submittedAt}
              </p>
            )}
          </div>
        )}

        <p className="text-xs text-[var(--wt-slate)] mt-6">
          Reference: <span className="font-mono">{ref}</span>
        </p>
      </div>
    </div>
  );
}
