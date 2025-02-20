import { useMutation, useQueryClient } from '@tanstack/react-query';

export interface LogInUserInput {
    email: string;
    password: string;
    type: boolean;
}

export function useLogInUser(): {
    mutate: (
        input: LogInUserInput,
        { onSuccess }: { onSuccess?: () => void },
    ) => void;
    isPending: boolean;
    error: { email?: string[]; password?: string[] } | null;
} {
    const { setQueryData } = useQueryClient();
    return useMutation({
        mutationFn: async function logInUser(input: LogInUserInput) {
            const response = await fetch('/api/auth/login', {
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
        onSuccess: () => {
            setQueryData(['token'], true);
        },
        onError: () => {
            setQueryData(['token'], false);
        },
    });
}
