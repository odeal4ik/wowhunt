import { useState } from 'react';
import styles from './input-slider.module.css';

export function InputSlider({
    defaultValue1,
    defaultValue2,
    min,
    max,
    id,
    name,
    onChange,
}: {
    defaultValue1: number;
    defaultValue2: number;
    min: number;
    max: number;
    id: string;
    name: string;
    onChange?: (value: number) => void;
}) {
    const percent = (num: number) =>
        Math.round(100 / (max - min)) * (num - min);

    const [value1, setValue1] = useState(percent(defaultValue1));
    const [value2, setValue2] = useState(percent(defaultValue2));

    const onLocalChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue1(percent(Number(e.target.value)));

        if (onChange) {
            onChange(Number(e.target.value));
        }
    };

    const onLocalChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue2(percent(Number(e.target.value)));

        if (onChange) {
            onChange(Number(e.target.value));
        }
    };
    return (
        <div
            className={styles.wrapper}
            style={
                {
                    '--_input-range-value-1': `${
                        value1 > value2 ? value2 : value1
                    }%`,
                    '--_input-range-value-2': `${
                        value1 > value2 ? value1 : value2
                    }%`,
                } as React.CSSProperties
            }>
            <input
                className={styles.slider}
                id={`${id}-1`}
                name={`${name}-1`}
                type="range"
                min={min}
                max={max}
                defaultValue={defaultValue1}
                onChange={onLocalChange1}
            />
            <input
                className={styles.slider}
                id={`${id}-2`}
                name={`${name}-2`}
                type="range"
                min={min}
                max={max}
                defaultValue={defaultValue2}
                onChange={onLocalChange2}
            />
        </div>
    );
}
