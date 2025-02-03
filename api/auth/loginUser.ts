import {
    UseMutateFunction,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';

interface LogInUserInput {
    email: string;
    password: string;
    type: boolean;
}

type LogInUserResponse = {
    token: string;
} | null;

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
        console.log(error);
        return null;
    }
}

export function useLogInUser() {
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: (input: LogInUserInput) => logInUser(input),
        onSuccess: (data: LogInUserResponse) => {
            queryClient.setQueryData(['user'], data);
        },
        onError: (error: unknown) => {
            console.log(error);
        },
    });

    return { mutate, isPending };
}
