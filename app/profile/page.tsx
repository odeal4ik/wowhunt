'use client';

import { BalanceCard } from '@/components/balance-card/balance-card';
import { InviteFriend } from '@/components/invite-friend/invite-friend';
import { ProfileButtonsBlock } from '@/components/profile-buttons-block/profile-buttons-block';
import { ProfileCards } from '@/components/profile-cards/profile-cards';
import ProgressBar from '@/components/progress-bar/progress-bar';
import { ProgressBlock } from '@/components/progress-block/progress-block';
// import { ProgressImage } from '@/components/progress-image';
import { UserProfile } from '@/components/user-profile';

import { useGetUser } from '@/queries/auth/getUser';

import { getUserProgress } from '../../utils/progress';
import styles from './profile.module.css';

export default function Profile() {
    const { data, isSuccess } = useGetUser();

    if (!isSuccess) {
        return null;
    }

    console.log(data);

    const { balance, level_customer_id, spending } = data;

    const { title, description } = getUserProgress(level_customer_id * 10);

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.profile}>
                    <div className={styles.userWrapper}>
                        <div className={styles.user}>
                            <UserProfile />

                            {/* TODO figure out why downloading of two similar svgs cause render problem */}
                            {/* <div className={styles.image}>
                                <ProgressImage
                                    level={level_customer_id}
                                    isBooster={false}
                                />
                            </div> */}
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
                        title={title}
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

            <div className={styles.containerBalance}>
                <BalanceCard
                    balance={balance}
                    balanceTitle="Balance"
                    isIncreasingBalance={true}
                    buttonsReports={false}
                    rowDataPoints={[60, 70, 50, 65, 60, 70, 60]}
                />

                <BalanceCard
                    balance={spending}
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
