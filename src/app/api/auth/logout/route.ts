import { NextResponse } from "next/server";

export async function POST() {
  // TODO: Destroy session or remove token
  return NextResponse.json({ success: true, message: "Logged out" });
}