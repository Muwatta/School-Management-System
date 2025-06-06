import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { name } = await request.json();
  if (!name) {
    return NextResponse.json({ success: false, message: "Name required" }, { status: 400 });
  }
  const subject = await prisma.subject.create({ data: { name } });
  return NextResponse.json({ success: true, subject });
}

export async function GET() {
  const subjects = await prisma.subject.findMany();
  return NextResponse.json({ subjects });
}