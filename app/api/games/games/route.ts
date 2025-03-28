import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch(`${process.env.APP_URL}/api/games`, {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        });

        if (!response.ok) {
            return NextResponse.json(
                { message: 'Failed to fetch games' },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { message: 'Server error' },
            { status: 500 }
        );
    }
}