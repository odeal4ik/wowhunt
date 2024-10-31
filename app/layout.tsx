import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

const barlowSans = localFont({
    src: './fonts/Barlow/Barlow-Regular.ttf',
    variable: '--font-barlow-regular-sans',
    weight: '400',
});

const barlowMediumSans = localFont({
    src: './fonts/Barlow/Barlow-Medium.ttf',
    variable: '--font-barlow-medium-sans',
    weight: '500',
});

const barlowBoldSans = localFont({
    src: './fonts/Barlow/Barlow-Bold.ttf',
    variable: '--font-barlow-bold-sans',
    weight: '700',
});
const barlowExtraBoldSans = localFont({
    src: './fonts/Barlow/Barlow-ExtraBold.ttf',
    variable: '--font-barlow-extra-bold-sans',
    weight: '800',
});

const montserratBoldSans = localFont({
    src: './fonts/Montserrat/Montserrat-Bold.ttf',
    variable: '--font-montserrat-bold-sans',
    weight: '700',
});
const montserratSans = localFont({
    src: './fonts/Montserrat/Montserrat-Regular.ttf',
    variable: '--font-montserrat-sans',
    weight: '400',
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
                className={`${barlowSans.variable} ${barlowMediumSans.variable} ${barlowBoldSans.variable} ${montserratBoldSans.variable} ${montserratSans.variable} ${barlowExtraBoldSans.variable}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
