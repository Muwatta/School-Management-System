import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs'; 

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
  }
  const { password: _, ...userWithoutPassword } = user;

  // Set the auth-token cookie
  const response = NextResponse.json({ success: true, user: userWithoutPassword });
  response.cookies.set('auth-token', user.id.toString(), {
    httpOnly: true,
    path: '/',
    // secure: true, // Uncomment if using HTTPS
    // maxAge: 60 * 60 * 24, // 1 day
  });
  return response;
}

async function hashPassword(plainPassword: string) {
  return await bcrypt.hash(plainPassword, 10);
}
