import { requireRole } from "@/lib/auth";
import { PageHeader } from "@/components/shared/page-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileUp, FileText } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function BoardContentPage() {
  await requireRole(["board", "admin"]);

  return (
    <div>
      <PageHeader title="Submit Content" description="Upload content for admin review and publication." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Upload New Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input placeholder="Content title" />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea placeholder="Brief description of the content" rows={3} />
            </div>
            <div>
              <Label>Category</Label>
              <Input placeholder="e.g., Stem Cell Therapy" />
            </div>
            <div>
              <Label>File</Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <FileUp className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Drag and drop or click to upload
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF, MP4, MOV up to 500MB
                </p>
              </div>
            </div>
            <Button className="w-full bg-rmf-gold hover:bg-rmf-gold-light text-rmf-navy">
              Submit for Review
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">My Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: "Advanced PRP Techniques Video", status: "published" },
                { title: "Exosome Research Summary", status: "review" },
                { title: "Clinical Protocol Draft", status: "draft" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3 p-3 border rounded-lg">
                  <FileText className="h-5 w-5 text-rmf-gold" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                  <StatusBadge status={item.status} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
