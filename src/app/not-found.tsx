import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading text-6xl font-bold text-rmf-navy mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Page not found</p>
        <Button render={<Link href="/" />} className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy">
          Go Home
        </Button>
      </div>
    </div>
  );
}
