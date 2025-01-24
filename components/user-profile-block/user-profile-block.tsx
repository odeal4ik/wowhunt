import Image from 'next/image';
import styles from './user-profile-block.module.css';
import { ProgressBooster } from '../progress-booster/progress-booster';

interface UserProfileBlockProps {
    id: string;
    email: string;
    srcImg: string;
}

export function UserProfileBlock({ id, email, srcImg }: UserProfileBlockProps) {
    return (
        <div className={styles.avatarContainer}>
            <Image
                src={srcImg}
                alt="Profile"
                width={152}
                height={152}
                className={styles.avatarImg}
            />
            <div className={styles.profileInfo}>
                <div className={styles.idContainer}>
                    <div className={styles.wrapper}>
                        <p className={styles.idUser}>ID: {id}</p>
                        <div className={styles.progressContainer}>
                            <ProgressBooster />
                        </div>
                    </div>
                    <p className={styles.emailUser}>{email}</p>
                </div>
            </div>
        </div>
    );
}
