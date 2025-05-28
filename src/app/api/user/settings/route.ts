import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  // In real life, get user ID from session/JWT
  const email = "admin@example.com"; // Replace with real user identification
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ email: user.email, name: user.name });
}

export async function POST(request: Request) {
  const { email, name } = await request.json();
  // In real life, get user ID from session/JWT
  const user = await prisma.user.update({
    where: { email },
    data: { name }
  });
  return NextResponse.json({ success: true, user: { email: user.email, name: user.name } });
}