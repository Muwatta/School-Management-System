import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const students = await prisma.student.count();
  const teachers = await prisma.teacher.count();
  const subjects = await prisma.subject.count();
  const results = await prisma.result.count();
  return NextResponse.json({ students, teachers, subjects, results });
}