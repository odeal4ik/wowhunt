import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const barlowSans = localFont({
    src: './fonts/Barlow/Barlow-Regular.ttf',
    variable: '--font-barlow-regular-sans',
    weight: '400',
});

const barlowBoldSans = localFont({
    src: './fonts/Barlow/Barlow-Bold.ttf',
    variable: '--font-barlow-bold-sans',
    weight: '700',
});

const montserratSans = localFont({
    src: './fonts/Montserrat/Montserrat-Bold.ttf',
    variable: '--font-montserrat-bold-sans',
    weight: '700',
});

export const metadata: Metadata = {
    title: 'Games Boosting Service - Buy Professional & 100% Safe Carry & Leveling Services - Wowhunt',
    description:
        'WoWHUNT is a leading professional game boosting services platform that offers best prices & customer-friendly 24/7 support. Check out our great deals now!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body
                className={`${barlowSans.variable} ${barlowBoldSans.variable} ${montserratSans.variable}`}>
                {children}
            </body>
        </html>
    );
}
