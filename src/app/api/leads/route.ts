import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { hasPermission } from "@/lib/permissions";

export async function GET() {
  const session = await auth();
  if (!session?.user || !hasPermission(session.user.role, "manage_leads")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  // TODO: Load applications from DB
  return NextResponse.json({ leads: [] });
}

export async function PATCH(request: NextRequest) {
  const session = await auth();
  if (!session?.user || !hasPermission(session.user.role, "manage_leads")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  // TODO: Approve/decline application
  // On approve: create user record, send magic link invitation
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
