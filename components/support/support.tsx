import styles from './support.module.css';

export function Support() {
    return (
        <section className={styles.support}>
            <button className={styles.button}>
                <img src="./system-icons/discord.svg" alt="discord" />
                WOWHUNT
            </button>

            <button className={styles.button}>
                <img src="./system-icons/livechat.svg" alt="live-chat" />
                LIVE CHAT
            </button>
        </section>
    );
}
