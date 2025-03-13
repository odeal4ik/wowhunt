import { useQuery } from '@tanstack/react-query';

export type Review = {
    rating: number;
    title: string;
    name: string;
    text: string;
    link: string;
};

export function useGetReviews() {
    return useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const response = await fetch('/api/reviews');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        },
    });
}
