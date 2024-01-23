import type { Metadata } from 'next';
import { roboto } from '@/app/ui/fonts';
import './globals.css';
import { Summary } from './ui/Summary';


export const metadata: Metadata = {
  title: 'Fritilaria - Skidetic fundamental analysis',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${roboto.className} antialiased'}>
        <div className='min-h-screen min-w-screen text-white lg:p-12 md:p-10 p-4 Parent bg-background'>

          <div className='flex lg:flex-row flex-col lg:mx-[80px] space-y-[24px] lg:space-x-[54px] lg:space-y-[0px] justify-center'>
            <Summary title='Fritilaria' />
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>

  )
}
