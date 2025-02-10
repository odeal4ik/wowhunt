import { useMutation, useQueryClient } from '@tanstack/react-query';

export interface SignUpUserInput {
    discord_link: string;
    email: string;
    game?: string;
    password_confirmation?: string;
    password?: string;
    referal?: string;
    type: boolean;
}

type SignUpUserResponse =
    | {
          token: string;
      }
    | { errors: Record<keyof SignUpUserInput, string[]> }
    | null;

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
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (input: SignUpUserInput) => signUpUser(input),
        onSuccess: (data: SignUpUserResponse) => {
            if (
                data &&
                'errors' in data &&
                Object.keys(data.errors).length > 0
            ) {
            } else if (data && 'token' in data) {
                queryClient.setQueryData(['user'], data.token);
            }
        },
        onError: (error: unknown) => {
            console.log(error);
            return null;
        },
    });
}
