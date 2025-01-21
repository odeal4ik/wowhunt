import styles from './form-order.module.css';

export function FormOrder() {
    return (
        <section className={styles.formOrder}>
            <div className={styles.formContainer}>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                            Email <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={styles.formInput}
                            placeholder="Example@gmail.com"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="discord" className={styles.formLabel}>
                            Discord <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="discord"
                            className={styles.formInput}
                            placeholder="DiscordName#12345"
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="notes" className={`${styles.formLabel} ${styles.labelDown}`}>
                        Additional information
                    </label>
                    <p className={styles.formDescription}>
                        Other notes (optional)
                    </p>
                    <input
                        type="text"
                        id="notes"
                        className={styles.formInput}
                        placeholder="Example@gmail.com"
                    />
                </div>
            </div>
        </section>
    );
}
