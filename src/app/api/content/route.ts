import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { canAccessContent, hasPermission } from "@/lib/permissions";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // TODO: Load content items from DB, filtered by user's tier
  return NextResponse.json({ items: [] });
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const canCreate = hasPermission(session.user.role, "publish_content") ||
                    hasPermission(session.user.role, "upload_content_for_review");
  if (!canCreate) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  // TODO: Create content item in DB
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
