'use client';

import styles from './404.module.css';
import Image from 'next/image';
import Link from 'next/link';

export function ErrorPage() {
    return (
        <div className={styles.container}>
            <Image
                src="/images/404.png"
                alt="404 Error Illustration"
                width={820}
                height={780}
                priority
                className={styles.image}
            />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    404
                    <br />
                    ERROR
                </h1>
                <p className={styles.descriptionMain}>
                    We couldn’t find this page.
                </p>
                <p className={styles.descriptionSecond}>
                    Maybe its out there, somewhere...
                </p>
                <p className={styles.descriptionSecond}>
                    You can always back in our{' '}
                    <span>
                        <Link href="/" className={styles.link}>
                            homepage
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    );
}
