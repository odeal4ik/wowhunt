import { HeroBlock } from '@/components/hero-block/hero-block';
import { Splitter } from '@/components/splitter/splitter';
import { GamesPlates } from '@/components/games-plates/games-plates';
import { GamesTabs } from '@/components/games-tabs/games-tabs';
import { Carousel } from '@/components/carousel/carousel';
import { HowItWorks } from '@/components/how-it-works/how-it-works';
import { Support } from '@/components/support/support';
import { Header } from '@/components/header/header';
import { WhyUsSection } from '@/components/why-us-section/why-us-section';

export default function Home() {
    // try {
    //     // ../routes/api.php
    //     const res = await fetch(`${process.env.APP_URL}/api/games/get`);
    //     const data = await res.json();
    //     console.log(data);
    // } catch (e) {
    //     console.error(e);
    // }

    // Access the client
    // const queryClient = useQueryClient();
    // Queries
    // const query = useQuery({
    //     queryKey: ['games'],
    //     queryFn: () => fetch(`${process.env.APP_URL}/api/games/get`),
    // });

    // console.log(query);

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
};
