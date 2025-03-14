'use client';

import Image from 'next/image';

import { BalanceCard } from '@/components/balance-card/balance-card';
import { InviteFriend } from '@/components/invite-friend/invite-friend';
import { ProfileButtonsBlock } from '@/components/profile-buttons-block/profile-buttons-block';
import { ProfileCards } from '@/components/profile-cards/profile-cards';
import ProgressBar from '@/components/progress-bar/progress-bar';
import { ProgressBlock } from '@/components/progress-block/progress-block';
import { UserProfileBlock } from '@/components/user-profile-block/user-profile-block';

import { useGetUser } from '@/queries/auth/getUser';

import { getUserProgress } from '../../utils/progress';
import styles from './profile.module.css';

const currentProgress = 50;

export default function Profile() {
    const { data: user } = useGetUser();
    console.log(user);

    const { image, title, description } = getUserProgress(currentProgress);

    return (
        <main className={styles.main}>
            <div className={styles.containerHeader}>
                <div className={styles.profileBlock}>
                    <div className={styles.userBlock}>
                        <UserProfileBlock
                            id={user.id}
                            email={user.email}
                            srcImg={user.avatar}
                            // srcImg="/storage/upload/demo/icon-demo.svg"
                        />
                        <Image
                            src={image}
                            alt={title}
                            width={57}
                            height={48}
                            className={styles.imgLevel}
                        />
                    </div>
                    <div className={styles.progressBar}>
                        <ProgressBar progress={currentProgress} />
                    </div>
                </div>
                <ProgressBlock
                    variant="profile"
                    progress={currentProgress}
                    image={image}
                    title={title}
                    description={description}
                />
                <div className={styles.inviteBlock}>
                    <InviteFriend price={15} />
                </div>
                <div className={styles.buttonsBlockMobile}>
                    <ProfileButtonsBlock email="nikita.kudenikov@srg.com" />
                </div>
            </div>

            <div className={styles.buttonsBlockDesktop}>
                <ProfileButtonsBlock email="nikita.kudenikov@srg.com" />
            </div>

            <div className={styles.containerBalance}>
                <BalanceCard
                    balance={12.345}
                    balanceTitle="Balance"
                    isIncreasingBalance={true}
                    buttonsReports={false}
                    rowDataPoints={[60, 70, 50, 65, 60, 70, 60]}
                />
                <BalanceCard
                    balance={20.953}
                    balanceTitle="Total spending"
                    isIncreasingBalance={true}
                    buttonsReports={false}
                    rowDataPoints={[60, 70, 50, 65, 60, 70, 60]}
                />
            </div>
            <div className={styles.containerCards}>
                <ProfileCards />
            </div>
        </main>
    );
}
