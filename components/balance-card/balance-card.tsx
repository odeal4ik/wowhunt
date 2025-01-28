import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import React, { useMemo } from 'react';
import { BalanceChart } from '../balance-chart/balance-chart';
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

interface BalanceCardProps {
    balance: number;
    isIncreasing?: boolean;
    title: string;
    startColor: string;
    endColor: string;
    rowDataPoints: number[];
}

export function BalanceCard({
    balance,
    isIncreasing = true,
    title,
    startColor,
    endColor,
    rowDataPoints,
}: BalanceCardProps) {
    const formattedBalance = balance.toFixed(3);
    const [integerNumber, decimalNumber] = formattedBalance.split('.');

    const dates = useMemo(() => {
        const colculateDate = (daysAgo: number) => {
            const date = new Date();
            date.setDate(date.getUTCDate() - daysAgo);
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            return `${day}.${month}`;
        };

        return [
            colculateDate(0),
            colculateDate(14),
            colculateDate(28),
        ].reverse();
    }, []);

    return (
        <div
            className={styles.container}
            style={
                {
                    '--custom-start-color': startColor,
                    '--custom-end-color': endColor,
                } as React.CSSProperties
            }>
            <div className={styles.headerContainer}>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div>
                <div className={styles.balance}>
                    <span className={styles.currencySymbol}>$</span>
                    <span className={styles.integerNumber}>
                        {integerNumber}
                    </span>
                    <span className={styles.decimalNumber}>
                        ,{decimalNumber}
                    </span>
                    {isIncreasing && (
                        <img
                            src="/system-icons/arrow-up.svg"
                            alt="Increasing"
                            width={24}
                            height={24}
                            className={styles.arrow}
                        />
                    )}
                </div>
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
        </div>
    );
}
