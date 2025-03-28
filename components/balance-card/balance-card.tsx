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

import { useGetUserTrands } from '@/queries/balance/getTrand';

import { BalanceChart } from '../balance-chart/balance-chart';
import BoosterModalWithdraw from '../modal-withdraw/modal-withdraw';
import ModalMyWithdraw from '../model-my-withdraw/model-my-withdraw';
import styles from './balance-card.module.css';
import { calculateDate } from './utils';

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
);

interface BalanceCardProps {
    balance: string;
    balanceTitle: string;
    lastOrder?: number;
    lastOrderTitle?: string;
    isIncreasingLastOrder?: boolean;
    buttonsReports?: boolean;
    rowDataPoints: number[];
    isBalance?: boolean;
}

export function BalanceCard({
    balance,
    balanceTitle,
    lastOrder,
    lastOrderTitle = 'Last order',
    isIncreasingLastOrder = true,
    buttonsReports = true,
    rowDataPoints,
    isBalance = false,
}: BalanceCardProps) {
    const [isModalWithdrawOpen, setIsModalWithdrawOpen] = useState(false);
    const [isModalMyWithdrawOpen, setIsModalMyWithdrawOpen] = useState(false);

    const [integerNumber, decimalNumber] = balance.split('.');

    const dates = [
        calculateDate(0),
        calculateDate(14),
        calculateDate(28),
    ].reverse();

    const startChartColor = isBalance ? '#d203fa' : '#0cc9eb';
    const endChartColor = isBalance ? '#e44803' : '#6405e9';
    const startBgColor = isBalance
        ? 'rgb(144, 1, 173, 0)'
        : 'rgb(12, 201, 235, 0)';
    const endBgColor = isBalance ? 'rgb(233, 74, 5, 1)' : 'rgb(100, 5, 233, 1)';

    const { data } = useGetUserTrands(isBalance ? 'balance' : 'spend');

    console.log(data);

    return (
        <div
            className={styles.wrapper}
            style={
                {
                    '--custom-start-color': startBgColor,
                    '--custom-end-color': endBgColor,
                } as React.CSSProperties
            }>
            <div className={styles.container}>
                <div className={styles.containerBalance}>
                    <div className={styles.wrapperBalance}>
                        <div className={styles.headerContainer}>
                            <h2 className={styles.title}>{balanceTitle}</h2>

                            <div className={styles.balance}>
                                <span className={styles.currencySymbol}>$</span>
                                <span className={styles.integerNumber}>
                                    {integerNumber}
                                </span>
                                <span className={styles.decimalNumber}>
                                    ,{decimalNumber}
                                </span>

                                {/* TODO calculate a trend  */}
                                <Icon svg={ArrowUp} label="ArrowUp" />
                            </div>
                        </div>

                        {lastOrder && (
                            <div className={styles.headerContainer}>
                                <h2 className={styles.title}>
                                    {lastOrderTitle}
                                </h2>

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
                                        <Icon svg={ArrowUp} label="ArrowUp" />
                                    )}
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
                        startColor={startChartColor}
                        endColor={endChartColor}
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
