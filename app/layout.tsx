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
        <div className='flex Parent bg-background'>
          <div className='flex w-screen min-h-screen px-3 py-4 lg:py-[40px] space-y-8 lg:space-y-0 lg:space-x-[50px] flex-col lg:flex-row justify-center'>
            <Summary title='Fritilaria' />
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>

  )
}
