import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { TierBadge } from "@/components/shared/tier-badge";
import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Video, Eye, Pencil } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

const sampleVideos = [
  { id: "1", title: "Introduction to Stem Cell Therapy", category: "Stem Cell Therapy", minTier: "associate", status: "published", views: 234 },
  { id: "2", title: "Advanced PRP Techniques", category: "PRP Treatment", minTier: "member", status: "published", views: 156 },
  { id: "3", title: "Exosome Therapy Research", category: "Exosome Therapy", minTier: "member", status: "draft", views: 0 },
  { id: "4", title: "Gene Therapy Protocols", category: "Gene Therapy", minTier: "fellow", status: "review", views: 0 },
];

export default async function AdminVideosPage() {
  await requireRole("admin");

  return (
    <div>
      <PageHeader title="Videos" description="Manage video content library.">
        <Button render={<Link href="/admin/videos/upload" />} className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy">
          <Plus className="h-4 w-4 mr-2" /> Upload Video
        </Button>
      </PageHeader>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium">Video</th>
                  <th className="text-left p-4 font-medium">Category</th>
                  <th className="text-left p-4 font-medium">Min Tier</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Views</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleVideos.map((video) => (
                  <tr key={video.id} className="border-b hover:bg-muted/30">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded bg-rmf-navy/5 flex items-center justify-center">
                          <Video className="h-5 w-5 text-rmf-navy/30" />
                        </div>
                        <span className="font-medium">{video.title}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{video.category}</td>
                    <td className="p-4"><TierBadge tier={video.minTier} /></td>
                    <td className="p-4"><StatusBadge status={video.status} /></td>
                    <td className="p-4 text-muted-foreground">{video.views}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button size="sm" variant="ghost"><Eye className="h-4 w-4" /></Button>
                        <Button size="sm" variant="ghost"><Pencil className="h-4 w-4" /></Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
