import  { Source_Serif_4 } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Onest } from 'next/font/google';

export const sourceSerif = Source_Serif_4({subsets: ['latin'], weight: ['300', '400', '500']});
export const roboto = Roboto({weight: ['100', '400', '500', '700'], subsets: ['latin']});
export const onest = Onest({weight: ['100', '200', '400', '500', '700'], style: ['normal'], subsets: ['latin-ext']});