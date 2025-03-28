import { Chart as ChartJS, ChartOptions, TooltipItem } from 'chart.js';
import { useRef } from 'react';
import { Line } from 'react-chartjs-2';

import { calculateDate } from '../balance-card/utils';
import styles from './balance-chart.module.css';

interface BalanceChartProps {
    rowDataPoints: number[];
    startColor: string;
    endColor: string;
}

interface ScriptableContext {
    chart: ChartJS;
}

export function BalanceChart({
    rowDataPoints,
    startColor,
    endColor,
}: BalanceChartProps) {
    const chartRef = useRef<ChartJS<'line'>>(null);

    const labels = [
        calculateDate(30),
        calculateDate(25),
        calculateDate(20),
        calculateDate(15),
        calculateDate(10),
        calculateDate(5),
        calculateDate(0),
    ];

    const maxValue = Math.max(...rowDataPoints);
    const minValue = Math.min(...rowDataPoints);
    const padding = (maxValue - minValue) * 0.1;
    const yMin = minValue === maxValue ? minValue - 1 : minValue - padding;
    const yMax = minValue === maxValue ? maxValue + 1 : maxValue + padding;

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
            y: {
                display: false,
                grid: {
                    display: false,
                },
                min: yMin,
                max: yMax,
                ticks: {
                    stepSize: 1,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                displayColors: false,
                backgroundColor: '#171728',
                titleColor: '#9F9FB7',
                bodyColor: '#fff',
                titleFont: {
                    size: 12,
                },
                bodyFont: {
                    size: 14,
                },
                padding: {
                    top: 8,
                    right: 12,
                    bottom: 8,
                    left: 12,
                },
                callbacks: {
                    title: function () {
                        return '';
                    },
                    label: function (context: TooltipItem<'line'>) {
                        return context.raw as string;
                    },
                },
            },
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
    };

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Balance',
                data: rowDataPoints,
                borderWidth: 7,
                tension: 0.4,
                borderColor: function (context: ScriptableContext) {
                    const {
                        chart: { ctx, chartArea },
                    } = context;

                    if (!chartArea) {
                        return startColor;
                    }

                    let width, height, gradient;
                    const chartWidth = chartArea.right - chartArea.left;
                    const chartHeight = chartArea.bottom - chartArea.top;

                    if (
                        !gradient ||
                        width !== chartWidth ||
                        height !== chartHeight
                    ) {
                        // Create the gradient because this is either the first render
                        // or the size of the chart has changed
                        width = chartWidth;
                        height = chartHeight;
                        gradient = ctx.createLinearGradient(
                            0,
                            chartArea.bottom,
                            0,
                            chartArea.top,
                        );
                        gradient.addColorStop(0, startColor);
                        gradient.addColorStop(1, endColor);
                    }

                    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
                    ctx.shadowBlur = 5;
                    ctx.shadowOffsetX = 5;
                    ctx.shadowOffsetY = 30;

                    return gradient;
                },
                fill: false,
                pointRadius: 0,
            },
        ],
    };

    return (
        <div className={styles.chartContainer}>
            <Line ref={chartRef} data={chartData} options={options} />
        </div>
    );
}
