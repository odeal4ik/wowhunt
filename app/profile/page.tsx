'use client';

import Image from 'next/image';

import { BalanceCard } from '@/components/balance-card/balance-card';
import { InviteFriend } from '@/components/invite-friend/invite-friend';
import { ProfileButtonsBlock } from '@/components/profile-buttons-block/profile-buttons-block';
import { ProfileCards } from '@/components/profile-cards/profile-cards';
import ProgressBar from '@/components/progress-bar/progress-bar';
import { ProgressBlock } from '@/components/progress-block/progress-block';
import { UserProfile } from '@/components/user-profile';

import { useGetUser } from '@/queries/auth/getUser';

import { getUserProgress } from '../../utils/progress';
import styles from './profile.module.css';

export default function Profile() {
    const { data: user } = useGetUser();
    console.log(user);

    const { image, title, description } = getUserProgress(
        user.level_customer_id * 10,
    );

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.profile}>
                    <div className={styles.userWrapper}>
                        <div className={styles.user}>
                            <UserProfile />

                            <Image
                                src={image}
                                alt={title}
                                quality={100}
                                width={57}
                                height={48}
                                className={styles.image}
                            />
                        </div>

                        {/* Mobile progress bar */}
                        <div className={styles.progressBar}>
                            <ProgressBar
                                progress={user.level_customer_id * 10}
                            />
                        </div>
                    </div>

                    {/* Desktop progress block */}
                    <ProgressBlock
                        variant="profile"
                        progress={user.level_customer_id * 10}
                        image={image}
                        title={title}
                        description={description}
                    />

                    <div className={styles.invite}>
                        <InviteFriend price={15} />
                    </div>

                    <div className={styles.buttonsBlockMobile}>
                        <ProfileButtonsBlock email="nikita.kudenikov@srg.com" />
                    </div>
                </div>
            </div>

            <div className={styles.buttonsBlockDesktop}>
                <ProfileButtonsBlock email="nikita.kudenikov@srg.com" />
            </div>

            <div className={styles.containerBalance}>
                <BalanceCard
                    balance={user.balance}
                    balanceTitle="Balance"
                    isIncreasingBalance={true}
                    buttonsReports={false}
                    rowDataPoints={[60, 70, 50, 65, 60, 70, 60]}
                />

                <BalanceCard
                    balance={user.spending}
                    balanceTitle="Total spending"
                    isIncreasingBalance
                    buttonsReports={false}
                    rowDataPoints={[60, 70, 50, 65, 60, 70, 60]}
                />
            </div>

            <div className={styles.cards}>
                <ProfileCards />
            </div>
        </main>
    );
}
