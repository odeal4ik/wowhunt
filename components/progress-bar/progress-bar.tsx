import styles from './progress-bar.module.css';

interface ProgressBarProps {
    progress: number;
}

const START_COLOR = '#d84221';
const END_COLOR = '#e1d74c';

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : { r: 0, g: 0, b: 0 };
};

const getColorAtPosition = (position: number, currentProgress: number) => {
    const startColor = hexToRgb(START_COLOR);
    const endColor = hexToRgb(END_COLOR);

    const normalizedPosition = position / currentProgress;

    return `rgb(
        ${Math.round(startColor.r + (endColor.r - startColor.r) * normalizedPosition)},
        ${Math.round(startColor.g + (endColor.g - startColor.g) * normalizedPosition)},
        ${Math.round(startColor.b + (endColor.b - startColor.b) * normalizedPosition)}
    )`;
};

export default function ProgressBar({ progress }: ProgressBarProps) {
    const currentProgress = Math.min(Math.max(progress, 0), 100);
    const effectiveWidth = Math.min(currentProgress + 2, 100);

    return (
        <div className={styles.progressContainer}>
            <div className={styles.percentages}>
                <span
                    className={`${styles.progressText} ${styles.progressBarText}`}>
                    10%
                </span>
                <span
                    className={`${styles.progressText} ${styles.progressBarText}`}>
                    30%
                </span>
                <span
                    className={`${styles.progressText} ${styles.progressBarText}`}>
                    50%
                </span>
                <span
                    className={`${styles.progressText} ${styles.progressBarText}`}>
                    70%
                </span>
                <span
                    className={`${styles.progressText} ${styles.progressBarText}`}>
                    90%
                </span>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.progressBarMarkers}>
                    {[10, 30, 50, 70, 90].map(
                        (percent) =>
                            percent <= currentProgress && (
                                <div
                                    key={percent}
                                    className={styles.progressBarMarker}
                                    style={{
                                        left: `${percent}%`,
                                        borderBottomColor: getColorAtPosition(
                                            percent,
                                            currentProgress,
                                        ),
                                    }}
                                />
                            ),
                    )}
                </div>
                <div className={styles.progressTrack}>
                    <div
                        className={styles.progressLine}
                        style={{ width: `${effectiveWidth}%` }}
                    />
                </div>
            </div>
            <div className={styles.progressBarLabels}>
                <p className={styles.progressBarText}>Beginner</p>
                <p className={styles.progressBarText}>Gamer</p>
            </div>
        </div>
    );
}
