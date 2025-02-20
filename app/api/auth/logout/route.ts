import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// TODO - implement logout logic
export const POST = async () => {
    const cookieStore = cookies();

    // const token = (await cookieStore).get('token');

    // const response = await fetch(`${process.env.APP_URL}/api/logout`, {
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-type': 'application/json',
    //         Authorization: `Bearer ${token?.value}`,
    //     },
    // });

    // const data = await response.json();

    // console.log('response', response);
    // console.log('status', response.status);

    (await cookieStore).delete('token');

    // if (response.ok) {
    return NextResponse.json({}, { status: 200 });
    // } else if (!response.ok && data.errors) {
    //     return new Response(JSON.stringify(data), {
    //         status: 401,
    //     });
    // } else {
    //     return new Response(
    //         JSON.stringify({ message: 'Oops, something went wrong...' }),
    //         {
    //             status: 400,
    //         },
    //     );
    // }
};
