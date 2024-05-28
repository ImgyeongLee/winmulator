import type { Metadata } from 'next';
import { Inter, VT323, Noto_Sans } from 'next/font/google';
import './globals.css';
import { cn } from './lib/utils';

const inter = Inter({ subsets: ['latin'] });

const xp = Noto_Sans({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Windows XP, 2000 and 7 emulator',
    description: 'Developed by Hla Htun and Imgyeong Lee',
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
