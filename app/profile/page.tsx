'use client';

import { useWindowSize } from 'react-use';

import { BalanceCard } from '@/components/balance-card';
import { InviteFriend } from '@/components/invite-friend';
import { ProfileButtonsBlock } from '@/components/profile-buttons-block/profile-buttons-block';
import { ProfileCards } from '@/components/profile-cards/profile-cards';
import ProgressBar from '@/components/progress-bar/progress-bar';
import { ProgressBlock } from '@/components/progress-block/progress-block';
import { ProgressImage } from '@/components/progress-image';
import { UserProfile } from '@/components/user-profile';

import { useGetUser } from '@/queries/auth/getUser';

import { getUserProgress } from '../../utils/progress';
import styles from './profile.module.css';

export default function Profile() {
    const { data, isSuccess } = useGetUser();

    const { width } = useWindowSize();

    if (!isSuccess) {
        return null;
    }

    console.log(data);

    const { level_customer_id } = data;

    const { description } = getUserProgress(level_customer_id * 10);

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.profile}>
                    <div className={styles.userWrapper}>
                        <div className={styles.user}>
                            <UserProfile />

                            {width <= 1375 ? (
                                <ProgressImage
                                    key={'mobile'}
                                    level={level_customer_id}
                                    isBooster={false}
                                />
                            ) : null}
                        </div>

                        {/* Mobile progress bar */}
                        <div className={styles.progressBar}>
                            <ProgressBar progress={level_customer_id * 10} />
                        </div>
                    </div>

                    {/* Desktop progress block */}
                    <ProgressBlock
                        variant="profile"
                        level={level_customer_id}
                        description={description}
                    />

                    <div className={styles.invite}>
                        <InviteFriend price={15} />
                    </div>

                    <div className={styles.buttonsBlockMobile}>
                        <ProfileButtonsBlock />
                    </div>
                </div>
            </div>

            <div className={styles.buttonsBlockDesktop}>
                <ProfileButtonsBlock />
            </div>

            <div className={styles.balances}>
                <BalanceCard title="Balance" isBalance />

                <BalanceCard title="Total spending" />
            </div>

            <div className={styles.orders}>
                <ProfileCards />
            </div>
        </main>
    );
}
