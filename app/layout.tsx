import type { Metadata } from 'next';
import { roboto } from '@/app/ui/fonts';
import { onest } from '@/app/ui/fonts';
import './globals.css';
import { Summary } from './ui/Summary';
import Image from 'next/image';


export const metadata: Metadata = {
  /// add google code
  title: {
    default: 'Fritilaria - Skidetic fundamental analysis',
    template: '%s | Fritilaria - Skidetic fundamental analysis'},
  description: 'Transform your opinion into statistically accurate fundamental analysis. Skidetic statistical models for value investing. Fritilaria app.',
  keywords: 'fritilaria, skidetic, fundamental analysis, fundamental, statistics, analysis, statistical model, fundamental model, value, investing, value investing, app, application, forecast, stocks, company',
  metadataBase: new URL('https://fritilaria.com'),
  authors: [{name: 'Skidetica Lab', url: 'https://fritilaria.com'},
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
        <div className='flex Parent bg-elevated4'>
          <div className='flex w-screen min-h-screen px-3 py-4 lg:py-[40px] space-y-8 lg:space-y-0 lg:space-x-[70px] flex-col lg:flex-row justify-center'>
            <Summary title='Fritilaria' />
            <div>{children}</div>
            <div className='hidden lg:block'>
            <div className='flex flex-col w-[32px] h-fit bg-elevated3 md:black space-y-2 shadow-md shadow-elevated2 pt-2'>
              <Image alt={''} width={45} height={20} src={"fritilaria_white.svg"}/>
              <Image alt={''} width={45} height={20} src={"fritilaria_pink.svg"}/>
              <Image alt={''} width={45} height={20} src={"fritilaria_red.svg"}/>
              <Image alt={''} width={45} height={20} src={"fritilaria_green.svg"}/>
            </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
