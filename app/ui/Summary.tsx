'use client';
import { onest, sourceSerif } from "@/app/ui/fonts";
import Image from 'next/image';
import RenderDensityGraph from '@/app/ui/RenderDensityGraph'
import { NavLink, NavLink2 } from "./nav-links";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Onest } from "next/font/google";

const BarsIcon = Bars3Icon;


export function Summary({
    title,
}: {
    title: string;
}) {
    const BarsIcon = Bars3Icon;
    const MarkIcon = XMarkIcon;

    const [isMenuOpen, setMenuOpen] = useState(false);



    return (


        <div className='flex flex-col h-fit min-w-screen rounded-[25px] lg:w-[300px] xl:w-[380px] border-primary md:py-6 pb-2 pt-4 shadow-2xl bg-background'>


            <div className="flex flex-col px-5 lg:px-6 pb-2">

                <div className="flex flex-row justify-between items-center">

                    <div className="flex flex-row space-x-4 items-center">
                        <div>
                            <Link href={"/"}>
                                <h1 className={`${sourceSerif.className} text-onBackground text-2xl md:text-3xl pb-6 tracking-tight`}>
                                    {title}
                                </h1>
                            </Link>
                        </div>

                        <div className="w-[44px] pb-6 block md:hidden">
                            <Link href={"/"}>
                                <RenderDensityGraph pathname='./animation/logo/fritilaria_logo_dark.json' loop={true} />
                            </Link>
                            {/* <RenderDensityGraph pathname='./animation/logo/fritilaria_logo_dark.json' loop={true} /> */}
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <button className="flex pb-6" onClick={() => setMenuOpen(!isMenuOpen)}>
                            {!isMenuOpen ? <Bars3Icon className="w-[32px] text-primary" /> : <MarkIcon className="w-[32px] text-primary" />}
                        </button>
                        {
                            isMenuOpen &&
                            <div className={`${sourceSerif.className} z-10 w-10/12 h-fit p-4 absolute right-[20px] bg-background rounded-2xl shadow-sm shadow-black`}>
                                <div className="flex flex-col space-y-4 p-4 items-center text-xl">
                                    <Link key={'Guide'} href={'/'} onClick={() => setMenuOpen(!isMenuOpen)}>Guide</Link>
                                    <Link key={'FAQ'} href={'/faq'} onClick={() => setMenuOpen(!isMenuOpen)}>FAQ</Link>
                                    <Link key={'Contact us'} href={'/contact-us'} onClick={() => setMenuOpen(!isMenuOpen)}>Contact us</Link>
                                    <Link key={'About us'} href={'/company'} onClick={() => setMenuOpen(!isMenuOpen)}>About us</Link>
                                    <Link key={'Terms & Conditions'} href={'/terms'} onClick={() => setMenuOpen(!isMenuOpen)}>Terms & Conditions</Link>
                                    <Link key={'Privacy policy'} href={'/privacy'} onClick={() => setMenuOpen(!isMenuOpen)}>Privacy policy</Link>
                                </div>

                            </div>
                        }

                    </div>


                </div>

                <div className="flex md:justify-center lg:pt-6 lg:pb-6 lg:px-6 md:pe-6">
                    <div className="w-[174px] h-[183px] hidden md:block">
                        <Link href={'/'}>
                            <RenderDensityGraph pathname='./animation/logo/fritilaria_logo_dark.json' loop={true} />
                        </Link>
                        {/* <RenderDensityGraph pathname='./animation/logo/fritilaria_logo_dark.json' loop={true} /> */}

                    </div>
                </div>


            </div>


            <div className="flex px-5 lg:px-6 pb-4 text-left md:pb-4 md:pt-2">
                <h1 className={' text-onBackground text-pretty tracking-wide'}>
                    Transform your opinion into statistically accurate fundamental analysis.
                </h1>
            </div>

            <div className="flex px-5 lg:px-6 pb-8 text-left md:pb-6">
                <h1 className={'text-onBackground tracking-wide text-pretty'}>
                    Skidetic statistical models for value investing.
                </h1>
            </div>




            <div>

                <div className="flex justify-center">
                    <Image
                        src="google.svg"
                        width={150}
                        height={110}
                        alt="Fritilaria"
                        className="block md:hidden"
                    />
                </div>

                <div className="flex items-center pb-8 md:justify-center lg:justify-center justify-left md:px-8 md:pt-4 md:pb-8">
                    <Image
                        src="google.svg"
                        width={160}
                        height={120}
                        alt="Fritilaria"
                        className="hidden md:block"
                    />
                </div>
            </div>

            <div className="space-y-1 hidden md:block">
                <NavLink />
                <NavLink2 />
            </div>



        </div>


    );

}