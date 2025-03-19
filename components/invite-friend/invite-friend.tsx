import Image from 'next/image';

import styles from './invite-friend.module.css';

export function InviteFriend({ price }: { price: number }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <h3 className={styles.title}>Invite friends</h3>
                    <p className={styles.text}>
                        Invite your referrals and get ${price} to your account
                    </p>
                </div>

                <div className={styles.image}>
                    <Image
                        src="/images/invite-friend.png"
                        alt="Invite friend"
                        width={160}
                        height={170}
                    />
                </div>
            </div>

            <form className={styles.form}>
                <input
                    type="email"
                    placeholder="Enter invite e-mail"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Invite
                </button>
            </form>
        </div>
    );
}
