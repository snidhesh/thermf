import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { applicationSchema } from "@/lib/validations/applications";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = applicationSchema.parse(body);

    const referenceNumber = nanoid(12);

    // TODO: Insert into applications table when DB is connected
    // const [application] = await db.insert(applications).values({
    //   ...validatedData,
    //   referenceNumber,
    // }).returning();

    // TODO: Send confirmation email
    // await sendApplicationConfirmation(validatedData.email, validatedData.firstName, referenceNumber);

    return NextResponse.json(
      { referenceNumber, message: "Application submitted successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    if (error?.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
