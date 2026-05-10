"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <Mail className="h-16 w-16 text-rmf-gold mx-auto mb-4" />
            <h2 className="font-heading text-2xl font-bold text-rmf-navy mb-2">
              Check Your Email
            </h2>
            <p className="text-muted-foreground">
              We sent a sign-in link to <strong>{email}</strong>. Click the link
              in the email to access your account.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="h-16 w-16 rounded-full bg-rmf-navy flex items-center justify-center mx-auto mb-4">
              <span className="text-rmf-gold font-heading font-bold text-2xl">R</span>
            </div>
            <h1 className="font-heading text-2xl font-bold text-rmf-navy mb-2">
              Welcome Back
            </h1>
            <p className="text-muted-foreground text-sm">
              Sign in to access the RMF Members Portal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy font-semibold"
            >
              {loading ? "Sending..." : "Send Sign-In Link"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-rmf-gold hover:underline">
              Apply for membership
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
