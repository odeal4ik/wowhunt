import Image from 'next/image';

import { useGetUser } from '@/queries/auth/getUser';

import { ProgressBooster } from '../progress-booster/progress-booster';
import styles from './user-profile.module.css';

export function UserProfile() {
    const { data, isSuccess } = useGetUser();

    if (!isSuccess) {
        return null;
    }

    const { id, email, avatar, active_booster } = data;

    return (
        <div className={styles.wrapper}>
            <Image
                src={avatar}
                alt="Profile"
                width={152}
                height={152}
                className={styles.image}
            />

            <div className={styles.info}>
                <div className={styles.container}>
                    <p className={styles.id}>ID: {id}</p>

                    {Boolean(active_booster) && (
                        <div className={styles.progress}>
                            <ProgressBooster />
                        </div>
                    )}
                </div>

                <p className={styles.email}>{email}</p>
            </div>
        </div>
    );
}
