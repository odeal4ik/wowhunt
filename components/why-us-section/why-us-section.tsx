/* eslint-disable @next/next/no-img-element */
import styles from './why-us-section.module.css';
import cn from 'classnames';

interface WhyUsSectionProps {
    items: Array<{
        icon: string;
        alt: string;
        text: string;
        title?: string;
    }>;
    image: {
        src: string;
        alt: string;
    };
    variant?: 'gold' | 'default';
    className?: string;
}

export function WhyUsSection({
    items,
    image,
    variant = 'default',
    className,
}: WhyUsSectionProps) {
    return (
        <section className={cn(styles.whyUs, styles[variant], className)}>
            <div className={styles.image}>
                <img src={image.src} alt={image.alt} loading="lazy" />
            </div>

            <div className={styles.items}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <img
                            src={item.icon}
                            alt={item.alt}
                            className={styles.icon}
                            loading="lazy"
                        />
                        <div className={styles.content}>
                            {item.title && (
                                <h3 className={styles.title}>{item.title}</h3>
                            )}
                            <p className={styles.text}>{item.text}</p>
                            {variant === 'default' && index === 2 && (
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
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
