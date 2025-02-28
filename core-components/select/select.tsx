import cn from 'classnames';
import { useEffect, useState } from 'react';

import { Icon } from '@/core-components/icon/icon';

import Chevron from '@/images/system-icons/arrow-сhevron.svg';

import styles from './select.module.css';

interface SelectProps {
    title?: string;
    options: string[];
    titleStyle?: string;
    optionsStyle?: string;
}

export function Select({
    title,
    options = [],
    optionsStyle,
    titleStyle,
}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(title || options?.[0] || '');

    useEffect(() => {
        setSelected(title || options?.[0] || '');
    }, [title, options]);

    return (
        <div
            className={cn(styles.wrapper, optionsStyle)}
            tabIndex={0}
            onBlur={() => setIsOpen(false)}>
            <div
                className={cn(styles.label, titleStyle, {
                    [styles.open]: isOpen,
                })}
                role="button"
                onClick={() => setIsOpen(!isOpen)}>
                {selected}
                <Icon svg={Chevron} fill="#858FA3" />
            </div>
            {isOpen && options && (
                <ul className={styles.list}>
                    {options.map((option, index) => (
                        <li
                            className={cn(styles.item, {
                                [styles.selected]: selected === option,
                            })}
                            key={index}
                            onClick={() => {
                                setSelected(
                                    selected === option
                                        ? title || options[0]
                                        : option,
                                );
                                setIsOpen(false);
                            }}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
