import type { Metadata } from 'next';
import { roboto } from '@/app/ui/fonts';
import { onest } from '@/app/ui/fonts';
import './globals.css';
import { Summary } from './ui/Summary';
import Image from 'next/image';


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
      <body className={`${onest.className} antialiased`}>
        <div className='flex Parent bg-background'>
          <div className='flex w-screen min-h-screen px-3 py-4 lg:py-[40px] space-y-8 lg:space-y-0 lg:space-x-[70px] flex-col lg:flex-row justify-center'>
            <Summary title='Fritilaria' />
            <div>{children}</div>
            <div className='hidden lg:block'>
            <div className='flex flex-col w-[32px] h-fit bg-elevated3 space-y-2 shadow-md shadow-elevated2 pt-2'>
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
