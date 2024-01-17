import  { Source_Serif_4 } from 'next/font/google';
import { Roboto } from 'next/font/google';

export const sourceSerif = Source_Serif_4({subsets: ['latin'], weight: ['300', '400', '500']});
export const roboto = Roboto({weight: ['100', '400', '500', '700'], subsets: ['latin']});