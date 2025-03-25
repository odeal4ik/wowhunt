import { useQuery } from '@tanstack/react-query';

export interface hotGamesAndBoosts {
    name: string;
    sort: number;
    boosts: Boost[];
}

export interface Boost {
    id: number;
    avatar: string;
    name: string;
    slug: string;
    price_eu: string;
    price_us: string;
    sale_eu: string;
    sale_us: string;
    displayed_price_us: string;
    displayed_price_eu: string;
    sort_hots: number;
    game_name: string;
    game_sort: number;
    tags: Tag[];
}

export interface Tag {
    id: number;
    name: string;
    color: string;
    icon_id: number;
    pivot: {
        boost_id: number;
        tag_id: number;
    };
    icon: {
        id: number;
        icon: string;
    };
}

export function useGetHotGamesAndBoosts() {
    return useQuery({
        queryKey: ['hotGamesAndBoosts'],
        queryFn: async () => {
            const response = await fetch('/api/games/hotGamesAndBoosts');
            if (!response.ok) {
                throw new Error('Failed to fetch hot games and boosts');
            }
            return response.json() as Promise<hotGamesAndBoosts[]>;
        },
    });
}
