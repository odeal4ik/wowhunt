'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icon } from '@/core-components/icon/icon';
import Caret from '@/images/icons/caret.svg';

import styles from './breadcrumbs.module.css';
import { Fragment } from 'react';

export function Breadcrumbs() {
    const pathname = usePathname();

    const pathParts = pathname
        .split('/')
        .filter(Boolean)
        .map((url) => ({
            url,
            label:
                url.charAt(0).toUpperCase() + url.slice(1).replace(/-/g, ' '),
        }));

    return (
        <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            {pathParts.map(({ url, label }) => (
                <Fragment key={url}>
                    <Icon svg={Caret} fill="#9f9fb7" />
                    <Link href={`/${url}`}>{label}</Link>
                </Fragment>
            ))}
        </div>
    );
}
