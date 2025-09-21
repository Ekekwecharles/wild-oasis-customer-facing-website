import { NextResponse } from "next/server";

export async function GET() {
  // Just a dummy call to keep Supabase awake
  try {
    // Example: Fetch data from a table in Supabase
    const res = await fetch(
      process.env.NEXT_PUBLIC_SUPABASE_URL + "/rest/v1/bookings",
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
        },
      }
    );

    if (!res.ok) throw new Error("Ping failed");
    return NextResponse.json({ message: "Supabase pinged successfully!" });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
