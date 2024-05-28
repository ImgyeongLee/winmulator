import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import { cn } from './lib/utils';

const xp = Noto_Sans({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Winmulator',
    description: 'Windows XP, 2000 and 7 emulator. Developed by Hla Htun and Imgyeong Lee',
};

// redux provider
import StoreProvider from '@/app/StoreProvider';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider>
            <html lang="en">
                <body className={cn(xp.className, 'overflow-hidden')}>{children}</body>
            </html>
        </StoreProvider>
    );
}
