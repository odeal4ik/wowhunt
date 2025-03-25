import { useMutation } from '@tanstack/react-query';

export function useUpdateEmail(): {
    mutate: (
        input: {
            email: string;
        },
        { onSuccess }: { onSuccess?: () => void },
    ) => void;
    isPending: boolean;
    error: { email?: string[] } | null;
} {
    return useMutation({
        mutationFn: async function signUpUser(input: { email: string }) {
            const response = await fetch('/api/auth/user/update/email', {
                method: 'POST',
                body: JSON.stringify(input),
            });

            const data = await response.json();

            if (data.errors) {
                throw data.errors;
            } else {
                return data;
            }
        },
    });
}
