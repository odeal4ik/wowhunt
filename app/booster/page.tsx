'use client';

// import { BoosterProfileBalance } from '@/components/booster-profile-balance/booster-profile-balance';
// import { BoosterProfileCardsBoost } from '@/components/booster-profile-cards-boost/booster-profile-cards-boost';
// import { BoosterProfileEarnings } from '@/components/booster-profile-earnings/booster-profile-earnings';
// import { BoosterProfileInfo } from '@/components/booster-profile-info/booster-profile-info';
// import { BoosterProfileInviteFriend } from '@/components/booster-profile-invite-friend/booster-profile-invite-friend';
// import { BoosterProfileNotification } from '@/components/booster-profile-notification/booster-profile-notification';
// import { BoosterProfileCardOrders } from '@/components/booster-profile-card-orders/booster-profile-card-orders';
import styles from './booster.module.css';

interface BoosterProps {
    id?: string;
    email: string;
    balance?: number;
    totalEarned?: number;
    srcImg?: string;
}

export default function BooBooster({}: // id = '123456789',
// email = 'nikita.kudenikov@longdomain.com',
// balance = 10000000,
// totalEarned = 10000000,
// srcImg = '/images/avatar-profile.png',
BoosterProps) {
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>BooBooster</h1>
                <div className={styles.container}>
                    <div className={`${styles.leftSection} ${styles.section}`}>
                        {/* <BoosterProfileInfo
                            id={id}
                            email={email}
                            srcImg={srcImg}
                        />
                        <BoosterProfileNotification /> */}
                    </div>

                    <div
                        className={`${styles.middleSection} ${styles.section}`}>
                        {/* <BoosterProfileInviteFriend />
                        <BoosterProfileCardsBoost /> */}
                    </div>

                    <div className={`${styles.rightSection} ${styles.section}`}>
                        {/* <BoosterProfileBalance balance={balance} />
                        <BoosterProfileEarnings totalEarned={totalEarned} /> */}
                    </div>
                </div>
                <p className={styles.orderTitle}>Ready to take new order 😊?</p>
                {/* <BoosterProfileCardOrders /> */}
            </div>
        </main>
    );
}
