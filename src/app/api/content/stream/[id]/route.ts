import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../../auth";
import { canAccessContent } from "@/lib/permissions";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // TODO: Load content asset with content_item from DB
  // TODO: Check tier access with canAccessContent()
  // TODO: Stream video from private Vercel Blob
  // IMPORTANT: Handle Range headers for video seeking (206 Partial Content)

  return NextResponse.json(
    { error: "Not implemented - connect database and Vercel Blob" },
    { status: 501 }
  );
}
