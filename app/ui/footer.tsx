'use client';
import Image from 'next/image';
import { NavLink3, NavLink4 } from './nav-links';
import { useTheme } from './ThemeToggle';


export default function Footer() {

    const { isDarkTheme, toggleTheme } = useTheme();

    return (

        <div className='dark:text-md_theme_dark_onSurface text-md_theme_light_onSurface lg:container dark:bg-md_theme_dark_surface_lowest bg-md_theme_light_surface_lowest shadow-sm dark:shadow-sm shadow-md_theme_light_scrim lg:px-8 px-4 py-10 rounded-[25px]'>
            <div className='flex flex-col space-y-4'>
                <div className="flex flex-row space-x-6 pb-3 justify-center">
                    <Image src="reddit.svg" width={25} height={10} alt="Official Skidetica subreddit community" />
                    <Image src={isDarkTheme ? "x_dark.svg" : "x_light.svg"} width={20} height={10} alt="Official X (Twitter) page" />
                    <Image src={isDarkTheme ? "threads_dark.svg" : "threads_light.svg"} width={20} height={10} alt="Official Threads page" />
                    <Image src="discord.svg" width={25} height={10} alt="Official Discord channel" />
                </div>
                <nav id='footerNav'>
                    <div className='flex flex-col space-y-2 tracking-tight text-xs md:text-base md:tracking-normal'>
                        <NavLink3 />
                        <NavLink4 />
                    </div>
                </nav>
                <div className="flex flex-col space-y-2 tracking-tight md:tracking-normal">
                    <address id='skideticaCompanyAddress'>
                        <div className='flex flex-row items-baseline justify-center not-italic'>
                            <p className="hidden md:block text-center text-xs md:text-sm">Edineț, MD-4601, <span className='text-xl'>*Moldova*</span> </p>
                            <p className="block md:hidden text-center text-xs md:text-base">Edineț, MD-4601, Republic of Moldova</p>
                        </div>
                    </address>
                    <p className="text-center text-xs md:text-sm text-onBackground">@ 2024 Skidetica Labs. All rights Reserved</p>
                </div>
            </div>
        </div>

    );
}