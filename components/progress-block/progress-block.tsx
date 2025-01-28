import Image from 'next/image';
import styles from './progress-block.module.css';
import ProgressBar from '../progress-bar/progress-bar';

interface ProgressBlockProps {
    progress: number;
    image: string;
    title: string;
}

export function ProgressBlock({ progress, image, title }: ProgressBlockProps) {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <Image
                    src={image}
                    alt={title}
                    width={88}
                    height={72}
                    className={styles.imgLevel}
                />
                <div>
                    <h3 className={styles.headerTitle}>{title}</h3>
                    <p className={styles.headerProgress}>
                        Your progress is the amount accumulated through your
                        purchases, make them to get more rewards.
                    </p>
                </div>
            </div>
            <ProgressBar progress={progress} />
        </div>
    );
}
