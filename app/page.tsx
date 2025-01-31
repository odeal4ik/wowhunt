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
            </main>
        </>
    );
}
