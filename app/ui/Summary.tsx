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


        <div className='flex flex-col h-fit rounded-[25px] lg:w-[300px] xl:w-[380px] border-primary py-6  shadow-2xl'>


                <div className="flex flex-col px-5 lg:px-6">

                    <div className="flex space-x-4 flex-row">

                        <div>
                            <Link href={"/"}>
                            <h1 className={`${sourceSerif.className} text-onBackground text-2xl md:text-3xl pb-6`}>
                                {title}
                            </h1>
                            </Link>
                        </div>

                        <div className="w-[30px] block md:hidden">
                            <Link href={"/"}>
                            <RenderDensityGraph pathname='./animation/logo/fritilaria_logo_dark.json' loop={true} />
                            </Link>
                            {/* <RenderDensityGraph pathname='./animation/logo/fritilaria_logo_dark.json' loop={true} /> */}
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


                <div className="flex px-5 lg:px-6 pb-2 text-left md:pt-4">
                    <h1 className={' text-onBackground text-pretty tracking-wide'}>
                        Skidetic statistical models for value investing.
                    </h1>
                </div>

                <div className="flex px-5 lg:px-6 pb-8 text-left md:pb-4">
                    <h1 className={'text-onBackground tracking-wide text-pretty'}>
                        Transform your opinion into statistically accurate <span className="text-fritilariaGreen">fundamental analysis</span>.

                    </h1>
                </div>



                <div>

                    <div className="flex justify-center">
                        <Image
                            src="google.svg"
                            width={130}
                            height={90}
                            alt="Fritilaria"
                            className="block md:hidden"
                        />
                    </div>

                    <div className="flex items-center pb-8 md:justify-center lg:justify-center justify-left md:px-8 md:pt-6 md:pb-8">
                        <Image
                            src="google.svg"
                            width={160}
                            height={120}
                            alt="Fritilaria"
                            className="hidden md:block"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                <NavLink/>
                <NavLink2/>
                </div>



                </div>


    );

} 