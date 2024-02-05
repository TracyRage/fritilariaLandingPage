import Link from "next/link";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import RenderTermsListItem, { RenderFAQListItem } from "../ui/TermsListItem";
import Image from "next/image";



export default function Comapny() {
    const LinkIcon = ArrowLeftIcon;
    return (

        <div className="flex flex-col h-fit border-2 rounded-[25px] min-w-screen lg:w-[600px] xl:w-[950px] border-primary text-onBackground py-5 px-5 lg:py-5 lg:px-8">
            <div className="flex flex-col">
                <div className="flex flex-row lg:space-x-4 items-baseline">
                    <div className="flex">
                        <Link key={"Home"} href={"/"}>
                            <LinkIcon className="w-[20px] font-extrabold lg:block hidden" />
                        </Link>
                    </div>
                    <div className="flex">
                        <h1 className={`${sourceSerif.className} text-xl md:text-3xl md:tracking-tight pb-6`}>
                            About us
                        </h1>
                    </div>
                </div>

                <div className="pb-4 lg:leading-relaxed lg:tracking-wide text-pretty">
                    <p>Aremti Statistica was founded in 2024 by a group of natural science researchers with a burning passion for statistics. </p>
                </div>

                <div className="lg:pb-12 pb-8 lg:leading-relaxed lg:tracking-wide text-pretty">
                    <p>Our main goal is simple. We try to help retail investors to decypher stock markets. We analyze publicly traded companies all around the world and generate skidetic models which you can use for your fundamental analysis.  </p>
                </div>


                <div className="flex lg:pb-14 pb-8 lg:text-xl font-semibold leading-relaxed tracking-tight text-pretty justify-center">
                    <p>Markets that we track</p>
                </div>

                <div className="hidden md:block">

                <div className="flex flex-col space-y-20">

                    <div className="flex flex-row justify-around items-end">
                        <div className="flex flex-col justify-center space-y-8">
                            <Image src="europe.svg" alt={""} width={150} height={150} />
                            <h1 className="text-xl text-center">Europe</h1>
                        </div>
                        <div className="flex flex-col justify-center space-y-8">
                            <Image src="japan.svg" alt={""} width={100} height={100} />
                            <h1 className="text-xl text-center">Japan</h1>
                        </div>
                        <div className="flex flex-col justify-center space-y-8">
                            <Image src="india.svg" alt={""} width={150} height={150} />
                            <h1 className="text-xl text-center">India</h1>
                        </div>
                    </div>

                    <div className="flex flex-row justify-around items-end">
                        <div className="flex flex-col justify-center space-y-8">
                            <Image src="australia.svg" alt={""} width={150} height={150} />
                            <h1 className="text-xl text-center">Australia</h1>
                        </div>
                        <div className="flex flex-col justify-center space-y-8">
                            <Image src="nigeria.svg" alt={""} width={150} height={150} />
                            <h1 className="text-xl text-center">Nigeria</h1>
                        </div>
                        <div className="flex flex-col justify-center space-y-8">
                            <Image src="brazil.svg" alt={""} width={150} height={150} />
                            <h1 className="text-xl text-center">Brazil</h1>
                        </div>
                    </div>

                    <div className="flex flex-row justify-around items-end">
                        <div className="flex flex-col justify-center space-y-8">
                            <Image src="canada.svg" alt={""} width={200} height={200} />
                            <h1 className="text-xl text-center">Canada</h1>
                        </div>
                        <div className="flex flex-col justify-center space-y-8">
                            <Image src="us.svg" alt={""} width={200} height={200} />
                            <h1 className="text-xl text-center">US</h1>
                        </div>
                    </div>

                </div>

                </div>

                <div className="block md:hidden">

                <div className="flex flex-col space-y-10">

                    <div className="flex flex-row justify-around items-end">
                        <div className="flex flex-col justify-center space-y-4">
                            <Image src="europe.svg" alt={""} width={100} height={100} />
                            <h1 className="text-md text-center">Europe</h1>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <Image src="japan.svg" alt={""} width={50} height={50} />
                            <h1 className="text-md text-center">Japan</h1>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <Image src="india.svg" alt={""} width={100} height={100} />
                            <h1 className="text-md text-center">India</h1>
                        </div>
                    </div>

                    <div className="flex flex-row justify-around items-end">
                        <div className="flex flex-col justify-center space-y-4">
                            <Image src="australia.svg" alt={""} width={75} height={75} />
                            <h1 className="text-sm text-center">Australia</h1>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <Image src="nigeria.svg" alt={""} width={75} height={75} />
                            <h1 className="text-sm text-center">Nigeria</h1>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <Image src="brazil.svg" alt={""} width={75} height={75} />
                            <h1 className="text-sm text-center">Brazil</h1>
                        </div>
                    </div>

                    <div className="flex flex-row justify-around items-end">
                        <div className="flex flex-col justify-center space-y-4">
                            <Image src="canada.svg" alt={""} width={100} height={100} />
                            <h1 className="text-sm text-center">Canada</h1>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <Image src="us.svg" alt={""} width={100} height={100} />
                            <h1 className="text-md text-center">US</h1>
                        </div>
                    </div>

                </div>

                </div>



                <div className="flex lg:pt-24 pt-8 lg:text-xl text-base text-center leading-relaxed tracking-tight text-pretty justify-center">
                    <p>Foresake your doubts, employ statistics. <span className="text-primary">Fritilaria</span>.</p>
                </div>



                <div className="flex flex-col lg:pt-12 pt-6 space-y-6 text-onBackground align-bottom">
                    <hr className="opacity-50" />
                    <div className="flex flex-row space-x-6 justify-center">

                        <Image src="reddit.svg" width={25} height={10} alt="x" />
                        <Image src="x.svg" width={20} height={10} alt="x" />
                        <Image src="threads.svg" width={20} height={10} alt="x" />

                    </div>
                    <p className="text-center text-xs text-onBackground opacity-50">@ 2024 Aremti Statistica. All rights Reserved.</p>
                </div>





            </div>
        </div>

    );

}