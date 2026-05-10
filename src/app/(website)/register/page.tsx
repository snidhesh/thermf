"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SPECIALTIES, COUNTRIES } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

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
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-lg mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="font-heading text-2xl font-bold text-rmf-navy mb-2">
              Application Submitted
            </h2>
            <p className="text-muted-foreground mb-4">
              Thank you for applying to the Regenerative Medicine Federation.
            </p>
            <p className="text-sm mb-2">Your reference number:</p>
            <p className="font-mono text-lg font-bold text-rmf-gold mb-4">{refNumber}</p>
            <p className="text-xs text-muted-foreground">
              Save this reference number to track your application status.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold text-rmf-navy mb-2">
            Apply for Membership
          </h1>
          <p className="text-muted-foreground">
            Complete the form below to apply for RMF membership. Our team will
            review your application.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" name="phone" type="tel" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="specialty">Specialty *</Label>
                  <select
                    id="specialty"
                    name="specialty"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Select specialty</option>
                    {SPECIALTIES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <select
                    id="country"
                    name="country"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" name="city" required />
                </div>
                <div>
                  <Label htmlFor="yearsExperience">Years of Experience *</Label>
                  <Input id="yearsExperience" name="yearsExperience" type="number" min={0} max={60} required />
                </div>
              </div>

              <div>
                <Label htmlFor="qualifications">Qualifications *</Label>
                <Textarea
                  id="qualifications"
                  name="qualifications"
                  placeholder="List your medical qualifications, certifications, and training..."
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="motivation">Why do you want to join RMF? *</Label>
                <Textarea
                  id="motivation"
                  name="motivation"
                  placeholder="Explain your interest in regenerative medicine and what you hope to gain from membership..."
                  rows={4}
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 p-3 rounded">{error}</p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy font-semibold"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
