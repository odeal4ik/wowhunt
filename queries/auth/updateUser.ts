import { useMutation } from '@tanstack/react-query';

export interface UpdateUserInput {
    email_notifу: boolean;
    push_notifу: boolean;
}

export function useUpdateUser(): {
    mutate: (
        input: UpdateUserInput,
        { onSuccess }: { onSuccess?: () => void },
    ) => void;
    isPending: boolean;
    error: { email_notifу?: string[]; push_notifу?: string[] } | null;
} {
    return useMutation({
        mutationFn: async function signUpUser(input: UpdateUserInput) {
            const response = await fetch('/api/auth/user/update', {
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
