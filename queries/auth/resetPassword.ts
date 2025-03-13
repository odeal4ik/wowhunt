import { useMutation } from '@tanstack/react-query';

export function useForgotPassword(): {
    mutate: (
        { email }: { email: string },
        { onSuccess }: { onSuccess?: () => void },
    ) => void;
    isPending: boolean;
    error: { email?: string[] } | null;
} {
    return useMutation({
        mutationFn: async function logInUser({ email }) {
            const response = await fetch('/api/auth/reset-password', {
                method: 'POST',
                body: JSON.stringify({ email }),
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
