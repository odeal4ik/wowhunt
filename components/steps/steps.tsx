import Image from 'next/image';
import styles from './steps.module.css';

const steps = [
    {
        title: 'Step 1',
        subtitle: 'Choose service',
        description:
            'Each service except WoW Raid will be started in 15 Minutes',
    },
    {
        title: 'Step 2',
        subtitle: 'Make an order',
        description: 'Fill up your character details and pay for it',
    },
    {
        title: 'Step 3',
        subtitle: 'Get contacted',
        description: 'Our support will contact you within 5 minutes',
    },
    {
        title: 'Step 4',
        subtitle: 'Get started',
        description: 'In 15 minutes get your order begun!',
    },
    {
        title: 'Step 5',
        subtitle: 'Review',
        description:
            'After the order has been completed - kindly review the service :)',
    },
];

export function Steps() {
    return (
        <div className={styles.steps}>
            {steps.map((step, index) => (
                <div key={step.title} className={styles.step}>
                    <Image
                        src={`/system-icons/gold-step${index + 1}.svg`}
                        alt={step.title}
                        width={136}
                        height={136}
                        className={styles.stepImage}
                    />
                    <div className={styles.stepContent}>
                        <p className={styles.stepTitle}>{step.title}</p>
                        <p className={styles.stepSubtitle}>{step.subtitle}</p>
                        <p className={styles.stepDescription}>
                            {step.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
