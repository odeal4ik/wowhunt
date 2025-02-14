import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies();

    const token = (await cookieStore).get('token');

    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // TODO think about FE token validation

    const response = await fetch(`${process.env.APP_URL}/api/user`, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Bearer ${token?.value}`,
        },
    });

    const data = await response.json();

    if (response.ok && data.id) {
        return NextResponse.json(data);
    } else if (!response.ok && data.errors) {
        return new Response(JSON.stringify(data), {
            status: 422,
        });
    } else {
        return new Response(
            JSON.stringify({ message: 'Oops, something went wrong...' }),
            {
                status: 400,
            },
        );
    }
}
