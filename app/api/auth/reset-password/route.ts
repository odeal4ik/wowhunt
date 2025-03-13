import { NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
    const body = await request.json();

    const response = await fetch(`${process.env.APP_URL}/api/reset-password`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();

    if (response.ok) {
        return new Response(
            JSON.stringify({
                message: 'Link sent successfully',
            }),
            {
                status: 200,
            },
        );
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
};
