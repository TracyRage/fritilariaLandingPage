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
    template: '%s | Skidetica'
  },
  description: 'Transform your opinion into statistically accurate fundamental analysis. Skidetic statistical models for value investing. Skidetica app.',
  keywords: 'skidetica, simulation packages, value investing simplified, modern dcf calculator, automatic fundamental analysis',
  metadataBase: new URL('https://www.skidetica.com'),
  authors: [{ name: 'Skidetica Lab', url: 'https://www.skidetica.com' },
  ],
  publisher: 'Skidetica Lab',
  alternates: {
    canonical: 'https://www.skidetica.com'
  },
  openGraph: {
    type: 'website',
    title: 'Skidetic statistical models for value investing',
    description: 'Transform your opinion into statistically accurate fundamental analysis',
    url: 'https://www.skidetica.com',
    images: [{
      url: 'https://rmhsfgybzskyoimjlpfe.supabase.co/storage/v1/object/public/logo/friti_logo_dark_cropped_og.png',
      alt: 'Skidetica logo image'
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
    <html lang="en" className='dark'>
      <head>
        <title>Skidetica</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5KFDKZ4V');`,
          }}
        />
      </head>
      <body className={`${onest.className} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KFDKZ4V"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <div className='flex Parent bg-md_theme_light_surface text-md_theme_light_onSurface dark:bg-md_theme_dark_surface dark:text-md_theme_dark_onSurface'>
          <div className='flex w-screen min-h-screen px-3 py-4 lg:py-[40px] space-y-8 lg:space-y-0 lg:space-x-[70px] flex-col lg:flex-row justify-center'>
            <ThemeProvider>
              <Summary title='Skidetica' />
              <div className='flex flex-col space-y-10'>
                <main>
                  <div>{children}</div>
                </main>
                <Footer />
              </div>
              <RenderFritilariaLogoColors />
            </ThemeProvider>
          </div>
        </div>
      </body>

    </html>
  )
}
