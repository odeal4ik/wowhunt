import { useMutation, useQueryClient } from '@tanstack/react-query';

export interface LogInUserInput {
    email: string;
    password: string;
    type: boolean;
}

type LogInUserResponse =
    | {
          token: string;
      }
    | { errors: Record<keyof LogInUserInput, string[]> }
    | null;

export async function logInUser(
    input: LogInUserInput,
): Promise<LogInUserResponse> {
    try {
        const response = await fetch('https://dev.wowhunt.com/api/login/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(input),
        });

        return await response.json();
    } catch (error) {
        if (error) {
            return {
                errors: {
                    email: ['Something went wrong'],
                    password: ['Something went wrong'],
                    type: [],
                },
            };
        } else return null;
    }
}

export function useLogInUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (input: LogInUserInput) => logInUser(input),
        onSuccess: (data: LogInUserResponse) => {
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
            return error;
        },
    });
}
