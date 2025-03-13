export type Review = {
    rating: number;
    title: string;
    name: string;
    text: string;
    link: string;
};

export async function getReviews(): Promise<Review[] | null> {
    try {
        const response = await fetch('/api/reviews');

        if (!response.ok) {
            console.error('API request failed:', response.status);
            return null;
        }

        return response.json();
    } catch (error) {
        console.error('Failed to fetch reviews:', error);
        return null;
    }
}
