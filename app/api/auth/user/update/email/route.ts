import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const cookieStore = cookies();

    const token = (await cookieStore).get('token');

    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const response = await fetch(
        `${process.env.APP_URL}/api/user/update/email`,
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                Authorization: `Bearer ${token?.value}`,
            },
        },
    );

    const data = await response.json();
    console.log('response', response);
    console.log('data', data);
    if (response.ok) {
        return NextResponse.json(data);
    } else if (!response.ok && response.status === 422 && data.errors) {
        return new Response(JSON.stringify(data), {
            status: 422,
        });
    } else if (!response.ok && response.status === 403) {
        return new Response(
            JSON.stringify({
                errors: {
                    email: [data.message],
                },
            }),
            {
                status: 403,
            },
        );
    } else {
        return new Response(
            JSON.stringify({ message: 'Oops, something went wrong...' }),
            {
                status: 400,
            },
        );
    }
}
