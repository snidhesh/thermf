import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // TODO: Load available session slots from DB
  return NextResponse.json({ slots: [] });
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { slotId, topic } = body;

  if (!slotId) {
    return NextResponse.json({ error: "slotId is required" }, { status: 400 });
  }

  // TODO: Use transactional booking with SELECT FOR UPDATE via dbPool
  // await dbPool.transaction(async (tx) => {
  //   const slot = await tx.select().from(sessionSlots)
  //     .where(eq(sessionSlots.id, slotId))
  //     .for('update');
  //
  //   if (slot.bookedSpots >= slot.totalSpots) {
  //     throw new Error('Slot is full');
  //   }
  //
  //   await tx.insert(bookings).values({
  //     slotId, memberId: session.user.id, status: 'confirmed', topic
  //   });
  //
  //   await tx.update(sessionSlots)
  //     .set({ bookedSpots: slot.bookedSpots + 1 })
  //     .where(eq(sessionSlots.id, slotId));
  // });

  return NextResponse.json(
    { error: "Not implemented - connect database" },
    { status: 501 }
  );
}
