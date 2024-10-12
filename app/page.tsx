import { Header } from '@/components/header/header';
import { HeroBlock } from '@/components/hero-block/hero-block';
import { Splitter } from '@/components/splitter/splitter';

import styles from './page.module.css';

export default function Home() {
    return (
        <>
            <Header />

            <main className={styles.main}>
                <HeroBlock />
                <Splitter title="CHOOSE GAME" />
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    iste praesentium blanditiis exercitationem ratione ducimus
                    qui temporibus, molestiae nulla deleniti. Quia illo numquam
                    rerum deserunt soluta impedit, iste perferendis totam?
                </div>
                <Splitter title="HOT OFFERS" />
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    iste praesentium blanditiis exercitationem ratione ducimus
                    qui temporibus, molestiae nulla deleniti. Quia illo numquam
                    rerum deserunt soluta impedit, iste perferendis totam?
                </div>
                <Splitter title="HOW IT WORKS" />
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    iste praesentium blanditiis exercitationem ratione ducimus
                    qui temporibus, molestiae nulla deleniti. Quia illo numquam
                    rerum deserunt soluta impedit, iste perferendis totam?
                </div>
                <Splitter title="WHY CHOOSE US" />
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    iste praesentium blanditiis exercitationem ratione ducimus
                    qui temporibus, molestiae nulla deleniti. Quia illo numquam
                    rerum deserunt soluta impedit, iste perferendis totam?
                </div>
                <Splitter title="24/7 ONLINE SUPPORT" />
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    iste praesentium blanditiis exercitationem ratione ducimus
                    qui temporibus, molestiae nulla deleniti. Quia illo numquam
                    rerum deserunt soluta impedit, iste perferendis totam?
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </>
    );
}
