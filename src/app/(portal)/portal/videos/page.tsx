import { requireAuth } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { TierBadge } from "@/components/shared/tier-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Video, Clock, Lock, Search } from "lucide-react";

export const dynamic = "force-dynamic";

const sampleVideos = [
  { id: "1", title: "Introduction to Stem Cell Therapy", category: "Stem Cell Therapy", duration: "45 min", minTier: "associate", thumbnail: null },
  { id: "2", title: "Advanced PRP Techniques", category: "PRP Treatment", duration: "60 min", minTier: "member", thumbnail: null },
  { id: "3", title: "Exosome Therapy: Latest Research", category: "Exosome Therapy", duration: "55 min", minTier: "member", thumbnail: null },
  { id: "4", title: "Gene Therapy Protocols", category: "Gene Therapy", duration: "90 min", minTier: "fellow", thumbnail: null },
  { id: "5", title: "Clinical Case Studies: Regenerative Orthopedics", category: "Case Studies", duration: "40 min", minTier: "associate", thumbnail: null },
  { id: "6", title: "Anti-Aging Medicine Masterclass", category: "Anti-Aging Medicine", duration: "120 min", minTier: "fellow", thumbnail: null },
];

export default async function VideosPage() {
  const user = await requireAuth();

  return (
    <div>
      <PageHeader
        title="Video Library"
        description="Access educational videos and recorded sessions."
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search videos..." className="pl-9 w-64" />
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleVideos.map((video) => {
          const tierLevel: Record<string, number> = { associate: 1, member: 2, fellow: 3 };
          const hasAccess = (tierLevel[user.membershipTier] ?? 0) >= (tierLevel[video.minTier] ?? 0);

          return (
            <Card key={video.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${!hasAccess ? "opacity-75" : ""}`}>
              <div className="aspect-video bg-rmf-navy/5 flex items-center justify-center relative">
                {hasAccess ? (
                  <Video className="h-12 w-12 text-rmf-navy/20" />
                ) : (
                  <div className="text-center">
                    <Lock className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Requires {video.minTier} tier</p>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-rmf-gold">{video.category}</span>
                  <TierBadge tier={video.minTier} size="sm" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{video.title}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {video.duration}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
