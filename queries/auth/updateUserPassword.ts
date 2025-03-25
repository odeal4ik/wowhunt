import { useMutation } from '@tanstack/react-query';

export interface UpdatePasswordInput {
    old_password: string;
    password: string;
    password_confirmation: string;
}

export function useUpdatePassword(): {
    mutate: (
        input: UpdatePasswordInput,
        { onSuccess }: { onSuccess?: () => void },
    ) => void;
    isPending: boolean;
    error: {
        old_password?: string[];
        password?: string[];
        password_confirmation?: string[];
    } | null;
} {
    return useMutation({
        mutationFn: async function signUpUser(input: UpdatePasswordInput) {
            const response = await fetch('/api/auth/user/update/password', {
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
