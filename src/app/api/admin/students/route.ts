import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const students = await prisma.student.findMany({
    include: { teachers: true, subjects: true },
  });
  return NextResponse.json({ students });
}

type StudentBody = {
  name: string;
  email: string;
  teacherIds?: number[];
  subjectIds?: number[];
};

export async function POST(request: Request) {
  const { name, email, teacherIds = [], subjectIds = [] }: StudentBody = await request.json();
  const student = await prisma.student.create({
    data: {
      name,
      email,
      teachers: { connect: teacherIds.map((id: number) => ({ id })) },
      subjects: { connect: subjectIds.map((id: number) => ({ id })) },
    },
  });
  return NextResponse.json({ student });
}