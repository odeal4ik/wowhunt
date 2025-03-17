'use client';

import Image from 'next/image';
import { useState } from 'react';

import { BalanceCard } from '@/components/balance-card/balance-card';
import { BoosterOrderCards } from '@/components/booster-order-cards/booster-order-cards';
import { InviteFriend } from '@/components/invite-friend/invite-friend';
import { CategoriesModal } from '@/components/modal-filter-categorie/modal-filter-categorie';
import { ProfileButtonsBlock } from '@/components/profile-buttons-block/profile-buttons-block';
import { ProgressBlock } from '@/components/progress-block/progress-block';
import { ProgressBooster } from '@/components/progress-booster/progress-booster';
import { UserProfile } from '@/components/user-profile';

import imgLevel from '@/public/images/level-beginner-silver.png';
import { useGetUser } from '@/queries/auth/getUser';

import styles from './booster.module.css';

export default function Profile() {
    const { data: boster } = useGetUser();
    console.log(boster);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className={styles.main}>
            <div className={styles.containerHeader}>
                <div className={styles.profileBlock}>
                    <div className={styles.userBlock}>
                        <UserProfile />

                        <Image
                            src={imgLevel}
                            alt="level"
                            width={57}
                            height={48}
                            className={styles.imgLevel}
                        />
                    </div>
                    <div className={styles.btnServices}>
                        <div className={styles.progressBlock}>
                            <div className={styles.titleContainer}>
                                <p className={styles.headerTitle}>
                                    Young Booster
                                </p>
                                <ProgressBooster />
                            </div>
                            <p className={styles.headerProgress}>
                                To reach the next level you need to have 4
                                completed orders.
                            </p>
                        </div>

                        <button
                            className={styles.button}
                            onClick={() => setIsModalOpen(true)}>
                            Services that i can do
                        </button>
                    </div>
                </div>

                <ProgressBlock
                    variant="booster"
                    image={imgLevel}
                    title="Young Booster"
                    description="To reach the next level you need to have 4 completed orders."
                    onClick={() => setIsModalOpen(true)}
                />
                <div className={styles.inviteBlock}>
                    <InviteFriend price={10} />
                </div>
                <div className={styles.buttonsBlockDesktop}>
                    <ProfileButtonsBlock email="nikita.kudenikov@srg.com" />
                </div>
            </div>

            <div className={styles.containerBalance}>
                <BalanceCard
                    balance={boster.balance}
                    balanceTitle="Balance"
                    isIncreasingBalance={true}
                    lastOrder={10.345}
                    lastOrderTitle="Last order"
                    isIncreasingLastOrder={true}
                    buttonsReports={true}
                    rowDataPoints={[60, 70, 50, 65, 60, 70, 60]}
                />

                <BalanceCard
                    balance={boster.spending}
                    balanceTitle="Total earnings"
                    isIncreasingBalance={true}
                    buttonsReports={false}
                    rowDataPoints={[60, 70, 50, 65, 60, 70, 60]}
                />
            </div>
            <div className={styles.containerCards}>
                <BoosterOrderCards />
            </div>
            {isModalOpen && (
                <CategoriesModal
                    onClose={() => setIsModalOpen(false)}
                    isOpen={isModalOpen}
                />
            )}
        </main>
    );
}
