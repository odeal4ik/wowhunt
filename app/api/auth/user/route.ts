import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
    console.log(request);
    const response = await fetch(`https://dev.wowhunt.com/api/user`, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            // Authorization: `Bearer ${token}`,
            Authorization: `Bearer 1|H2nydiqMc6wFtD7ymhstMcSy1X9nh2pMDkcv9vq0253e0fd5`,
        },
    });
    const parsedResponse = await response.json();
    return Response.json(parsedResponse);
};
