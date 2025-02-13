import { useMutation } from '@tanstack/react-query';

export interface SignUpUserInput {
    discord_link: string;
    email: string;
    game?: string;
    password_confirmation?: string;
    password?: string;
    referal?: string;
    type: boolean;
}

export function useSignUpUser(): {
    mutate: (input: SignUpUserInput) => void;
    isPending: boolean;
    error: { email?: string[]; discord_link?: string[] } | null;
} {
    return useMutation({
        mutationFn: async function signUpUser(input: SignUpUserInput) {
            const response = await fetch('/api/auth/register', {
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
