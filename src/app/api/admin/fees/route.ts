import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request, { params }) {
  const student = await prisma.student.findUnique({
    where: { id: Number(params.id) },
    include: { fees: true },
  });
  if (!student) {
    return NextResponse.json({ success: false, message: "Student not found" }, { status: 404 });
  }
  return NextResponse.json({ fees: student.fees });
}