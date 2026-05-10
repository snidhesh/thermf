import { requireAuth } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { TierBadge } from "@/components/shared/tier-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileText, Download, Lock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

const sampleContent = [
  { id: "1", title: "PRP Therapy Clinical Protocol v3", type: "protocol", category: "PRP Treatment", pages: 24, minTier: "associate" },
  { id: "2", title: "Stem Cell Harvesting Guide", type: "pdf", category: "Stem Cell Therapy", pages: 18, minTier: "member" },
  { id: "3", title: "Exosome Therapy Research Summary", type: "pdf", category: "Exosome Therapy", pages: 32, minTier: "member" },
  { id: "4", title: "Patient Consent Template - Regenerative Procedures", type: "template", category: "Clinical Protocols", pages: 4, minTier: "associate" },
  { id: "5", title: "Gene Therapy Safety Protocols", type: "protocol", category: "Gene Therapy", pages: 45, minTier: "fellow" },
  { id: "6", title: "Anti-Aging Treatment Algorithms", type: "pdf", category: "Anti-Aging Medicine", pages: 28, minTier: "fellow" },
];

export default async function ContentPage() {
  const user = await requireAuth();

  return (
    <div>
      <PageHeader
        title="Content & Documents"
        description="Access clinical protocols, research papers, and templates."
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search content..." className="pl-9 w-64" />
        </div>
      </PageHeader>

      <div className="space-y-3">
        {sampleContent.map((item) => {
          const tierLevel: Record<string, number> = { associate: 1, member: 2, fellow: 3 };
          const hasAccess = (tierLevel[user.membershipTier] ?? 0) >= (tierLevel[item.minTier] ?? 0);

          return (
            <Card key={item.id} className={!hasAccess ? "opacity-75" : ""}>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-rmf-gold/10 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-rmf-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm truncate">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {item.category} &middot; {item.type.toUpperCase()} &middot; {item.pages} pages
                  </p>
                </div>
                <TierBadge tier={item.minTier} />
                {hasAccess ? (
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" /> Download
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" disabled>
                    <Lock className="h-4 w-4 mr-1" /> Locked
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
