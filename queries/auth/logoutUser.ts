import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useLogOutUser() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async function logOutUser() {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
            });

            const data = await response.json();

            if (data.errors) {
                throw data.errors;
            } else {
                return data;
            }
        },
        onSuccess: function onSuccess() {
            queryClient.setQueryData(['token'], false);
            queryClient.setQueryData(['user'], null);
        },
    });
}
