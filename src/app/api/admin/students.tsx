import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const students = await prisma.student.findMany({
    include: { teachers: true, subjects: true },
  });
  return NextResponse.json({ students });
}

export async function POST(request: Request) {
  const { name, email, teacherIds, subjectIds } = await request.json();
  const student = await prisma.student.create({
    data: {
      name,
      email,
      teachers: { connect: teacherIds.map(id => ({ id })) },
      subjects: { connect: subjectIds.map(id => ({ id })) },
    },
  });
  return NextResponse.json({ student });
}