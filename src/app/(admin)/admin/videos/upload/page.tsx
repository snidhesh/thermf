import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminVideoUploadPage() {
  await requireRole("admin");

  return (
    <div>
      <div className="mb-6">
        <Button variant="ghost" render={<Link href="/admin/videos" />}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Videos
        </Button>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Upload Video</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input placeholder="Video title" />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea placeholder="Video description" rows={3} />
            </div>
            <div>
              <Label>Category</Label>
              <Input placeholder="e.g., Stem Cell Therapy" />
            </div>
            <div>
              <Label>Minimum Tier</Label>
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="associate">Associate</option>
                <option value="member">Member</option>
                <option value="fellow">Fellow</option>
              </select>
            </div>
            <div>
              <Label>Video File</Label>
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm font-medium">Drag and drop or click to upload</p>
                <p className="text-xs text-muted-foreground mt-1">MP4, MOV, WebM up to 500MB</p>
              </div>
            </div>
            <div>
              <Label>Thumbnail (optional)</Label>
              <Input type="file" accept="image/*" />
            </div>
            <div className="flex gap-3 pt-4">
              <Button className="bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy">
                Upload & Publish
              </Button>
              <Button variant="outline">Save as Draft</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
