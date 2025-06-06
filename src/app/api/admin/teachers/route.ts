import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { studentId, subjectId, teacherId, firstCA, secondCA, assignment, exam } = await request.json();
  if (!studentId || !subjectId || !teacherId) {
    return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
  }
  const result = await prisma.result.upsert({
    where: {
      studentId_subjectId: {
        studentId: Number(studentId),
        subjectId: Number(subjectId),
      },
    },
    update: {
      firstCA: Number(firstCA),
      secondCA: Number(secondCA),
      assignment: Number(assignment),
      exam: Number(exam),
      teacherId: Number(teacherId),
    },
    create: {
      studentId: Number(studentId),
      subjectId: Number(subjectId),
      teacherId: Number(teacherId),
      firstCA: Number(firstCA),
      secondCA: Number(secondCA),
      assignment: Number(assignment),
      exam: Number(exam),
    },
  });
  return NextResponse.json({ success: true, result });
}