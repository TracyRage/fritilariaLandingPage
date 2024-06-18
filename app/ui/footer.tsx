import Image from 'next/image';
import { NavLink3, NavLink4 } from './nav-links';

export default function Footer() {
    return (

        <div className='text-onBackground lg:container bg-background md:shadow-2xl shadow-2xl lg:px-8 px-4 py-10 rounded-[25px]'>
            <div className='flex flex-col space-y-4'>
                <div className="flex flex-row space-x-6 pb-3 justify-center">
                    <Image src="reddit.svg" width={25} height={10} alt="x" />
                    <Image src="x.svg" width={20} height={10} alt="x" />
                    <Image src="threads.svg" width={20} height={10} alt="x" />
                    <Image src="discord.svg" width={25} height={10} alt="x" />
                </div>
                <nav id='footNav'>
                    <div className='flex flex-col space-y-2 tracking-tight text-xs md:text-base md:tracking-normal'>
                        <NavLink3 />
                        <NavLink4 />
                    </div>
                </nav>
                <div className="flex flex-col space-y-2 tracking-tight md:tracking-normal">
                    <address>
                        <div className='flex flex-row items-baseline justify-center not-italic'>
                            <p className="hidden md:block text-center text-xs md:text-sm text-onBackground">Edineț, MD-4601, <span className='text-xl'>*Moldova*</span> </p>
                            <p className="block md:hidden text-center text-xs md:text-base text-onBackground">Edineț, MD-4601, Republic of Moldova</p>
                        </div>
                    </address>
                    <p className="text-center text-xs md:text-sm text-onBackground">@ 2024 Skidetica Labs. All rights Reserved</p>
                </div>
            </div>
        </div>

    );
}