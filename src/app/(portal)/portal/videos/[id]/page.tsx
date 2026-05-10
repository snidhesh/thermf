import { requireAuth } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await requireAuth();

  return (
    <div>
      <div className="mb-6">
        <Button variant="ghost" render={<Link href="/portal/videos" />}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Videos
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="aspect-video bg-rmf-navy rounded-lg flex items-center justify-center mb-4">
            <p className="text-white text-sm">Video Player - ID: {id}</p>
          </div>
          <h1 className="text-2xl font-bold mb-2">Video Title</h1>
          <p className="text-muted-foreground mb-4">
            Video description will be loaded from the database.
          </p>
        </div>

        <div>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Video Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" /> Duration: 45 minutes
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" /> Published: May 2026
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4" /> By: Dr. Sarah Al-Rashid
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
