import { useQuery } from '@tanstack/react-query';

export function useGetUser() {
    return useQuery({
        queryKey: ['user'],
        queryFn: async function getUser() {
            const response = await fetch('/api/auth/user');

            if (response.status !== 200) {
                throw { message: 'Unauthorized' };
            }

            const data = await response.json();

            if (data.errors) {
                throw data.errors;
            } else {
                return data;
            }
        },
        retry: 0,
    });
}
