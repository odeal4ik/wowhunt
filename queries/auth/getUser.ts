// TODO align types
type User = {
    id: 4;
    affiliate_id: 'ansL27koqsmdO0M';
    referal_id: null;
    email: 'api@test2.email';
    email_new: null;
    email_verified_at: null;
    current_type: 0;
    active_booster: 0;
    avatar: '/storage/upload/settings/AOjsidEAo4Z6w5CkAdWTohBF6MpqmVZpO1LBXmHF.svg';
    role_id: null;
    level_booster_id: 1;
    level_customer_id: 1;
    balance: '0.00';
    spending: '0.00';
    ip: '172.69.34.128';
    ban: 0;
    ban_cause: null;
    newsletter: 0;
    limit_orders: null;
    email_notifу: 0;
    push_notifу: 0;
    telegram_notifу: 0;
    telegram_id: null;
    telegram_link: null;
    discord_link: null;
    trustpilot_id: null;
    created_at: '2025-01-28T17:29:23.000000Z';
    updated_at: '2025-01-28T17:29:23.000000Z';
    role: null;
};

export async function getUser({
    token,
}: {
    token: string;
}): Promise<User | null> {
    try {
        const response = await fetch(`https://dev.wowhunt.com/api/user`, {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        return response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

// Valid users
// 1|H2nydiqMc6wFtD7ymhstMcSy1X9nh2pMDkcv9vq0253e0fd5
