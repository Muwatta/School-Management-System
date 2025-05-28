// /api/admin/teachers.tsx
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const teachers = await prisma.teacher.findMany({
    include: { subjects: true, students: true },
  });
  return NextResponse.json({ teachers });
}

export async function POST(request: Request) {
  const { name, email, subjectIds } = await request.json();
  const teacher = await prisma.teacher.create({
    data: {
      name,
      email,
      subjects: { connect: subjectIds.map(id => ({ id })) },
    },
  });
  return NextResponse.json({ teacher });
}