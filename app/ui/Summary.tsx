import { sourceSerif } from "@/app/ui/fonts";
import Image from 'next/image';
import RenderDensityGraph from '@/app/ui/RenderDensityGraph'
import {NavLink, NavLink2} from "./nav-links";
import Link from "next/link";


export function Summary({
    title,
}: {
    title: string;
}) {

    return (


        <div className='flex flex-col h-fit border-2 rounded-[25px] lg:w-[380px] w-fit border-primary pb-6'>


                <div className="flex flex-col pt-6 ps-6">

                    <div className="flex space-x-4 sm:flex-row">

                        <div>
                            <Link href={"/"}>
                            <h1 className={`${sourceSerif.className} text-2xl text-onBackground md:text-3xl pb-6`}>
                                {title}
                            </h1>
                            </Link>
                        </div>

                        <div className="w-[28px] h-[38px] block md:hidden">
                            <Link href={"/"}>
                            <RenderDensityGraph pathname='./animation/logo/fritilaria_logo_dark.json' loop={true} />
                            </Link>
                            {/* <RenderDensityGraph pathname='./animation/logo/fritilaria_logo_dark.json' loop={true} /> */}
                        </div>
                    </div>

                    <div className="flex md:justify-center lg:pt-6 lg:pb-6 md:pe-6">
                        <div className="w-[174px] h-[183px] hidden md:block">
                            <Link href={'/'}>
                            <RenderDensityGraph pathname='./animation/logo/fritilaria_logo_dark.json' loop={true} />
                            </Link>
                            {/* <RenderDensityGraph pathname='./animation/logo/fritilaria_logo_dark.json' loop={true} /> */}

                        </div>
                    </div>


                </div>


                <div className="flex px-6 pb-6 text-left md:pt-4">
                    <h1 className={' text-onBackground text-balance md:tracking-wide tracking-tight'}>
                        <span className="text-fritilariaGreen">Skidetic statistical models </span> for value investing.
                    </h1>
                </div>

                <div className="flex px-6 pb-8 text-left md:pb-4">
                    <h1 className={'text-onBackground md:tracking-wide tracking-tight text-balance'}>
                        Transform your subjective opinion into statistically accurate <span className="text-fritilariaGreen">fundamental analysis</span>.

                    </h1>
                </div>



                <div>

                    <div className="flex justify-center">
                        <Image
                            src="https://fortiqrsbyglyzsgzcim.supabase.co/storage/v1/object/public/logo/google-play-badge.svg"
                            width={110}
                            height={70}
                            alt="Fritilaria"
                            className="block md:hidden"
                        />
                    </div>

                    <div className="flex items-center pb-8 md:justify-center lg:justify-center justify-left md:px-8 md:py-8">
                        <Image
                            src="https://fortiqrsbyglyzsgzcim.supabase.co/storage/v1/object/public/logo/google-play-badge.svg"
                            width={130}
                            height={90}
                            alt="Fritilaria"
                            className="hidden md:block"
                        />
                    </div>
                </div>

                <NavLink/>
                <NavLink2/>



                </div>





    );

} 