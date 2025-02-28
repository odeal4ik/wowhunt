import { Icon } from '@/core-components/icon/icon';

import Discord from '@/images/icons/discord.svg';
import LiveChat from '@/images/icons/livechat.svg';

import styles from './support.module.css';

export function Support() {
    return (
        <section className={styles.support}>
            <button className={styles.button} type="button">
                <Icon svg={Discord} />
                WOWHUNT
            </button>

            <button className={styles.button} type="button">
                <Icon svg={LiveChat} />
                LIVE CHAT
            </button>
        </section>
    );
}
