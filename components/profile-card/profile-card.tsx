import React from 'react';
import styles from './profile-card.module.css';
import Image from 'next/image';

interface StatusConfig {
    label: string;
    bgClass: string;
    srcImg: string;
}

interface OrderCard {
    status: 'delivered' | 'cancelled' | 'in-progress' | 'looking' | 'refunded';
    price: number;
    title: string;
    platform: string;
    startDate: string;
    accFreeHours: string;
    additionalInfo: string;
    id: string;
    details: {
        type: 'additional' | 'normal';
        label: string;
        value: string;
    }[];
}

const STATUS_CONFIG: Record<OrderCard['status'], StatusConfig> = {
    delivered: {
        label: 'Delivered',
        srcImg: '/system-icons/card-delivered.png',
        bgClass: styles.statusBgDelivered,
    },
    cancelled: {
        label: 'Cancelled',
        srcImg: '/system-icons/card-cancelled.png',
        bgClass: styles.statusBgCancelled,
    },
    'in-progress': {
        label: 'In progress',
        srcImg: '/system-icons/card-progress.png',
        bgClass: styles.statusBgInProgress,
    },
    looking: {
        label: 'Looking',
        srcImg: '/system-icons/card-looking.png',
        bgClass: styles.statusBgLooking,
    },
    refunded: {
        label: 'Refunded',
        srcImg: '/system-icons/card-refunded.png',
        bgClass: styles.statusBgRefunded,
    },
};

export function ProfileCard({ status, price, title, id, details }: OrderCard) {
    const config = STATUS_CONFIG[status];

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    const formattedPrice = price.toFixed(2);
    const [integerPart, decimalPart] = formattedPrice.split('.');

    return (
        <div className={`${styles.card} ${styles[status]}`}>
            <div className={styles.cardContent}>
                <div className={styles.header}>
                    <p className={`${styles.status} ${styles[status]}`}>
                        {config.label}
                    </p>
                    <div
                        className={styles.idBlock}
                        onClick={() => handleCopy(id)}>
                        <p className={styles.id}>ID: {id}</p>
                        <Image
                            src="/system-icons/copy.svg"
                            alt="Copy"
                            width={12}
                            height={14}
                            className={styles.copyIcon}
                        />
                    </div>
                </div>

                <div className={styles.infoBlock}>
                    <Image
                        src="/system-icons/info.svg"
                        alt="Info"
                        width={19}
                        height={19}
                        className={styles.infoIcon}
                    />
                </div>

                <div className={styles.iconWrapper}>
                    <Image
                        src={config.srcImg}
                        alt={config.label}
                        width={89}
                        height={89}
                    />
                </div>

                <p className={styles.price}>
                    <span>${integerPart}</span>
                    <span className={styles.decimalPart}>.{decimalPart}</span>
                </p>

                <p className={styles.title}>{title}</p>

                <div className={styles.details}>
                    {details.map((detail, index) =>
                        detail.type === 'additional' ? (
                            <p key={index} className={styles.additionalInfo}>
                                {detail.value}
                            </p>
                        ) : (
                            <div key={index} className={styles.detailRow}>
                                <p>{detail.label}</p>
                                <p className={styles.valueDetails}>
                                    {detail.value}
                                </p>
                            </div>
                        ),
                    )}
                </div>

                <div className={styles.actions}>
                    <button
                        className={`${styles.actionButton} ${styles.actionFuttonDefault}`}>
                        <Image
                            src="/system-icons/support-white.svg"
                            alt="Support"
                            width={24}
                            height={24}
                        />
                    </button>
                    <button
                        className={`${styles.actionButton} ${styles.actionFuttonDefault}`}>
                        <Image
                            src="/system-icons/mail-white.svg"
                            alt="Chat"
                            width={24}
                            height={24}
                        />
                        Chat
                    </button>
                    <button
                        className={`${styles.actionButton} ${styles.actionFuttonDone}`}>
                        <Image
                            src="/system-icons/done.svg"
                            alt="Done"
                            width={18}
                            height={18}
                        />
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}
