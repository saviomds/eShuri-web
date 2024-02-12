import { NextResponse, NextRequest } from 'next/server';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import registerSchema from '@/helpers/api-validations/auth/register';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const userData = await request.json();
  // validate input
  const { error } = registerSchema.validate(userData);
  if (error) {
    return NextResponse.json(
      { status: 'failed', error: error.details },
      { status: 400 }
    );
  }
  // hash password
  const { password } = userData;
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);
  userData.password = hash;

  try {
    // save in the database and return back response
    const newUser = await prisma.user.create({ data: userData });
    return NextResponse.json({
      status: 'ok',
      message: 'User created successfully',
      data: newUser,
    });
  } catch (error) {
    return NextResponse.json({ status: 'failed', error }, { status: 400 });
  }
}
