import { Breadcrumbs } from '@/components/breadcrumbs/breadcrumbs';
import { Carousel } from '@/components/carousel/carousel';
import { Header } from '@/components/header/header';
import { HowItWorks } from '@/components/how-it-works/how-it-works';
import { Sidebar } from '@/components/sidebar/sidebar';
import { Splitter } from '@/components/splitter/splitter';
import { Support } from '@/components/support/support';
import { WhyUsSection } from '@/components/why-us-section/why-us-section';

import styles from './game-layout.module.css';

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
                    <div className={styles.sidebar}>
                        <Sidebar />
                    </div>

                    <main className={styles.content}>
                        <Breadcrumbs />
                        {children}
                    </main>

                    <div className={styles.other}>
                        <Carousel />

                        <Splitter title="HOW IT WORKS" />

                        <HowItWorks />

                        <Splitter title="WHY CHOOSE US" />

                        <WhyUsSection />

                        <Splitter title="24/7 ONLINE SUPPORT" />

                        <Support />
                    </div>
                </div>
            </section>
        </>
    );
}
