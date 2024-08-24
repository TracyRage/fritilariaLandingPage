import type { Metadata } from 'next';
import { onest } from '@/app/ui/fonts';
import './globals.css';
import { Summary } from './ui/Summary';
import Image from 'next/image';
import RenderFritilariaLogoColors from './ui/firitilariaLogoColors';
import Footer from './ui/footer';
import { ThemeProvider } from './ui/ThemeToggle';


export const metadata: Metadata = {
  /// add google code
  title: {
    default: 'Skidetic fundamental analysis for value investing',
    template: '%s | Fritilaria'
  },
  description: 'Transform your opinion into statistically accurate fundamental analysis. Skidetic statistical models for value investing. Fritilaria app.',
  keywords: 'skidetica, simulation packages, value investing simplified, modern dcf calculator, automatic fundamental analysis, find very cheap high value stock no geek stuff, little talked undervalued stocks, need for math and accounting in stock market, predict unknown market problems, financial modeling for dummies',
  metadataBase: new URL('https://fritilaria.com'),
  authors: [{ name: 'Skidetica Lab', url: 'https://fritilaria.com' },
  ],
  publisher: 'Skidetica Lab',
  alternates: {
    canonical: 'https://fritilaria.com'
  },
  openGraph: {
    type: 'website',
    title: 'Skidetic statistical models for value investing',
    description: 'Transform your opinion into statistically accurate fundamental analysis',
    url: 'https://fritilaria.com',
    images: [{
      url: 'https://rmhsfgybzskyoimjlpfe.supabase.co/storage/v1/object/public/logo/friti_logo_dark_cropped_og.png',
      alt: 'Fritilaria logo image'
    }]
  },
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },

  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${onest.className} antialiased`}>
        <div className='flex Parent bg-md_theme_light_surface text-md_theme_light_onSurface dark:bg-md_theme_dark_surface dark:text-md_theme_dark_onSurface'>
          <div className='flex w-screen h-fit px-3 py-4 lg:py-[40px] space-y-8 lg:space-y-0 lg:space-x-[70px] flex-col lg:flex-row justify-center'>
            <ThemeProvider>
            <Summary title='Skidetica' />
            <div className='flex flex-col space-y-10'>
            <main>
              <div>{children}</div>
            </main>
            <Footer/>
            </div>
            <RenderFritilariaLogoColors/>
            </ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
