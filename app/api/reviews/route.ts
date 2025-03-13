import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://dev.wowhunt.com/api/reviews', {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        });

        if (!response.ok) {
            return NextResponse.json(
                { message: 'Failed to fetch reviews' },
                { status: response.status },
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
