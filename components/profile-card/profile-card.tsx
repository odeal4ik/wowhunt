import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';

import { Icon } from '@/core-components/icon/icon';

import Copy from '@/images/system-icons/copy.svg';
import Done from '@/images/system-icons/done.svg';
import Envelope from '@/images/system-icons/mail-icon.svg';
import Support from '@/images/system-icons/support.svg';

import { copyMessage } from '@/contants/notifications';

import { ToastNotification } from '../toast-notification/toast-notification';
import styles from './profile-card.module.css';

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
        srcImg: '/for-cards/card-delivered.png',
        bgClass: styles.statusBgDelivered,
    },
    cancelled: {
        label: 'Cancelled',
        srcImg: '/for-cards/card-cancelled.png',
        bgClass: styles.statusBgCancelled,
    },
    'in-progress': {
        label: 'In progress',
        srcImg: '/for-cards/card-progress.png',
        bgClass: styles.statusBgInProgress,
    },
    looking: {
        label: 'Looking',
        srcImg: '/for-cards/card-looking.png',
        bgClass: styles.statusBgLooking,
    },
    refunded: {
        label: 'Refunded',
        srcImg: '/for-cards/card-refunded.png',
        bgClass: styles.statusBgRefunded,
    },
};

export function ProfileCard({ status, price, title, id, details }: OrderCard) {
    const config = STATUS_CONFIG[status];

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        toast(<ToastNotification {...copyMessage} />);
    };

    const formattedPrice = price.toFixed(2);
    const [integerPart, decimalPart] = formattedPrice.split('.');

    return (
        <div className={`${styles.card} ${styles[status]}`}>
            <div className={styles.cardContent}>
                <div className={styles.header}>
                    <p className={`${styles.status} ${config.bgClass}`}>
                        {config.label}
                    </p>
                    <div
                        className={styles.idBlock}
                        onClick={() => handleCopy(id)}>
                        <p className={styles.id}>ID: {id}</p>
                        <Icon svg={Copy} label="Copy" />
                    </div>
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
                        <Icon svg={Support} label="Support" />
                    </button>
                    <button
                        className={`${styles.actionButton} ${styles.actionFuttonDefault}`}>
                        <Icon svg={Envelope} label="Envelope" />
                        Chat
                    </button>
                    <button
                        className={`${styles.actionButton} ${styles.actionFuttonDone}`}>
                        <Icon svg={Done} label="Done" />
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}
