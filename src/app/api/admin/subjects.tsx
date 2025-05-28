// /api/admin/subjects.tsx
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const subjects = await prisma.subject.findMany({
    include: { teachers: true, students: true },
  });
  return NextResponse.json({ subjects });
}

export async function POST(request: Request) {
  const { name } = await request.json();
  const subject = await prisma.subject.create({ data: { name } });
  return NextResponse.json({ subject });
}