import { Header } from '@/components/header/header';
import { Breadcrumbs } from '@/components/breadcrumbs/breadcrumbs';
import { Sidebar } from '@/components/sidebar/sidebar';

import styles from './game-layout.module.css';
import { Carousel } from '@/components/carousel/carousel';
import { Splitter } from '@/components/splitter/splitter';
import { HowItWorks } from '@/components/how-it-works/how-it-works';
import { Support } from '@/components/support/support';
import { WhyUsSection } from '@/components/why-us-section/why-us-section';

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

                        <WhyUsSection
                            variant="default"
                            image={{
                                src: '/images/whyus.png',
                                alt: 'whyus',
                            }}
                            items={[
                                {
                                    icon: '/system-icons/writting.svg',
                                    alt: 'Why us 1',
                                    title: 'ONLINE 24/7',
                                    text: 'You can always ask any question to our operators in live chat.',
                                },
                                {
                                    icon: '/system-icons/time.svg',
                                    alt: 'Why us 2',
                                    title: 'FAST DELIVERY',
                                    text: 'We will contact you and start working on your order within 5 minutes.',
                                },
                                {
                                    icon: '/system-icons/star.svg',
                                    alt: 'Why us 3',
                                    title: 'WE ARE TRUSTED',
                                    text: 'We are working in the boost industry since 2011. You can read reviews about us on trustpilot',
                                },
                            ]}
                        />

                        <Splitter title="24/7 ONLINE SUPPORT" />

                        <Support />
                    </div>
                </div>
            </section>
        </>
    );
}
