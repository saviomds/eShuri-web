import { NextResponse, NextRequest } from 'next/server';
import { compareSync } from 'bcrypt-ts';
import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';

import loginSchema from '@/helpers/api-validations/auth/login';

export async function POST(request: NextRequest) {
  const userData = await request.json();
  // validate input
  const { error } = loginSchema.validate(userData);
  if (error) {
    return NextResponse.json(
      { status: 'failed', error: error.details },
      { status: 400 }
    );
  }
  // find user and compare password
  const { email, password } = userData;

  const user = await prisma.user.findUnique({ where: { email: email } });
  const validPassword = compareSync(password, `${user!.password}`);

  if (!user || !validPassword) {
    return NextResponse.json(
      { status: 'failed', error: 'Invalid credentials' },
      { status: 400 }
    );
  }

  const token = jwt.sign({ user }, process.env.JWT_SECRET as string, {
    expiresIn: '7d',
  });

  try {
    return NextResponse.json({
      status: 'ok',
      message: 'User logged in successfully',
      data: token,
    });
  } catch (error) {
    return NextResponse.json({ status: 'failed', error }, { status: 400 });
  }
}
