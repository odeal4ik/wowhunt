import { serialize } from 'cookie';
import { NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
    const body = await request.json();

    const response = await fetch(`${process.env.APP_URL}/api/register`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();

    if (response.ok && data.token) {
        const serializedToken = serialize('token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        });

        return new Response(
            JSON.stringify({
                message: 'User registered successfully',
            }),
            {
                status: 200,
                headers: { 'Set-Cookie': serializedToken },
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
