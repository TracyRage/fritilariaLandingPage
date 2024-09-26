'use client';
import RenderDensityGraph from "./RenderDensityGraph";
import { roboto, sourceSerif } from "./fonts";
import { motion } from 'framer-motion';
import { useState } from "react";



export default function Manifesto() {


    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (

        <section id="mainPageManifesto">

            <motion.div
                onClick={() => handleClick()}
                className="hidden lg:block dark:text-md_theme_dark_onSurface text-md_theme_light_onSurface  lg:container dark:bg-md_theme_dark_surface_lowest bg-md_theme_light_surface_lowest  shadow-sm dark:shadow-sm shadow-md_theme_dark_scrim lg:px-8 lg:pt-4 lg:pb-6 px-6 py-4 lg:rounded-[25px] ">


                <motion.h1 className={`${sourceSerif.className} text-lg md:text-2xl pt-2 lg:px-2 space-y-4`}>
                    <div className="flex flex-row justify-between items-center tracking-tight">
                        <button className="flex tracking-tight" onClick={() => handleClick()}>
                            <div className="flex-col space-y-4">
                            <h1>Skidetica - making value investing easy</h1>
                            </div>
                        </button>
                        {/* <div className="flex">
                            <div className="w-4 h-4 block md:hidden" onClick={() => handleClick()}>
                                <RenderDensityGraph pathname='./animation/green_dot.json' loop={true} />
                            </div>
                            <div className="flex">
                                <button className="w-8 h-8 hidden md:block" onClick={() => handleClick()}>
                                    <RenderDensityGraph pathname='./animation/green_dot.json' loop={true} />
                                </button>
                            </div>
                        </div> */}
                    </div>
                </motion.h1>

                {!isOpen &&
                    <motion.div className={`${roboto.className} text-base lg:px-2 lg:pt-3 leading-relaxed tracking-wide`}>
                        <h2>Forget about uncertainty. Leverage the cutting-edge statistical models to calculate <br /> the fair value of your favorite stock</h2>
                        <div className="flex flex-row lg:pt-2 justify-end">
                            <button onClick={() => handleClick()}>
                                <span className="dark:font-medium dark:text-md_theme_dark_primary text-md_theme_light_primary">More</span>
                            </button>

                        </div>
                    </motion.div>
                }

                {isOpen &&
                    <motion.div className={`${roboto.className} text-base space-y-4`}>
                        <div className="px-4 lg:pt-6 lg:text-base lg:leading-relaxed md:tracking-wide">
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
                                    However, there is a solution - Skidetica.
                                </li>

                                <li className="pb-4">
                                    Skidetika is a new technology that involves transforming subjective opinions into rigorous scientific discussions. It employs your intuition and creates robust fundamental analysis models for value investing.

                                </li>

                                <li>
                                    Skidetica app assists you in finding the fair value of your favorite stock.
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-row justify-end">
                            <button onClick={() => handleClick()}>
                                <span className="dark:font-medium dark:text-md_theme_dark_primary text-md_theme_light_primary">Less</span>
                            </button>
                        </div>
                    </motion.div>
                }


            </motion.div >

        </section>

    );


























}