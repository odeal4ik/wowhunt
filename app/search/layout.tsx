import { Header } from '@/components/header/header';
import { Breadcrumbs } from '@/components/breadcrumbs/breadcrumbs';
import { Sidebar } from '@/components/sidebar/sidebar';

import styles from './search-layout.module.css';
import { Splitter } from '@/components/splitter/splitter';
import { Support } from '@/components/support/support';
import { NeedHelp } from '@/components/need-help/need-help';

export default function GameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header isBlured />

            <section className={styles.search}>
                <div className={styles.wrapper}>
                    <Sidebar />

                    <main className={styles.content}>
                        <Breadcrumbs />
                        {children}
                    </main>

                    <div className={styles.other}>
                        <NeedHelp />

                        <Splitter title="24/7 ONLINE SUPPORT" />

                        <Support />
                    </div>
                </div>
            </section>
        </>
    );
}
