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
        <div className='min-h-screen p-4 text-white min-w-screen lg:py-12 lg:px-4 md:p-10 Parent bg-background'>

          <div className='flex md:flex-row flex-col lg:m-[4px] space-y-[25px] lg:space-x-[30px] md:space-y-[0px] justify-center'>
            <Summary title='Fritilaria' />
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>

  )
}
