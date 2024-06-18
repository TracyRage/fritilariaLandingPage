import Link from "next/link";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


export const metadata = {
    title: 'About us',
    keywords: ['skidetica about us', 'international stock exhange markets'],
    alternates: {
        canonical: '/company'
    }
}



export default function Company() {
    const LinkIcon = ArrowLeftIcon;
    return (

        <section id="companyShortPresentation">
        <div className="flex flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[840px] border-primary bg-background text-onBackground py-5 px-5 lg:py-5 lg:px-8 shadow-2xl md:shadow-xl">
            <div className="flex flex-col pb-8">
                <div className="flex flex-row lg:space-x-4 items-baseline">
                    <div className="flex">
                        <Link key={"Home"} href={"/"}>
                            <LinkIcon className="w-[20px] font-extrabold lg:block hidden" />
                        </Link>
                    </div>
                    <div className="flex">
                        <h1 className={`${sourceSerif.className} text-xl md:text-3xl tracking-tight pb-6`}>
                            About us
                        </h1>
                    </div>
                </div>

                <div className="lg:pb-12 pb-6 text-sm lg:text-base lg:leading-relaxed lg:tracking-wide text-pretty indent-8">
                    <h2>We are Skidetica Lab. We do statistics. Our main goal is simple. We try to help retail investors to decypher stock markets. We track markets and analyze publicly traded companies all around the world and generate skidetic models which you can use for your fundamental analysis.  </h2>
                </div>

                <div className="flex flex-col justify-center">
                    <div className={`${sourceSerif.className} flex lg:pb-14 pb-8 lg:text-2xl leading-relaxed text-pretty justify-center`}>
                        <h3>Markets Skidetica tracks</h3>
                    </div>

                    <div className="flex flex-col justify-center">

                    <div className="hidden md:block">

                        <div className="flex flex-col space-y-20 tracking-tight">

                            <div className="flex flex-row justify-around items-end">
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="europe.svg" alt={"XFRA, Euronext, XSTO"} width={150} height={150} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>Europe</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="japan.svg" alt={"XJPX"} width={100} height={100} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>Japan</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="india.svg" alt={"XBOM, XNSE"} width={150} height={150} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>India</h1>
                                </div>
                            </div>

                            <div className="flex flex-row justify-around items-end">
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="australia.svg" alt={"ASX"} width={150} height={150} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>Australia</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="nigeria.svg" alt={"NSE"} width={150} height={150} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>Nigeria</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="brazil.svg" alt={"B3"} width={150} height={150} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>Brazil</h1>
                                </div>
                            </div>

                            <div className="flex flex-row justify-around items-end">
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="canada.svg" alt={"XTSE"} width={200} height={200} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>Canada</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="us.svg" alt={"NASDAQ, NYSE"} width={200} height={200} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>US</h1>
                                </div>
                            </div>

                        </div>
                        </div>

                    </div>

                    <div className="block md:hidden">

                        <div className="flex flex-col space-y-10 tracking-tight">

                            <div className="flex flex-row justify-around items-end">
                                <div className="flex flex-col justify-center space-y-4">
                                    <Image src="europe.svg" alt={"XFRA, Euronext, XSTO"} width={100} height={100} />
                                    <h1 className="text-md text-center">Europe</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <Image src="japan.svg" alt={"XJPX"} width={50} height={50} />
                                    <h1 className="text-md text-center">Japan</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <Image src="india.svg" alt={"XBOM, XNSE"} width={100} height={100} />
                                    <h1 className="text-md text-center">India</h1>
                                </div>
                            </div>

                            <div className="flex flex-row justify-around items-end">
                                <div className="flex flex-col justify-center space-y-4">
                                    <Image src="australia.svg" alt={"ASX"} width={75} height={75} />
                                    <h1 className="text-sm text-center">Australia</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <Image src="nigeria.svg" alt={"NSE"} width={75} height={75} />
                                    <h1 className="text-sm text-center">Nigeria</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <Image src="brazil.svg" alt={"B3"} width={75} height={75} />
                                    <h1 className="text-sm text-center">Brazil</h1>
                                </div>
                            </div>

                            <div className="flex flex-row justify-around items-end">
                                <div className="flex flex-col justify-center space-y-4">
                                    <Image src="canada.svg" alt={"XTSE"} width={100} height={100} />
                                    <h1 className="text-sm text-center">Canada</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <Image src="us.svg" alt={"NASDAQ, NYSE"} width={100} height={100} />
                                    <h1 className="text-md text-center">US</h1>
                                </div>
                            </div>

                        </div>

                    </div>



                    <div className={`${sourceSerif.className} flex lg:pt-14 pt-8 lg:text-xl text-base leading-relaxed text-pretty justify-center`}>
                        <p>Whispering certainty. <span className="text-primary">Fritilaria</span>.</p>
                    </div>
                </div>

            </div>
        </div>
        </section>

    );

}