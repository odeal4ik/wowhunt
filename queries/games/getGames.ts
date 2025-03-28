import { useQuery } from '@tanstack/react-query';

export type Game = {
    id: number;
    icon: string;
    icon_alternative: string;
    name: string;
    slug: string;
};

export function useGetGames() {
    return useQuery<Game[]>({
        queryKey: ['games'],
        queryFn: async () => {
            const response = await fetch('/api/games/games');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        },
    });
}
