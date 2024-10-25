import styles from './carousel.module.css';

export function Carousel() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.heading}>
                <div className={styles.title}>
                    <img
                        width={42}
                        height={42}
                        src="./images/trastpilot-star.svg"
                        alt="trust pilot"
                    />
                    <span>Trustpilot</span>
                </div>
                <div className={styles.reviews}>
                    <span>Excellent 4.9 out of 5</span>
                    <span>Based on 650 reviews</span>
                </div>
            </div>

            <div className={styles.carousel}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.rating}>
                            <img src="/images/five-stars.svg" alt="carousel" />
                            <span className={styles.author}>
                                Joanna Hargett
                            </span>
                        </div>
                        <div className={styles.review}>
                            <span className={styles.title}>
                                No complaints here!
                            </span>
                            <span className={styles.description}>
                                Always will go to them when I am looking to try
                                a difficult dungeon/raid for the first time. I
                                learn a lot by doing, and since LFR is pretty
                                toxic in WoW, it is hard for a beginner to learn
                                through LFR. I like running with these guys.
                                They&apos;ll carry you through so you can learn
                                the mechanics while running through without
                                stressing out.
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
