import { useQuery } from '@tanstack/react-query';

interface Trand {
    balance: string;
    date: Date;
}

interface Error {
    message: string;
}

export function useGetUserTrands(type: 'balance' | 'spend') {
    return useQuery({
        queryKey: ['trand', type],
        queryFn: async function getTrand({ queryKey }) {
            const response = await fetch(
                `/api/auth/user/trands/${queryKey[1]}`,
            );

            if (response.status !== 200) {
                throw { message: 'Unauthorized' };
            }

            const data = await response.json();

            if (`message` in data && data.message) {
                throw data.message as Error;
            } else {
                return data as Trand[];
            }
        },
    });
}
