import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // TODO: Load members from DB - filter based on role
  // Admin: full member list with all fields
  // Member: directory view (name, specialty, country, tier)
  return NextResponse.json({ members: [] });
}
