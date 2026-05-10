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

  // TODO: Load content asset with its content_item from DB
  // const asset = await loadAssetWithContent(id);
  // if (!asset) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // TODO: Check tier access
  // if (!canAccessContent(session.user.membershipTier, asset.content.minTier)) {
  //   return NextResponse.json({ error: "Insufficient tier" }, { status: 403 });
  // }

  // TODO: Fetch from Vercel Blob private storage and stream
  // const result = await get(asset.blobUrl, { access: 'private' });
  // return new NextResponse(result.stream, {
  //   headers: {
  //     'Content-Type': result.blob.contentType,
  //     'Cache-Control': 'private, no-cache',
  //   },
  // });

  return NextResponse.json(
    { error: "Not implemented - connect database and Vercel Blob" },
    { status: 501 }
  );
}
