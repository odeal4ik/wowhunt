import styles from './why-us-section.module.css';

export function WhyUsSection() {
    return (
        <section className={styles.whyUs}>
            <div className={styles.image}>
                <img src="/images/whyus.png" alt="whyus" loading="lazy" />
            </div>

            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <img
                        src="/system-icons/writting.svg"
                        alt="Why us 1"
                        className={styles.icon}
                        loading="lazy"
                    />
                    <div className={styles.content}>
                        <h3 className={styles.title}>ONLINE 24/7</h3>
                        <p className={styles.text}>
                            You can always ask any question to our operators in
                            live chat.
                        </p>
                    </div>
                </div>

                <div className={styles.item}>
                    <img
                        src="/system-icons/time.svg"
                        alt="Why us 2"
                        className={styles.icon}
                        loading="lazy"
                    />
                    <div className={styles.content}>
                        <h3 className={styles.title}>FAST DELIVERY</h3>
                        <p className={styles.text}>
                            We will contact you and start working on your order
                            within 5 minutes.
                        </p>
                    </div>
                </div>

                <div className={styles.item}>
                    <img
                        src="/system-icons/star.svg"
                        alt="Why us 3"
                        className={styles.icon}
                        loading="lazy"
                    />
                    <div className={styles.content}>
                        <h3 className={styles.title}>WE ARE TRUSTED</h3>
                        <p className={styles.text}>
                            We are working in the boost industry since 2011. You
                            can read reviews about us on trustpilot
                        </p>
                        <p className={styles.trust}>
                            <img
                                src="/images/trastpilot-star.svg"
                                alt="trastpilot"
                                loading="lazy"
                            />
                            <span>Trustpilot</span>
                            <img
                                src="/images/trustpilot-stars.png"
                                alt="trastpilot"
                                loading="lazy"
                            />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
