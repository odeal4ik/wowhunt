/* eslint-disable @next/next/no-img-element */
import styles from './support.module.css';

export function Support() {
    return (
        <section className={styles.support}>
            <button className={styles.button} type="button">
                <img
                    src="/system-icons/discord.svg"
                    alt="discord"
                    loading="lazy"
                />
                WOWHUNT
            </button>

            <button className={styles.button} type="button">
                <img
                    src="/system-icons/livechat.svg"
                    alt="live-chat"
                    loading="lazy"
                />
                LIVE CHAT
            </button>
        </section>
    );
}
