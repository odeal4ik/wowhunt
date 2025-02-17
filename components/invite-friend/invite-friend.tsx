import Image from 'next/image';
import styles from './invite-friend.module.css';

interface InviteFriendProps {
    price: number;
}

export function InviteFriend({ price }: InviteFriendProps) {
    return (
        <div className={styles.inviteSection}>
            <div className={styles.inviteContainer}>
                <div>
                    <h3 className={styles.inviteTitle}>Invite friends</h3>
                    <p className={styles.inviteText}>
                        Invite your referrals and get ${price} to your account
                    </p>
                </div>

                <Image
                    src="/images/invite-friend.png"
                    alt="Invite friend"
                    width={160}
                    height={170}
                    className={styles.inviteImg}
                />
            </div>

            <form className={styles.inviteForm}>
                <input
                    type="email"
                    placeholder="Enter invite e-mail"
                    className={styles.inviteInput}
                />
                <button type="submit" className={styles.inviteButton}>
                    Invite
                </button>
            </form>
        </div>
    );
}
