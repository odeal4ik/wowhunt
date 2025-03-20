import { useQuery } from '@tanstack/react-query';

interface User {
    active_booster: 0 | 1;
    affiliate_id: string;
    avatar: string;
    balance: string;
    // ban_cause: null;
    // ban: 0;
    created_at: string;
    current_type: 0;
    discord_link: string;
    // email_new: null;
    email_notifу: 0 | 1;
    email_verified_at: string;
    email: string;
    id: number;
    ip: string;
    level_booster_id: 1 | 2 | 3;
    level_customer_id: 1 | 2 | 3 | 4 | 5;
    // limit_orders: null;
    newsletter: 0 | 1;
    push_notifу: 0 | 1;
    // referal_id: null;
    // role_id: null;
    spending: string;
    // telegram_id: null;
    // telegram_link: null;
    telegram_notifу: 0 | 1;
    // trustpilot_id: null;
    updated_at: string;
}

interface Error {
    message: string;
}

export function useGetUser() {
    return useQuery({
        queryKey: ['user'],
        queryFn: async function getUser() {
            const response = await fetch('/api/auth/user');

            if (response.status !== 200) {
                throw { message: 'Unauthorized' };
            }

            const data = await response.json();

            if (`message` in data && data.message) {
                throw data.message as Error;
            } else {
                return data as User;
            }
        },
        retry: 0,
    });
}
