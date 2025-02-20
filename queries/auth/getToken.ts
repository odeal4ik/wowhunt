import { useQuery } from '@tanstack/react-query';

export function useGetToken() {
    return useQuery({
        queryKey: ['token'],
        queryFn: async function getToken() {
            const response = await fetch('/api/auth/token');
            const { token } = await response.json();
            return token;
        },
        retry: 0,
    });
}
