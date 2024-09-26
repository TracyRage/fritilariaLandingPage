'use client';
import { sourceSerif } from "@/app/ui/fonts";
import Image from 'next/image';
import RenderDensityGraph from '@/app/ui/RenderDensityGraph'
import { NavLink, NavLink2 } from "./nav-links";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeToggle";


export function Summary({
    title,
}: {
    title: string;
}) {
    const MarkIcon = XMarkIcon;

    const [isMenuOpen, setMenuOpen] = useState(false);


    const { isDarkTheme, toggleTheme } = useTheme();




    return (


        <section id="skideticaAppSummary">

            <div role="banner" className='flex flex-col h-fit min-w-screen rounded-[25px] lg:w-[300px] xl:w-[380px] border-primary md:py-6 pb-2 pt-4 shadow-md dark:shadow-lg shadow-md_theme_dark_scrim bg-md_theme_light_surface_lowest dark:bg-md_theme_dark_surface_lowest'>

                <div className="flex flex-col px-5 lg:px-6 pb-2">

                    <div className="flex flex-row justify-between items-center">

                        <div className="flex flex-row space-x-4 items-center place-content-baseline">
                            <div className="dark:text-md_theme_dark_onSurface text-md_theme_light_onSurface text-2xl md:text-3xl pb-6 tracking-tight">
                                <Link href={"/"}>
                                    <h1 className={`${sourceSerif.className}`}>
                                        {title}
                                    </h1>
                                </Link>
                            </div>

                            <div id="Main page" className="w-[44px] pb-6 block md:hidden">
                                <Link href={"/"}>
                                    <RenderDensityGraph pathname={isDarkTheme ? './animation/logo/fritilaria_logo_dark.json' : './animation/logo/fritilaria_logo_light.json'} loop={true} />
                                </Link>
                            </div>
                        </div>

                        <div className="flex pb-6">
                                <button
                                id="Theme switch"
                                    onClick={toggleTheme}>
                                    {isDarkTheme ? <SunIcon className="w-[32px] dark:text-md_theme_dark_onSurface" /> : <MoonIcon className="w-[32px] text-md_theme_light_onSurface" />}
                                </button>

                        </div>
                        <div className="block md:hidden">
                            <button id="mobileMenu" className="flex pb-6" onClick={() => setMenuOpen(!isMenuOpen)}>
                                {!isMenuOpen ? <Bars3Icon className="w-[32px] dark:text-md_theme_light_onPrimary text-md_theme_dark_onPrimary" /> : <MarkIcon className="w-[32px] dark:text-md_theme_light_onPrimary text-md_theme_dark_onPrimary" />}
                            </button>
                            {
                                isMenuOpen &&
                                <nav id="mobileNavBar">
                                    <div className={`${sourceSerif.className} z-10 w-10/12 h-fit p-4 absolute right-[20px] dark:text-md_theme_dark_onSurface dark:bg-md_theme_dark_surface_container text-md_theme_light_onSurface bg-md_theme_light_surface_container rounded-2xl shadow-xl shadow-md_theme_dark_scrim`}>
                                        <div className="flex flex-col space-y-4 p-4 items-center text-xl">
                                            <Link key={'Guide'} href={'/'} onClick={() => setMenuOpen(!isMenuOpen)}>Home</Link>
                                            <Link key={'Manifesto'} href={'/manifesto'} onClick={() => setMenuOpen(!isMenuOpen)}>Manifesto</Link>
                                            <Link key={'FAQ'} href={'/faq'} onClick={() => setMenuOpen(!isMenuOpen)}>FAQ</Link>
                                            <Link key={'Contact us'} href={'/contact-us'} onClick={() => setMenuOpen(!isMenuOpen)}>Contact us</Link>
                                            <Link key={'About us'} href={'/company'} onClick={() => setMenuOpen(!isMenuOpen)}>About us</Link>
                                            <Link key={'Terms & Conditions'} href={'/terms'} onClick={() => setMenuOpen(!isMenuOpen)}>Terms & Conditions</Link>
                                            <Link key={'Privacy policy'} href={'/privacy'} onClick={() => setMenuOpen(!isMenuOpen)}>Privacy policy</Link>
                                        </div>

                                    </div>
                                </nav>
                            }

                        </div>


                    </div>

                    <div className="flex md:justify-center lg:pt-6 lg:pb-4 lg:px-6 md:pe-6">
                        <div className="w-[174px] h-[183px] hidden md:block">
                            <Link href={'/'}>
                                    <RenderDensityGraph pathname={isDarkTheme ? './animation/logo/fritilaria_logo_dark.json' : './animation/logo/fritilaria_logo_light.json'} loop={true} />
                            </Link>
                        </div>
                    </div>

                </div>


                <div className="flex px-5 lg:px-6 pb-8 text-left lg:pb-6 md:pt-2">
                    <h1 className={' text-onBackground text-pretty tracking-wide'}>
                        <div className="flex flex-col space-y-4">
                            <div>
                                Calculate the fair value of your favorite stock with Skidetica
                            </div>
                            <div>
                                Perform accurate fundamental analysis by combining advanced statistics and your subjective opinion
                            </div>
                        </div>
                    </h1>
                </div>

                <div>
                    <div id="downloadGooglePlayDesktop" className="flex justify-center">
                        <Link href={'/'}>
                            <Image
                                src="google.svg"
                                width={150}
                                height={110}
                                alt="Skidetica app download from Google Play"
                                className="block md:hidden"
                            />
                        </Link>
                    </div>

                    <div id="downloadGooglePlayMobile" className="flex items-center pb-8 md:justify-center lg:justify-center justify-left md:px-8 md:pt-4 md:pb-8">
                        <Link href={'/'}>
                            <Image
                                src="google.svg"
                                width={160}
                                height={120}
                                alt="Skidetica app download from Google Play mobile button"
                                className="hidden md:block"
                            />
                        </Link>
                    </div>
                </div>


                <nav id="summaryNav">
                    <div className="space-y-1 hidden md:block">
                        <NavLink />
                        <NavLink2 />
                    </div>
                </nav>

            </div>
        </section>

    );

}