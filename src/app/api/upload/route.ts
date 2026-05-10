import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { put } from "@vercel/blob";
import { hasPermission } from "@/lib/permissions";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Check permission - admin can always upload, board can upload for review
  const canUpload = hasPermission(session.user.role, "publish_content") ||
                    hasPermission(session.user.role, "upload_content_for_review");
  if (!canUpload) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const blob = await put(file.name, file, {
      access: "private",
      addRandomSuffix: true,
    });

    return NextResponse.json({ url: blob.url, pathname: blob.pathname });
  } catch (error) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
