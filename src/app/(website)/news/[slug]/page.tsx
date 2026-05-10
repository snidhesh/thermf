import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";

export const revalidate = 3600;

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" render={<Link href="/#news" />} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to News
        </Button>

        <article>
          <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-rmf-gold/10 text-rmf-gold mb-3">
            News
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-rmf-navy mb-4">
            Article: {slug}
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <CalendarDays className="h-4 w-4" />
            May 10, 2026
          </div>
          <div className="prose max-w-none">
            <p>Article content will be loaded from the database.</p>
          </div>
        </article>
      </div>
    </div>
  );
}
