import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { email, password, name } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ success: false, message: "Email and password required" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ success: false, message: "User already exists" }, { status: 409 });
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashed, name }
  });

  return NextResponse.json({ success: true, user: { id: user.id, email: user.email, name: user.name, image: user.image } });
}

// model User {
//   id        Int      @id @default(autoincrement())
//   name      String
//   email     String   @unique
//   password  String
//   image     String?  // <-- add this line for profile images
//   createdAt DateTime @default(now())
// }