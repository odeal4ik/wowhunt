import styles from './need-help.module.css';

export function NeedHelp() {
    return (
        <div className={styles['need-help']}>
            <div className={styles.content}>
                <span className={styles.title}>NEED HELP?</span>
                <span className={styles.subTitle}>Build your custom order</span>
            </div>
            <button type="button" className={styles.button}>
                CONTACT SUPPORT
            </button>
        </div>
    );
}
