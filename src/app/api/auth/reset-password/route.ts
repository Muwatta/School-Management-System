import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  const { email, newPassword } = await request.json();
  if (!email || !newPassword) {
    return NextResponse.json({ message: 'Email and new password required.' }, { status: 400 });
  }
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }
  const hashed = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { email },
    data: { password: hashed },
  });
  return NextResponse.json({ message: 'Password updated successfully.' });
}