import { Header } from '@/components/header/header';
import { Breadcrumbs } from '@/components/breadcrumbs/breadcrumbs';
import { Sidebar } from '@/components/sidebar/sidebar';

import styles from './game-layout.module.css';
import { Carousel } from '@/components/carousel/carousel';
import { Splitter } from '@/components/splitter/splitter';
import { HowItWorks } from '@/components/how-it-works/how-it-works';
import { WhyUs } from '@/components/why-us/why-us';
import { Support } from '@/components/support/support';

export default function GameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header isBlured />

            <section className={styles.game}>
                <div className={styles.wrapper}>
                    <Sidebar />

                    <main className={styles.content}>
                        <Breadcrumbs />
                        {children}
                    </main>

                    <div className={styles.other}>
                        <Carousel />

                        <Splitter title="HOW IT WORKS" />

                        <HowItWorks />

                        <Splitter title="WHY CHOOSE US" />

                        <WhyUs />

                        <Splitter title="24/7 ONLINE SUPPORT" />

                        <Support />
                    </div>
                </div>
            </section>
        </>
    );
}
