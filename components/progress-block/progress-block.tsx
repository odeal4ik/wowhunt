import ProgressBar from '../progress-bar/progress-bar';
import { ProgressBooster } from '../progress-booster/progress-booster';
import { ProgressImage } from '../progress-image';
import styles from './progress-block.module.css';

interface BaseProfileBlockProps {
    title: string;
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

export function ProgressBlock({
    description,
    level,
    title,
    variant,
    ...props
}: ProgressBlockProps) {
    const isBooster = variant === 'booster';

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.level}>
                    {isBooster ? (
                        <ProgressImage level={level} isBooster />
                    ) : (
                        <ProgressImage level={1} isBooster={false} />
                    )}
                </div>

                <div className={styles.text}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.title}>{title}</h3>
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
