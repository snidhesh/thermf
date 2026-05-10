import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const articles = [
  {
    title: "RMF Annual Conference 2026 Announced",
    excerpt: "Join us in Dubai for the premier regenerative medicine conference featuring world-class speakers.",
    date: "May 5, 2026",
    category: "Events",
  },
  {
    title: "New Stem Cell Research Collaboration",
    excerpt: "RMF partners with leading research institutions to advance stem cell therapy protocols.",
    date: "Apr 28, 2026",
    category: "Research",
  },
  {
    title: "Clinical Protocol Update: PRP Therapy",
    excerpt: "Updated guidelines for PRP therapy based on latest clinical evidence and member feedback.",
    date: "Apr 15, 2026",
    category: "Clinical",
  },
];

export function NewsSection() {
  return (
    <section id="news" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-rmf-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Latest Updates
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-rmf-navy mb-4">
            News & Announcements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article) => (
            <Card key={article.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-rmf-gold/10 text-rmf-gold mb-3">
                  {article.category}
                </span>
                <h3 className="font-semibold text-rmf-navy mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <CalendarDays className="h-3 w-3" />
                  {article.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
