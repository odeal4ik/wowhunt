import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import React, { useState } from 'react';

import { Icon } from '@/core-components/icon/icon';

import ArrowUp from '@/images/for-cards/arrow-up.svg';
import Download from '@/images/system-icons/download.svg';
import Watch from '@/images/system-icons/watch.svg';

import { BalanceChart } from '../balance-chart/balance-chart';
import BoosterModalWithdraw from '../modal-withdraw/modal-withdraw';
import ModalMyWithdraw from '../model-my-withdraw/model-my-withdraw';
import styles from './balance-card.module.css';

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
);

export const calculateDate = (daysAgo: number) => {
    const date = new Date();
    date.setDate(date.getUTCDate() - daysAgo);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}.${month}`;
};

interface BalanceCardProps {
    balance: string;
    balanceTitle: string;
    lastOrder?: number;
    lastOrderTitle?: string;
    isIncreasingBalance?: boolean;
    isIncreasingLastOrder?: boolean;
    buttonsReports?: boolean;
    rowDataPoints: number[];
}

const getGradientColors = (balanceTitle: string) => {
    switch (balanceTitle.toLowerCase()) {
        case 'balance':
            return {
                start: '#9001AD',
                end: '#E94A05',
            };
        case 'total earnings':
        case 'total spending':
            return {
                start: '#0CC9EB',
                end: '#6405E9',
            };
        default:
            return {
                start: '#d203fa',
                end: '#e44803',
            };
    }
};

export function BalanceCard({
    balance,
    balanceTitle,
    lastOrder,
    lastOrderTitle = 'Last order',
    isIncreasingBalance = true,
    isIncreasingLastOrder = true,
    buttonsReports = true,
    rowDataPoints,
}: BalanceCardProps) {
    const [isModalWithdrawOpen, setIsModalWithdrawOpen] = useState(false);
    const [isModalMyWithdrawOpen, setIsModalMyWithdrawOpen] = useState(false);

    const [integerNumber, decimalNumber] = balance.split('.');

    const dates = [
        calculateDate(0),
        calculateDate(14),
        calculateDate(28),
    ].reverse();

    const { start: startColor, end: endColor } =
        getGradientColors(balanceTitle);

    return (
        <div
            className={styles.container}
            style={
                {
                    '--custom-start-color': startColor,
                    '--custom-end-color': endColor,
                } as React.CSSProperties
            }>
            <div className={styles.wrapper}>
                <div className={styles.containerBalance}>
                    <div className={styles.wrapperBalance}>
                        <div className={styles.headerContainer}>
                            <h2 className={styles.title}>{balanceTitle}</h2>

                            <div className={styles.balanceContainer}>
                                <div className={styles.balance}>
                                    <span className={styles.currencySymbol}>
                                        $
                                    </span>
                                    <span className={styles.integerNumber}>
                                        {integerNumber}
                                    </span>
                                    <span className={styles.decimalNumber}>
                                        ,{decimalNumber}
                                    </span>
                                    {isIncreasingBalance && (
                                        <Icon svg={ArrowUp} label="ArrowUp" />
                                    )}
                                </div>
                            </div>
                        </div>

                        {lastOrder && (
                            <div className={styles.headerContainer}>
                                <h2 className={styles.title}>
                                    {lastOrderTitle}
                                </h2>

                                <div className={styles.balanceContainer}>
                                    <div className={styles.balance}>
                                        <span
                                            className={`${styles.currencySymbol} ${styles.currencySymbolLastOrder}`}>
                                            $
                                        </span>
                                        <span
                                            className={`${styles.integerNumber} ${styles.integerNumberLastOrder}`}>
                                            {integerNumber}
                                        </span>
                                        <span
                                            className={`${styles.decimalNumber} ${styles.decimalNumberLastOrder}`}>
                                            ,{decimalNumber}
                                        </span>
                                        {isIncreasingLastOrder && (
                                            <Icon
                                                svg={ArrowUp}
                                                label="ArrowUp"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {buttonsReports && (
                        <div className={styles.buttonsReportsContainer}>
                            <button
                                type="button"
                                className={`${styles.buttonReport} ${styles.buttonDownload}`}
                                onClick={() => setIsModalWithdrawOpen(true)}>
                                <Icon svg={Download} label="Download" />
                            </button>
                            <button
                                type="button"
                                className={`${styles.buttonReport} ${styles.buttonHistory}`}
                                onClick={() => setIsModalMyWithdrawOpen(true)}>
                                <Icon
                                    svg={Watch}
                                    label="History"
                                    fill="#343453"
                                />
                            </button>
                        </div>
                    )}
                </div>

                <div className={styles.chart}>
                    <BalanceChart
                        startColor={startColor}
                        endColor={endColor}
                        rowDataPoints={rowDataPoints}
                    />
                    <div className={styles.dates}>
                        {dates.map((date, index) => (
                            <span key={index}>{date}</span>
                        ))}
                    </div>
                </div>

                {isModalWithdrawOpen && (
                    <BoosterModalWithdraw
                        isOpen={isModalWithdrawOpen}
                        onClose={() => setIsModalWithdrawOpen(false)}
                    />
                )}
                {isModalMyWithdrawOpen && (
                    <ModalMyWithdraw
                        isOpen={isModalMyWithdrawOpen}
                        onClose={() => setIsModalMyWithdrawOpen(false)}
                    />
                )}
            </div>
        </div>
    );
}
