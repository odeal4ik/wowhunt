import styles from './booster-profile-invite-friend.module.css';

export function BoosterProfileInviteFriend() {   
    return (
        <div className={styles.inviteSection}>
            <h3 className={styles.inviteTitle}>
                Invite friend and get{' '}
                <span className={styles.invitePrice}>10$</span>
            </h3>
            <form className={styles.inviteForm}>
                <input
                    type="email"
                    placeholder="Email"
                    className={styles.inviteInput}
                />
                <button type="submit" className={styles.inviteButton}>
                    Invite
                </button>
            </form>
        </div>
    );
}
