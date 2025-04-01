import cn from 'classnames';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';

import { Icon } from '@/core-components/icon/icon';

import Copy from '@/images/system-icons/copy.svg';
import Done from '@/images/system-icons/done.svg';
import Envelope from '@/images/system-icons/mail-icon.svg';
import Support from '@/images/system-icons/support.svg';

import { copyMessage } from '@/contants/notifications';
import { OrdersListData } from '@/queries/orders/getOrders';

import { ToastNotification } from '../toast-notification/toast-notification';
import styles from './profile-card.module.css';

interface StatusConfig {
    label: string;
    bgClass: string;
    srcImg: string;
}

interface OrderCard {
    order: OrdersListData['data'][number];
    status: 'delivered' | 'cancelled' | 'in-progress' | 'looking' | 'refunded';
    platform: string;
    startDate: string;
    accFreeHours: string;
    additionalInfo: string;
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

const handleCopy = (text: string | number) => {
    navigator.clipboard.writeText(String(text));
    toast(<ToastNotification {...copyMessage} />);
};

export function ProfileCard({ status, details, order }: OrderCard) {
    const config = STATUS_CONFIG[status];
    const { id, price_booster, boost } = order;
    const [integer, decimal] = price_booster.split('.');

    return (
        <div className={cn(styles.card, styles[status])}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={cn(styles.status, config.bgClass)}>
                        <p className={styles.label}>{config.label}</p>
                    </div>

                    <button
                        className={styles.id}
                        onClick={() => handleCopy(id)}>
                        <p>ID: {id}</p>
                        <Icon svg={Copy} label="Copy" />
                    </button>
                </div>

                <div className={styles.icon}>
                    <Image
                        src={config.srcImg}
                        alt={config.label}
                        width={89}
                        height={89}
                    />
                </div>

                <p className={styles.price}>
                    <span>${integer}</span>
                    <span className={styles.decimal}>.{decimal}</span>
                </p>

                <p className={styles.title}>{boost?.name}</p>

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
