import { useMutation } from '@tanstack/react-query';

export interface ReferralLinkInput {
    email: string;
}

export function useSendReferralLink(): {
    mutate: (
        input: ReferralLinkInput,
        { onSuccess }: { onSuccess?: () => void },
    ) => void;
    isPending: boolean;
    error: { email?: string[] } | null;
} {
    return useMutation({
        mutationFn: async function signUpUser(input: ReferralLinkInput) {
            const response = await fetch('/api/auth/user/referral', {
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
