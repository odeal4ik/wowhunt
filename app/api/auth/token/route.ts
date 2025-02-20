import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies();

    const token = (await cookieStore).get('token');

    return NextResponse.json({ token: Boolean(token) }, { status: 200 });
}
