import { Header } from '@/components/header/header';

export default function GameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header isBlured />

            <section style={{ paddingBlockStart: 200 }}>
                <>
                    TEST
                    {children}
                </>
            </section>
        </>
    );
}
