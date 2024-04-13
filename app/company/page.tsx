import Link from "next/link";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import RenderTermsListItem, { RenderFAQListItem } from "../ui/TermsListItem";
import Image from "next/image";
import Footer from "../ui/footer";


export const metadata = {
    title: 'About us',
    description: 'We are Skidetica Lab. We do statistics. Our main goal is simple. We try to help retail investors to decypher stock markets. We track markets and analyze publicly traded companies all around the world and generate skidetic models which you can use for your fundamental analysis.',
    keywords: ['fritilaria', 'skidetica labs', 'skidetic', 'fundamental analysis', 'company', 'about us'],
    alternates: {
        canonical: '/company'
    }
}



export default function Company() {
    const LinkIcon = ArrowLeftIcon;
    return (

        <div className="flex flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[950px] border-primary bg-background text-onBackground py-5 px-5 lg:py-5 lg:px-8 shadow-2xl md:shadow-xl">
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


                <div className="lg:pb-6 pb-6 lg:leading-relaxed lg:tracking-wide text-pretty indent-8">
                    <p>We are Skidetica Lab. We do statistics. Our main goal is simple. We try to help retail investors to decypher stock markets. We track markets and analyze publicly traded companies all around the world and generate skidetic models which you can use for your fundamental analysis.  </p>
                </div>


                <div className="flex flex-col justify-center">
                    <div className={`${sourceSerif.className} flex lg:pb-14 pb-8 lg:text-2xl leading-relaxed text-pretty justify-center`}>
                        <p>Markets we track</p>
                    </div>

                    <div className="flex flex-col justify-center">

                    <div className="hidden md:block">

                        <div className="flex flex-col space-y-20 tracking-tight">

                            <div className="flex flex-row justify-around items-end">
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="europe.svg" alt={""} width={150} height={150} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>Europe</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="japan.svg" alt={""} width={100} height={100} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>Japan</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="india.svg" alt={""} width={150} height={150} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>India</h1>
                                </div>
                            </div>

                            <div className="flex flex-row justify-around items-end">
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="australia.svg" alt={""} width={150} height={150} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>Australia</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="nigeria.svg" alt={""} width={150} height={150} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>Nigeria</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="brazil.svg" alt={""} width={150} height={150} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>Brazil</h1>
                                </div>
                            </div>

                            <div className="flex flex-row justify-around items-end">
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="canada.svg" alt={""} width={200} height={200} />
                                    <h1 className={`${sourceSerif.className} text-xl text-center`}>Canada</h1>
                                </div>
                                <div className="flex flex-col justify-center space-y-8">
                                    <Image src="us.svg" alt={""} width={200} height={200} />
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



                    <div className={`${sourceSerif.className} flex lg:pt-14 pt-8 lg:text-xl text-base leading-relaxed text-pretty justify-center`}>
                        <p>Whispering certainty. <span className="text-primary">Fritilaria</span>.</p>
                    </div>
                </div>




                <Footer/>





            </div>
        </div>

    );

}