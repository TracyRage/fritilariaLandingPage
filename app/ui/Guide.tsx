'use client';
import { useEffect, useState } from "react";
import { financialParams } from "../utils/financialParameters";
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import RenderAnimation from "./RenderDensityGraph"
import { sourceSerif } from "./fonts";
import clsx from "clsx";
import Image from 'next/image';
import Link from "next/link";
import RenderDensityGraph from "./RenderDensityGraph";


export default function Guide() {


    const [buttons, setButtons] = useState([
        { id: "low", label: "Low", state: false },
        { id: "moderate", label: "Medium", state: true },
        { id: "high", label: 'High', state: false }
    ])

    const [patternButtons, setPatternButtons] = useState([
        { id: "arrowUp", label: "ArrowUp", state: true, icon: "arrowUp.svg", iconLight: "arrowUpLight.svg", alt: "Pattern: arrow up" },
        { id: "up", label: "Up", state: false, icon: "linearUp.svg", iconLight: "linearUp.svg", alt: "Pattern: linear up" },
        { id: "down", label: 'Down', state: false, icon: "linearDown.svg", iconLight: "linearDown.svg", alt: "Pattern: linear down" }
    ])

    const [probabilityButtons, setProbabilityButtons] = useState([
        { id: "unlikely_low", label: "Low", state: false, icon: <ArrowTrendingDownIcon className="w-1/4 sm:w-[24px] lg:w-[32px]" /> },
        { id: "fair", label: "Fair value", state: true },
        { id: "unlikely_high", label: 'High', state: false, icon: <ArrowTrendingUpIcon className="w-1/4 sm:w-[24px] lg:w-[32px]" /> },
    ])

    const [pathName, setPathName] = useState(financialParams[0].path);
    const [revenue, setRevenue] = useState(financialParams[0].revenue);
    const [median, setMedian] = useState(financialParams[0].median);
    const [ci5, setCI5] = useState(financialParams[0].median);
    const [ci95, setCI95] = useState(financialParams[0].median);
    const [probabilityValue, setProbabilityValue] = useState(financialParams[0].median)
    const [probabilityType, setProbabilityType] = useState("median")


    const handleGrowthButton = (buttonId: string) => {

        setButtons(prevButtons =>
            prevButtons.map(button =>
                button.id === buttonId ? { ...button, state: true } : { ...button, state: false }))



    }

    const handlePatternButton = (buttonId: string) => {


        setPatternButtons(prevButtons =>
            prevButtons.map(button =>
                button.id === buttonId ? { ...button, state: true } : { ...button, state: false }))


    }

    const handleProbabilityButton = (buttonId: string) => {


        setProbabilityButtons(prevButtons =>
            prevButtons.map(button =>
                button.id === buttonId ? { ...button, state: true } : { ...button, state: false }))


    }

    const handleProbabilityValue = () => {

        const activeButton = probabilityButtons.find(button => button.state === true)?.id

        switch (activeButton) {
            case "fair":
                setProbabilityValue(median);
                setProbabilityType("median")
                break;
            case "unlikely_low":
                setProbabilityValue(ci5);
                setProbabilityType("ci5");
                break;
            case "unlikely_high":
                setProbabilityValue(ci95);
                setProbabilityType("ci95");
                break;
            default:
                setProbabilityValue(0);
                break;

        }

    }



    const handlePathname = () => {

        const activeButtonId = buttons.find(button => button.state === true)?.id;
        const activeButtonId2 = patternButtons.find(button => button.state === true)?.id;

        switch (activeButtonId) {

            case "low":
                switch (activeButtonId2) {
                    case "arrowUp":
                        setPathName(financialParams[0].path);
                        setRevenue(financialParams[0].revenue);
                        setMedian(financialParams[0].median);
                        setCI5(financialParams[0].quantile5);
                        setCI95(financialParams[0].quantile95);
                        break;
                    case "up":
                        setPathName(financialParams[1].path);
                        setRevenue(financialParams[1].revenue);
                        setMedian(financialParams[1].median);
                        setCI5(financialParams[1].quantile5);
                        setCI95(financialParams[1].quantile95);
                        break;
                    case "down":
                        setPathName(financialParams[2].path);
                        setRevenue(financialParams[2].revenue);
                        setMedian(financialParams[2].median);
                        setCI5(financialParams[2].quantile5);
                        setCI95(financialParams[2].quantile95);
                        break;
                };
                break

            case "moderate":
                switch (activeButtonId2) {
                    case "arrowUp":
                        setPathName(financialParams[3].path);
                        setRevenue(financialParams[3].revenue);
                        setMedian(financialParams[3].median);
                        setCI5(financialParams[3].quantile5);
                        setCI95(financialParams[3].quantile95);
                        break;
                    case "up":
                        setPathName(financialParams[4].path);
                        setRevenue(financialParams[4].revenue);
                        setMedian(financialParams[4].median);
                        setCI5(financialParams[4].quantile5);
                        setCI95(financialParams[4].quantile95);
                        break;
                    case "down":
                        setPathName(financialParams[5].path);
                        setRevenue(financialParams[5].revenue);
                        setMedian(financialParams[5].median);
                        setCI5(financialParams[5].quantile5);
                        setCI95(financialParams[5].quantile95);
                        break;
                };
                break;

            case "high":
                switch (activeButtonId2) {
                    case "arrowUp":
                        setPathName(financialParams[6].path);
                        setRevenue(financialParams[6].revenue);
                        setMedian(financialParams[6].median);
                        setCI5(financialParams[6].quantile5);
                        setCI95(financialParams[6].quantile95);
                        break;
                    case "up":
                        setPathName(financialParams[7].path);
                        setRevenue(financialParams[7].revenue);
                        setMedian(financialParams[7].median);
                        setCI5(financialParams[7].quantile5);
                        setCI95(financialParams[7].quantile95);
                        break;
                    case "down":
                        setPathName(financialParams[8].path);
                        setRevenue(financialParams[8].revenue);
                        setMedian(financialParams[8].median);
                        setCI5(financialParams[8].quantile5);
                        setCI95(financialParams[8].quantile95);
                        break;
                }
                break;

            default:
                break;


        }


    }


    useEffect(() => {
        handlePathname();
        console.log(pathName);
        handleProbabilityValue();
    }

    );


    return (

        <div className="text-onBackground lg:container lg:bg-background lg:shadow-2xl lg:px-4 lg:py-6 lg:rounded-3xl">

            <div className={`${sourceSerif.className} text-lg md:text-3xl pt-2 pb-4 lg:px-2`}>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex">
                        <p>Skidetics + Fritilaria crash course </p>
                    </div>
                    <div className="flex">
                    <div className="w-4 h-4 block md:hidden">
                        <RenderDensityGraph pathname='./animation/green_dot.json' loop={true} />
                    </div>
                    <div className="flex">
                    <div className="w-8 h-8 hidden md:block">
                        <RenderDensityGraph pathname='./animation/green_dot.json' loop={true} />
                    </div>
                    </div>
                    </div>

                </div>
            </div>

            <div className="lg:px-8 px-5 pt-4 lg:pt-0 text-sm tracking-wide lg:leading-relaxed md:tracking-wide">
                <ul className="list-decimal">
                    <div className="flex flex-col pb-8 space-y-4">
                        <li className="lg:text-base">Select a company. Let&apos;s choose something historical.</li>

                        <div className="flex justify-center pt-2">
                            <div className="flex w-fit  text-onBackground shadow-3xl bg-elevated shadow-elevated4 text-base px-4 py-3 rounded-xl justify-center">
                                <h1 className="text-sm tracking-wide lg:text-base">Société des Moulins du Bazacle <i>(est. 1070)</i></h1>
                            </div>

                        </div>
                    </div>
                    <li className="pb-6 lg:text-base">Select the growth pattern and magnitude (%) of the company.</li>
                    <div className="pb-6 lg:text-base space-y-[10px]">
                        <p><span className="text-primary">Interpretation</span>: I think, revenue growth will reach 20% in three years. Afterwards, the growth will gradually decrease.</p>
                        <p><span className="text-primary">Context</span>: This is the moment when you translate your subjective opinion / intuition into a model.</p>
                        <div className="flex justify-center pt-6 lg:pt-6">
                            <div className="flex flex-col space-y-10">
                                <div className="flex flex-row space-x-4">

                                    {buttons.map((button) => (
                                        <button type="submit" onClick={() => {
                                            handleGrowthButton(button.id);

                                        }} key={button.id} className={clsx('flex w-3/6 h-[36px] rounded-xl items-center justify-center',
                                            {
                                                'bg-elevated text-onBackground': button.state === false,
                                                'bg-elevated2 text-onBackground shadow-2xl': button.state === true
                                            })}>
                                            {button.label}
                                        </button>
                                    ))}

                                </div>
                                <div className="w-[273px] min-h-[106px] block md:hidden">
                                    <RenderAnimation pathname={`./animation/equalizer/equalizer_${pathName}.json`} loop={true} />
                                </div>
                                <div className="w-[340px] min-h-[106px] hidden md:block">
                                    <RenderAnimation pathname={`./animation/equalizer/equalizer_${pathName}.json`} loop={true} />
                                </div>
                                <div className="flex flex-row space-x-4">

                                    {patternButtons.map((button) => (
                                        <button type="submit" onClick={() => {
                                            handlePatternButton(button.id);
                                        }} key={button.id} className={clsx('flex w-3/6 h-[36px] rounded-xl items-center justify-center',
                                            {
                                                'bg-elevated text-onBackground': button.state === false,
                                                'bg-elevated2 text-onBackground shadow-2xl': button.state === true
                                            })}>

                                            <Image
                                                src={button.icon}
                                                width={26}
                                                height={26}
                                                alt="ahaha"
                                                className="invert" />

                                        </button>
                                    ))}

                                </div>

                            </div>
                        </div>

                    </div>
                    <li className="pt-6 pb-4 lg:text-base">Check if the expected revenue for year five (in millions) is reasonable and aligns with your beliefs.</li>
                    <div className="flex flex-col pb-6 lg:text-base space-y-1 justify-center">
                        <div className="flex flex-col space-y-[10px]">
                            <p><span className="text-primary">Interpretation</span>: I think, company revenues won&apos;t exceed {revenue}M€ in year five.</p>
                            <p><span className="text-primary pb-6 lg:pb-4">Context</span>: This is the moment when you validate your opinion.</p>
                        </div>
                        <div className="flex justify-center lg:pt-6 pt-4">
                            <div className="flex w-2/4 justify-center text-onBackground shadow-3xl bg-elevated shadow-elevated4 text-base px-4 py-2 rounded-xl">
                                <h1 className="text-base tracking-wide lg:text-3xl">{revenue}M€</h1>
                            </div>
                        </div>


                    </div>
                    <li className="pt-4 pb-6  lg:text-base">Given your opinion, estimate the fair value of the selected company.</li>
                    <div className="pb-12 lg:text-base space-y-[10px]">
                        <p><span className="text-primary leading-relaxed ">Interpretation</span>: I think, fair value of this company is {probabilityValue}$/share. Current stock price is 500$/share. Therefore, the selected company is undervalued.</p>
                        <p><span className="text-primary">Context</span>: This is the moment when your opinion becomes a probability distribution.</p>

                    </div>
                    <div className="flex justify-center">
                        <div className="block lg:hidden space-y-4">
                            <RenderAnimation pathname={`./animation/density/density_${pathName}.json`} loop={true} />
                            <label className="flex justify-center">Value / Share (€)</label>
                        </div>
                        <div className="space-y-4 hidden lg:block w-[340px]">
                            <RenderAnimation pathname={`./animation/density/density_${pathName}.json`} loop={true} />
                            <label className="flex justify-center">Value / Share (€)</label>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col pt-8 space-y-8">
                            <div className="flex flex-row space-x-4">

                                {probabilityButtons.map((button) => (
                                    <button type="submit" onClick={() => {
                                        handleProbabilityButton(button.id);

                                    }} key={button.id} className={clsx('flex w-2/6 lg:w-[126px] sm:w-[120px] h-[38px] rounded-xl items-center lg:text-base text-sm justify-center',
                                        {
                                            'bg-elevated text-onBackground': button.state === false,
                                            'bg-elevated2 text-onBackground shadow-2xl': button.state === true
                                        })}>
                                        <div className="flex flex-row justify-center">

                                            {button.id == 'fair' ? button.label : button.icon}

                                        </div>
                                    </button>
                                ))}

                            </div>
                            <div className="container w-4/4  text-onBackground shadow-2xl bg-elevated  px-4 py-4 rounded-xl">
                                <div className="flex text-center justify-center lg:text-base text-sm">

                                    {probabilityType === 'median' && (<p>Fair value is {probabilityValue} (€).</p>)}
                                    {probabilityType === 'ci5' && (<p>There&apos;s 5% that fair value is less than {probabilityValue} (€).</p>)}
                                    {probabilityType === 'ci95' && (<p>There&apos;s 5% that fair value is more than {probabilityValue} (€).</p>)}

                                </div>

                            </div>

                            <div>
                                <hr className="opacity-50" />
                            </div>

                            <div className="flex flex-col pt-4 space-y-6 text-lg md:text-xl justify-center items-center">
                                <h1 className="tracking-tight">It&apos;s easy, isn&apos;t it? Try <span className="text-primary">Fritilaria</span>.</h1>
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

                    <div className="flex flex-col pt-12 space-y-6 text-onBackground">
                        <hr className="opacity-50" />
                        <div className="flex flex-row space-x-6 justify-center">

                            <Image src="reddit.svg" width={25} height={10} alt="x" />
                            <Image src="x.svg" width={20} height={10} alt="x" />
                            <Image src="threads.svg" width={20} height={10} alt="x" />
                            <Image src="discord.svg" width={25} height={10} alt="x" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-center text-xs text-onBackground opacity-50">Edineț, MD-4601, Republic of Moldova.</p>
                            <p className="text-center text-xs text-onBackground opacity-50">@ 2024 Skidetica Labs. All rights Reserved.</p>
                        </div>

                    </div>

                </ul>
            </div>
        </div>
    );
}

