import Image from 'next/image';
import styles from './user-profile-block.module.css';

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
                    <p className={styles.idUser}>ID: {id}</p>
                    <p className={styles.emailUser}>{email}</p>
                </div>
            </div>
        </div>
    );
}
