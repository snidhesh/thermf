import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ref: string }> }
) {
  const { ref } = await params;

  // Rate limiting
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const { success } = checkRateLimit(`app-status:${ip}`);
  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // TODO: Look up application by referenceNumber from DB
  // const application = await db.query.applications.findFirst({
  //   where: eq(applications.referenceNumber, ref),
  //   columns: { status: true, submittedAt: true },
  // });

  // Placeholder response - minimal data only
  // In production, only return status and submittedAt - NEVER PII or review notes
  return NextResponse.json({
    status: "reviewing",
    submittedAt: new Date().toISOString().split("T")[0],
  });
}
