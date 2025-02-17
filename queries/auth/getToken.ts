import { useQuery } from '@tanstack/react-query';

export function useGetToken() {
    return useQuery({
        queryKey: ['token'],
        queryFn: async function getUser() {
            const response = await fetch('/api/auth/token');

            if (response.status !== 200) {
                throw { message: 'Unauthorized' };
            }

            return true;
        },
        retry: 0,
    });
}
