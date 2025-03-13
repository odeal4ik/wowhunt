import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const POST = async () => {
    const cookieStore = cookies();

    const token = (await cookieStore).get('token');

    const response = await fetch(`${process.env.APP_URL}/api/logout`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token?.value}`,
        },
    });

    (await cookieStore).delete('token');

    if (response.ok) {
        return NextResponse.json({}, { status: 200 });
    } else if (!response.ok) {
        return new Response('Unauthorized', {
            status: 401,
        });
    } else {
        return new Response(
            JSON.stringify({ message: 'Oops, something went wrong...' }),
            {
                status: 400,
            },
        );
    }
};
