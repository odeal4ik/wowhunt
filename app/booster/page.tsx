'use client';

import { useState } from 'react';

import { BalanceCard } from '@/components/balance-card';
import { BoosterOrderCards } from '@/components/booster-order-cards/booster-order-cards';
import { InviteFriend } from '@/components/invite-friend';
import { CategoriesModal } from '@/components/modal-filter-categorie/modal-filter-categorie';
import { ProfileButtonsBlock } from '@/components/profile-buttons-block/profile-buttons-block';
import { ProgressBlock } from '@/components/progress-block/progress-block';
import { ProgressBooster } from '@/components/progress-booster/progress-booster';
import { ProgressImage } from '@/components/progress-image';
import { UserProfile } from '@/components/user-profile';

import { useGetUser } from '@/queries/auth/getUser';

import styles from './booster.module.css';

export default function Profile() {
    const { data, isSuccess } = useGetUser();
    console.log(data);

    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!isSuccess) {
        return null;
    }

    const { level_booster_id } = data;

    return (
        <main className={styles.main}>
            <div className={styles.containerHeader}>
                <div className={styles.profileBlock}>
                    <div className={styles.userBlock}>
                        <UserProfile />

                        <div className={styles.imgLevel}>
                            <ProgressImage level={level_booster_id} isBooster />
                        </div>
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
                    title="Young Booster"
                    description="To reach the next level you need to have 4 completed orders."
                    level={level_booster_id}
                    onClick={() => setIsModalOpen(true)}
                />

                <div className={styles.inviteBlock}>
                    <InviteFriend price={10} />
                </div>
                <div className={styles.buttonsBlockDesktop}>
                    <ProfileButtonsBlock />
                </div>
            </div>

            <div className={styles.containerBalance}>
                <BalanceCard
                    balanceTitle="Balance"
                    lastOrder={10.345}
                    lastOrderTitle="Last order"
                    isIncreasingLastOrder={true}
                    buttonsReports={true}
                />

                <BalanceCard
                    balanceTitle="Total earnings"
                    buttonsReports={false}
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
