import cn from 'classnames';

import styles from './game-category-layout.module.css';
import { Icon } from '../../../core-components/icon/icon';

import Chat from '@/images/icons/writting.svg';

export default function GameCategoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className={styles['categoty-layout']}>
            {children}
            <div className={styles.filters}>
                <div className={styles.item}>
                    <span className={styles.label}>Region</span>

                    <div className={styles.region}>
                        <div className={styles.languageBtn}>
                            <input
                                id="region-1"
                                type="radio"
                                name="region"
                                value="eu"
                            />
                            <label htmlFor="region-1">Eu</label>
                        </div>

                        <div className={styles.languageBtn}>
                            <input
                                id="region-2"
                                type="radio"
                                name="region"
                                value="us"
                            />
                            <label htmlFor="region-2">Us</label>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <span className={cn(styles.label, styles.withLine)}>
                        <span>Quantity</span>
                        <span />
                    </span>
                </div>
                <div className={styles.item}>
                    <span className={cn(styles.label, styles.withLine)}>
                        <span>ranks</span>
                        <span />
                    </span>
                </div>
                <div className={styles.item}>
                    <span className={cn(styles.label, styles.withLine)}>
                        <span>Raid Mode (Required)</span>
                        <span />
                    </span>
                </div>
                <div className={styles.item}>
                    <span className={cn(styles.label, styles.withLine)}>
                        <span>Choose Difficulty</span>
                        <span />
                    </span>
                </div>
                <div className={styles.item}>
                    <span className={cn(styles.label, styles.withLine)}>
                        <span>Loot Options</span>
                        <span />
                    </span>
                </div>

                <div className={styles.price}>€53.99</div>

                <div className={styles.submition}>
                    <button className={styles.submit}>BUY NOW</button>
                    <button className={styles.chat}>
                        <Icon svg={Chat} fill="#9f9fb7" />
                        CHAT
                    </button>
                </div>
            </div>
        </section>
    );
}
