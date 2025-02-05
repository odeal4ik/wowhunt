import { useMutation, useQueryClient } from '@tanstack/react-query';

export interface SignUpUserInput {
    type: boolean;
    email: string;
    password: string;
    password_confirmation: string;
    discord_link: string;
    referal?: string;
}

type SignUpUserResponse = {
    token: string;
} | null;

export async function signUpUser(
    input: SignUpUserInput,
): Promise<SignUpUserResponse> {
    try {
        const response = await fetch(`https://dev.wowhunt.com/api/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(input),
        });

        return response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export function useSignUpUser() {
    const { setQueryData } = useQueryClient();

    return useMutation({
        mutationFn: (input: SignUpUserInput) => signUpUser(input),
        onSuccess: (data: SignUpUserResponse) => {
            setQueryData(['user'], data);
        },
        onError: (error: unknown) => {
            console.log(error);
        },
    });
}
