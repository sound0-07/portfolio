import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './reset.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import ScrollToTopButton from '@/components/buttons/ScrollToTopButton';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Sound',
    template: '%s | Sound',
  },
  description: '개발자 한솔 포트폴리오입니다. 프론트엔드 분야에서 커리어를 다시 설계하고 있습니다. Next.js 기반의 프로젝트를 주로 진행하고 있으며, 더 나은 코드를 작성하기 위해 노력하고 있는 과정을 확인할 수 있습니다.',
  // 추후 색인 강화
  // robots: "index, follow",
  // openGraph: {
  //   title: 'Sound',
  //   description: '개발자 한솔 포트폴리오',
  //   type: 'website',
  //   url: 'https://sound0-07.github.io/portfolio/',
  //   siteName: '개발자 한솔의 포트폴리오',
  //   locale: 'ko_KR',
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ProgressBar />
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
