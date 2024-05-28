'use client';
import RenderDensityGraph from "./RenderDensityGraph";
import { roboto, sourceSerif } from "./fonts";
import { motion } from 'framer-motion';
import { useState } from "react";



export default function Manifesto() {


    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (

        <motion.div
            onClick={() => handleClick()}
            className="hidden lg:block text-onBackground lg:container lg:bg-background  md:shadow-2xl shadow-2xl lg:px-8 lg:pt-4 lg:pb-6 px-6 py-4 lg:rounded-[25px] ">

            <motion.h2 className={`${sourceSerif.className} text-lg md:text-3xl pt-2 lg:px-2 space-y-4`}>
                <div className="flex flex-row justify-between items-center tracking-tight">
                    <button className="flex tracking-tight" onClick={() => handleClick()}>
                        <h1> What is Skidetica, anyway? </h1>
                    </button>
                    <div className="flex">
                        <div className="w-4 h-4 block md:hidden" onClick={() => handleClick()}>
                            <RenderDensityGraph pathname='./animation/green_dot.json' loop={true} />
                        </div>
                        <div className="flex">
                            <button className="w-8 h-8 hidden md:block" onClick={() => handleClick()}>
                                <RenderDensityGraph pathname='./animation/green_dot.json' loop={true} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.h2>

            {!isOpen &&
                <motion.div className={`${roboto.className} text-base lg:px-2 lg:pt-6 leading-relaxed tracking-wide`}>
                    Forget about uncertainty. Leverage the cutting-edge statistics to calculate <br /> fundamental value of your favorite stock.
                    <div className="flex flex-row justify-end">
                        <button onClick={() => handleClick()}>
                            <span className="text-primary">More</span>
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
                    <div className="flex flex-row justify-end">
                        <button onClick={() => handleClick()}>
                            <span className="text-primary">Less</span>
                        </button>
                    </div>
                </motion.div>
            }


        </motion.div >

    );


























}