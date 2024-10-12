import { Header } from '@/components/header/header';
import { HeroBlock } from '@/components/hero-block/hero-block';
import { Splitter } from '@/components/splitter/splitter';
import { GamesPlates } from '@/components/games-plates/games-plates';
import { GamesTabs } from '@/components/games-tabs/games-tabs';
import { Support } from '@/components/support/support';
import { WhyUs } from '@/components/why-us/why-us';
import { HowItWorks } from '@/components/how-it-works/how-it-works';

import styles from './page.module.css';

export default function Home() {
    return (
        <>
            <Header />

            <main className={styles.main}>
                <HeroBlock />

                <Splitter title="CHOOSE GAME" />

                <GamesPlates />

                <Splitter title="HOT OFFERS" />

                <GamesTabs />

                <Splitter title="HOW IT WORKS" />

                <HowItWorks />

                <Splitter title="WHY CHOOSE US" />

                <WhyUs />

                <Splitter title="24/7 ONLINE SUPPORT" />

                <Support />
            </main>

            <footer className={styles.footer}></footer>
        </>
    );
}
