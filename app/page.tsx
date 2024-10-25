import { Header } from '@/components/header/header';
import { HeroBlock } from '@/components/hero-block/hero-block';
// import { Splitter } from '@/components/splitter/splitter';
// import { GamesPlates } from '@/components/games-plates/games-plates';
// import { GamesTabs } from '@/components/games-tabs/games-tabs';
// import { Support } from '@/components/support/support';
// import { WhyUs } from '@/components/why-us/why-us';
// import { HowItWorks } from '@/components/how-it-works/how-it-works';
// import { Carousel } from '@/components/carousel/carousel';
import { Footer } from '@/components/footer/footer';

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <HeroBlock />

                {/* <Splitter title="CHOOSE GAME" />

                <GamesPlates />

                <Splitter title="HOT OFFERS" />

                <GamesTabs />

                <Carousel />

                <Splitter title="HOW IT WORKS" />

                <HowItWorks />

                <Splitter title="WHY CHOOSE US" />

                <WhyUs />

                <Splitter title="24/7 ONLINE SUPPORT" />

                <Support /> */}
            </main>

            <Footer />
        </>
    );
}
