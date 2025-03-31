import { CSSProperties } from 'react';

import ProgressBar from '../progress-bar/progress-bar';
import { ProgressBooster } from '../progress-booster/progress-booster';
import { ProgressImage } from '../progress-image';
import styles from './progress-block.module.css';

interface BaseProfileBlockProps {
    description: string;
}

interface ProfileVariantProps extends BaseProfileBlockProps {
    variant: 'profile';
    level: 1 | 2 | 3 | 4 | 5;
}

interface BoosterVariantProps extends BaseProfileBlockProps {
    variant: 'booster';
    level: 1 | 2 | 3;
    onClick: () => void;
}

type ProgressBlockProps = ProfileVariantProps | BoosterVariantProps;

const levelColor = {
    1: '#d1a66e',
    2: '#8aa8b5',
    3: '#f07e00',
    4: '#0078f0',
    5: '#ff8d80',
};

const levelBoosterTitle = {
    1: 'Young Booster',
    2: 'Regular Booster',
    3: 'Main Booster',
};

const levelCustomerTitle = {
    1: 'New',
    2: 'Beginner',
    3: 'Active',
    4: 'Loyal',
    5: 'King',
};

export function ProgressBlock({
    description,
    level,
    variant,
    ...props
}: ProgressBlockProps) {
    const isBooster = variant === 'booster';

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div
                    className={styles.level}
                    style={
                        {
                            '--level-bg-color': levelColor[level],
                        } as CSSProperties
                    }>
                    {isBooster ? (
                        <ProgressImage
                            key={'booster'}
                            level={level}
                            isBooster
                        />
                    ) : (
                        <ProgressImage
                            key={'customer'}
                            level={level}
                            isBooster={false}
                        />
                    )}
                </div>

                <div className={styles.text}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.title}>
                            {isBooster
                                ? levelBoosterTitle[level]
                                : levelCustomerTitle[level]}
                        </h3>
                        {isBooster ? <ProgressBooster /> : null}
                    </div>

                    <p className={styles.description}>{description}</p>
                </div>
            </div>

            {!isBooster ? <ProgressBar progress={level * 20} /> : null}

            {'onClick' in props ? (
                <button className={styles.button} onClick={props.onClick}>
                    Services that i can do
                </button>
            ) : null}
        </div>
    );
}
