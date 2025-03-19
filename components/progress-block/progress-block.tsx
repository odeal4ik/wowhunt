import Image, { StaticImageData } from 'next/image';

import ProgressBar from '../progress-bar/progress-bar';
import { ProgressBooster } from '../progress-booster/progress-booster';
import styles from './progress-block.module.css';

interface BaseProfileBlockProps {
    image: string | StaticImageData;
    title: string;
    description: string;
}

interface ProfileVariantProps extends BaseProfileBlockProps {
    variant: 'profile';
    progress: number;
}

interface BoosterVariantProps extends BaseProfileBlockProps {
    variant: 'booster';
    onClick: () => void;
}

type ProgressBlockProps = ProfileVariantProps | BoosterVariantProps;

export function ProgressBlock(props: ProgressBlockProps) {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <Image
                    src={props.image}
                    alt={props.title}
                    width={88}
                    height={72}
                    className={styles.imgLevel}
                />

                <div className={styles.wrapper}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.headerTitle}>{props.title}</h3>
                        {props.variant === 'booster' ? (
                            <ProgressBooster />
                        ) : null}
                    </div>

                    <p className={styles.headerProgress}>{props.description}</p>
                </div>
            </div>

            {props.variant === 'profile' ? (
                <ProgressBar progress={props.progress} />
            ) : (
                <button className={styles.button} onClick={props.onClick}>
                    Services that i can do
                </button>
            )}
        </div>
    );
}
