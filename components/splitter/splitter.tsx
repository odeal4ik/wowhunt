import styles from './splitter.module.css';
import cn from 'classnames';
import { CSSProperties } from 'react';

export function Splitter({ title, style }: { title: string; style?: CSSProperties}) {
    return <div className={cn(styles.splitter)} style={style}>{title}</div>;
}
