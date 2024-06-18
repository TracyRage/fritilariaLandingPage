import Link from "next/link";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Footer from "../ui/footer";


// export const metadata = {
//     title: 'Manifesto',
//     description: 'We are Skidetica Lab. We do statistics. Our main goal is simple. We try to help retail investors to decypher stock markets. We track markets and analyze publicly traded companies all around the world and generate skidetic models which you can use for your fundamental analysis.',
//     keywords: ['fritilaria', 'skidetica labs', 'skidetic', 'fundamental analysis', 'company', 'about us'],
//     alternates: {
//         canonical: '/company'
//     }
// }



export default function Manifesto() {
    const LinkIcon = ArrowLeftIcon;
    return (

        <section>

        <div className="flex flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[840px] border-primary bg-background text-onBackground py-5 px-5 lg:py-5 lg:px-8 shadow-2xl md:shadow-xl">
            <div className="flex flex-col">
                <div className="flex flex-row lg:space-x-4 items-baseline">
                    <div className="flex">
                        <Link key={"Home"} href={"/"}>
                            <LinkIcon className="w-[20px] font-extrabold lg:block hidden" />
                        </Link>
                    </div>
                    <div className="flex">
                        <h1 className={`${sourceSerif.className} text-xl md:text-3xl tracking-tight pb-4 md:pb-2`}>
                            Skidetic manifesto
                        </h1>
                    </div>
                </div>


                <div className="text-base space-y-4 pb-2 md:pb-6">
                    <div className="px-4 lg:pt-6 text-sm lg:text-base lg:leading-relaxed md:tracking-wide">
                        <ul className="list-disc">
                            <li className="pb-4">
                                Have you ever tried to value invest and perform high-quality fundamental analyses?
                            </li>
                            <li className="pb-4">
                                You&apos;ve definitely tried. But you miserably failed.
                            </li>
                            <li className="pb-4">
                                The majority of retail investors have found it challenging to perform good quality fundamental analyses and usually only pretend to value invest.
                            </li>
                            <li className="pb-4">
                                However, there is a solution - Skidetica + Fritilaria.
                            </li>

                            <li className="pb-4">
                                Skidetika is a new technology that involves transforming subjective opinions into rigorous scientific discussions. It employs your intuition and creates robust fundamental analysis models for value investing.

                            </li>

                            <li>
                                Fritilaria app employs skidetika and assists you in finding the fair value of your favorite stock.
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="flex flex-col space-y-4 pt-2">
                <div>
                    <hr className="opacity-10" />
                </div>

                <div className="flex flex-col pt-4 space-y-6 text-lg md:text-xl justify-center items-center">
                    <h1 className="tracking-tight">Intrigued? Try <span className="text-primary">Fritilaria</span>.</h1>
                    <Image
                        src="google.svg"
                        width={160}
                        height={120}
                        alt="Fritilaria"
                        className="hidden md:block "
                    />

                    <Image
                        src="google.svg"
                        width={130}
                        height={90}
                        alt="Fritilaria"
                        className="block md:hidden"
                    />
                    <div className="flex flex-col justify-center leading-7 text-center text-sm">
                        <p>Do you have any other questions?</p>
                        <p>Check the  <Link className="text-primary font-bold" href={"/faq"}><span> FAQ</span>
                        </Link>.</p>
                    </div>
                </div>
                </div>








            </div>
        </div>
        </section>

    );

}