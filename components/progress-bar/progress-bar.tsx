import styles from './progress-bar.module.css';

// start {r: 216, g: 66, b: 33} '#d84221'
// end {r: 225, g: 215, b: 76} '#e1d74c'

const startColor = { r: 216, g: 66, b: 33 };
const endColor = { r: 225, g: 215, b: 76 };

const getColorAtPosition = ({
    currentPosition,
}: {
    currentPosition: number;
}): string => {
    return `rgb(
        ${Math.round(startColor.r + (endColor.r - startColor.r) * currentPosition)},
        ${Math.round(startColor.g + (endColor.g - startColor.g) * currentPosition)},
        ${Math.round(startColor.b + (endColor.b - startColor.b) * currentPosition)}
    )`;
};

const scales = [10, 30, 50, 70, 90];

export default function ProgressBar({ progress }: { progress: number }) {
    const currentProgress: number = Math.min(Math.max(progress, 0), 100);
    const effectiveWidth: number = Math.min(currentProgress + 2, 100);
    const progressScales: number[] = scales.filter(
        (scale) => scale <= currentProgress,
    );

    return (
        <div className={styles.progress}>
            <div className={styles.percentages}>
                {scales.map((scale) => (
                    <span key={scale} className={styles.text}>
                        {String(scale)}%
                    </span>
                ))}
            </div>

            <div className={styles.bar}>
                <div className={styles.markers}>
                    {progressScales.map((scale) => (
                        <div
                            key={scale}
                            className={styles.marker}
                            style={{
                                left: `${scale}%`,
                                backgroundColor: getColorAtPosition({
                                    currentPosition: scale / currentProgress,
                                }),
                            }}
                        />
                    ))}
                </div>

                <div className={styles.track}>
                    <div
                        className={styles.line}
                        style={{ width: `${effectiveWidth}%` }}
                    />
                </div>
            </div>

            <div className={styles.labels}>
                <p className={styles.level}>Beginner</p>
                <p className={styles.level}>Gamer</p>
            </div>
        </div>
    );
}
