'use client';
import { useEffect, useState } from "react";
import { financialParams } from "../utils/financialParameters";
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import RenderAnimation from "./RenderDensityGraph"
import { sourceSerif } from "./fonts";
import clsx from "clsx";
import Image from 'next/image';


export default function Guide() {


    const [buttons, setButtons] = useState([
        { id: "low", label: "Low", state: true },
        { id: "moderate", label: "Medium", state: false },
        { id: "high", label: 'High', state: false }
    ])

    const [patternButtons, setPatternButtons] = useState([
        { id: "arrowUp", label: "ArrowUp", state: true, icon: "arrowUp.svg", iconLight: "arrowUpLight.svg", alt: "Pattern: arrow up" },
        { id: "up", label: "Up", state: false, icon: "linearUp.svg", iconLight: "linearUp.svg", alt: "Pattern: linear up" },
        { id: "down", label: 'Down', state: false, icon: "linearDown.svg", iconLight: "linearDown.svg", alt: "Pattern: linear down" }
    ])

    const [probabilityButtons, setProbabilityButtons] = useState([
        { id: "unlikely_low", label: "Low", state: false, icon: <ArrowTrendingDownIcon className="w-1/4" /> },
        { id: "fair", label: "Fair value", state: true },
        { id: "unlikely_high", label: 'High', state: false, icon: <ArrowTrendingUpIcon className="w-1/4" /> },
    ])

    const [pathName, setPathName] = useState(financialParams[0].iconPath);
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
                        setPathName(financialParams[0].iconPath);
                        setRevenue(financialParams[0].revenue);
                        setMedian(financialParams[0].median);
                        setCI5(financialParams[0].quantile5);
                        setCI95(financialParams[0].quantile95);
                        break;
                    case "up":
                        setPathName(financialParams[1].iconPath);
                        setRevenue(financialParams[1].revenue);
                        setMedian(financialParams[1].median);
                        setCI5(financialParams[1].quantile5);
                        setCI95(financialParams[1].quantile95);
                        break;
                    case "down":
                        setPathName(financialParams[2].iconPath);
                        setRevenue(financialParams[2].revenue);
                        setMedian(financialParams[2].median);
                        setCI5(financialParams[2].quantile5);
                        setCI95(financialParams[2].quantile95);
                        break;
                }

            //  case "moderate":
            //      switch (activeButtonId2) {
            //          case "arrowUp":
            //             setPathName(financialParams[3].iconPath);
            //             setRevenue(financialParams[3].revenue);
            //             setMedian(financialParams[3].median);
            //          case "up":
            //             setPathName(financialParams[4].iconPath);
            //             setRevenue(financialParams[4].revenue);
            //             setMedian(financialParams[4].median);
            //          case "down":
            //             setPathName(financialParams[5].iconPath);
            //             setRevenue(financialParams[5].revenue);
            //             setMedian(financialParams[5].median);
            //      }

            //  case "high":
            //      switch (activeButtonId2) {
            //          case "arrowUp":
            //             setPathName(financialParams[6].iconPath);
            //             setRevenue(financialParams[6].revenue);
            //             setMedian(financialParams[6].median);
            //          case "up":
            //             setPathName(financialParams[7].iconPath);
            //             setRevenue(financialParams[7].revenue);
            //             setMedian(financialParams[7].median);
            //          case "down":
            //             setPathName(financialParams[8].iconPath);
            //             setRevenue(financialParams[8].revenue);
            //             setMedian(financialParams[8].median);
            //      }

            //  default:
            //      return "";

        }


    }


    useEffect(() => {
        handlePathname();
        handleProbabilityValue();
    }

    );


    return (

        <div className="text-onBackground">

            <div className={`${sourceSerif.className} text-lg md:text-3xl md:pt-14 py-4 ps-2`}>
                <span className="text-fritilariaGreen">Skidetics</span> + <span className="text-primary">Fritilaria</span> = statistically sound fundamental analysis
            </div>

            <div className="px-6 pt-4 text-sm tracking-wide pb-14 lg:leading-relaxed">
                <ul className="list-decimal">
                    <div className="flex flex-col pb-6 space-y-4">
                        <li className="lg:text-lg">Select a company. Let&apos;s choose something historical - a watermill.</li>
                        <div className="flex justify-center py-2">
                            <h1 className="text-lg tracking-wide underline text-primary underline-offset-8 decoration-1 decoration-onBackground">Société des Moulins du Bazacle</h1>
                        </div>
                    </div>
                    <li className="pb-6 lg:text-lg">Choose growth magnitude (%) and pattern for the next 5 years. This is the moment when you transform your subjective opinion into a model.</li>
                    <div className="flex justify-center lg:pt-6 md:pe-6">
                        <div className="flex flex-col pb-4 space-y-10">
                            <div className="flex flex-row space-x-4">

                                {buttons.map((button) => (
                                    <button type="submit" onClick={() => {
                                        handleGrowthButton(button.id)

                                    }} key={button.id} className={clsx('flex w-3/6 h-[36px] rounded-xl items-center justify-center',
                                        {
                                            'bg-background text-onBackground border-2 border-onBackground': button.state === false,
                                            'bg-primary text-onPrimary': button.state === true
                                        })}>
                                        {button.label}
                                    </button>
                                ))}

                            </div>
                            <div className="w-[273px] min-h-[106px] block md:hidden">
                                <RenderAnimation pathname={`./animation/equalizer/equalizer_${pathName}.json`} loop={true} />
                            </div>
                            <div className="flex flex-row space-x-4">

                                {patternButtons.map((button) => (
                                    <button type="submit" onClick={() => {
                                        handlePatternButton(button.id);
                                    }} key={button.id} className={clsx('flex w-3/6 h-[36px] rounded-xl items-center justify-center',
                                        {
                                            'bg-background text-onBackground border-2 border-onBackground': button.state === false,
                                            'bg-primary text-onPrimary': button.state === true
                                        })}>

                                        <Image
                                            src={button.icon}
                                            width={26}
                                            height={26}
                                            alt="ahaha"
                                            className={clsx('invert', { 'invert-0': button.state === true })} />


                                    </button>
                                ))}

                            </div>

                        </div>
                    </div>
                    <li className="pt-12 pb-8 lg:text-lg">Check if expected year five revenue (€) is reasonable and fits your beliefes. This is the moment when you validate your opinion.</li>
                    <div className="flex justify-center">
                        <div>
                            <h1 className="text-3xl tracking-wide underline text-primary underline-offset-8 decoration-1 decoration-onBackground">{revenue}M</h1>
                        </div>
                        <div>
                        </div>
                    </div>
                    <li className="pt-12 pb-8 lg:text-lg">Finally, estimate the fundamental value of the selected company. If median value is lower than current market price, then company is undervalued.</li>
                    <div className="flex justify-center">
                        <div className="flex flex-col space-y-4">
                            <RenderAnimation pathname={`./animation/density/density_${pathName}.json`} loop={true} />
                            <label className="flex justify-center">Value / Share (€)</label>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="flex flex-col pt-8 space-y-8">
                        <div className="flex flex-row space-x-4">

                            {probabilityButtons.map((button) => (
                                <button type="submit" onClick={() => {
                                    handleProbabilityButton(button.id);

                                }} key={button.id} className={clsx('flex w-2/6 h-[36px] rounded-xl items-center text-sm justify-center',
                                    {
                                        'bg-background text-onBackground border-2 border-fritilariaGreen': button.state === false && button.id == 'fair',
                                        'bg-fritilariaGreen text-background': button.state === true && button.id === 'fair',
                                        'bg-primary text-onPrimary': button.state === true,
                                        'bg-background text-onBackground border-2 border-onBackground border-dashed': button.state === false && button.id !== 'fair'
                                    })}>
                                    <div className="flex flex-row justify-center">

                                        {button.id == 'fair' ? button.label : button.icon}

                                    </div>
                                </button>
                            ))}

                        </div>
                        <div className="container w-4/4 bg-onPrimaryContainer text-primaryContainer px-4 py-3 rounded-xl">
                        <div className="flex text-center justify-center text-md font-semibold tracking-wide">

                            {probabilityType === 'median' && (<p>Fair value is {probabilityValue} (€).</p>)}
                            {probabilityType === 'ci5' && (<p>There&apos;s 5% that fair value is less than {probabilityValue}.</p>)}
                            {probabilityType === 'ci95' && (<p>There&apos;s 5% that fair value is more than {probabilityValue}.</p>)}

                        </div>

                        </div>
                    </div>

                </ul>
            </div>
        </div>
    );
}

