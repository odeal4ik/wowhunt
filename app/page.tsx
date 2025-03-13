import { Carousel } from '@/components/carousel/carousel';
import { GamesPlates } from '@/components/games-plates/games-plates';
import { GamesTabs } from '@/components/games-tabs/games-tabs';
import { Header } from '@/components/header/header';
import { HeroBlock } from '@/components/hero-block/hero-block';
import { HowItWorks } from '@/components/how-it-works/how-it-works';
import { Splitter } from '@/components/splitter/splitter';
import { Support } from '@/components/support/support';
import { WhyUsSection } from '@/components/why-us-section/why-us-section';

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <HeroBlock />

                <Splitter title="CHOOSE GAME" />

                <GamesPlates />

                <Splitter title="HOT OFFERS" />

                <GamesTabs />

                <Carousel />

                <Splitter title="HOW IT WORKS" />

                <HowItWorks />

                <Splitter title="WHY CHOOSE US" />

                <WhyUsSection />

                <Splitter title="24/7 ONLINE SUPPORT" />

                <Support />
            </main>
        </>
    );
}
