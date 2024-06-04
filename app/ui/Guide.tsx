'use client';
import { useEffect, useState } from "react";
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import RenderAnimation from "./RenderDensityGraph"
import { sourceSerif } from "./fonts";
import clsx from "clsx";
import Image from 'next/image';
import Link from "next/link";
import Footer from "./footer";
import { equalizerPathnames } from "../utils/equalizerParameters";
import { financialParams } from "../utils/financialParameters";


export default function Guide() {

    const [companyButtons, setCompanyButtons] = useState([
        { id: "abnb", label: "ABNB", state: false },
        { id: "msft", label: "MSFT", state: true },
        { id: "tsla", label: 'TSLA', state: false }
    ])

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
        { id: "unlikely_low", label: "Low", state: false, icon: <ArrowTrendingDownIcon className="w-1/4 sm:w-[24px] lg:w-[28px]" /> },
        { id: "fair", label: "Fair value", state: true },
        { id: "unlikely_high", label: 'High', state: false, icon: <ArrowTrendingUpIcon className="w-1/4 sm:w-[24px] lg:w-[28px]" /> },
    ])

    const [pathName, setPathName] = useState(financialParams[19].path);
    const [equalizerPathName, setEqualizerPathName] = useState(equalizerPathnames[0].path);
    const [revenue, setRevenue] = useState(financialParams[19].revenue);
    const [ ticker, setTicker] = useState("MSFT");
    const [median, setMedian] = useState(financialParams[19].median);
    const [ci5, setCI5] = useState(financialParams[19].median);
    const [ci95, setCI95] = useState(financialParams[19].median);
    const [probabilityValue, setProbabilityValue] = useState(financialParams[19].median)
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

    const handleCompanyButton = (buttonId: string) => {


        setCompanyButtons(prevButtons =>
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
        const companyButtonsId = companyButtons.find(button => button.state === true)?.id;

        switch (companyButtonsId) {
            case "abnb":
                setTicker("ABNB");
                switch (activeButtonId) {
                    case "low":
                        switch (activeButtonId2) {
                            case "arrowUp":
                                setPathName(financialParams[0].path);
                                setEqualizerPathName(equalizerPathnames[0].path);
                                setRevenue(financialParams[0].revenue);
                                setMedian(financialParams[0].median);
                                setCI5(financialParams[0].quantile5);
                                setCI95(financialParams[0].quantile95);
                                break;
                            case "up":
                                setPathName(financialParams[1].path);
                                setEqualizerPathName(equalizerPathnames[1].path);
                                setRevenue(financialParams[1].revenue);
                                setMedian(financialParams[1].median);
                                setCI5(financialParams[1].quantile5);
                                setCI95(financialParams[1].quantile95);
                                break;
                            case "down":
                                setPathName(financialParams[2].path);
                                setEqualizerPathName(equalizerPathnames[2].path);
                                setRevenue(financialParams[2].revenue);
                                setMedian(financialParams[2].median);
                                setCI5(financialParams[2].quantile5);
                                setCI95(financialParams[2].quantile95);
                                break;
                        };
                        break;

                    case "moderate":
                        switch (activeButtonId2) {
                            case "arrowUp":
                                setPathName(financialParams[3].path);
                                setEqualizerPathName(equalizerPathnames[3].path);
                                setRevenue(financialParams[3].revenue);
                                setMedian(financialParams[3].median);
                                setCI5(financialParams[3].quantile5);
                                setCI95(financialParams[3].quantile95);
                                break;
                            case "up":
                                setPathName(financialParams[4].path);
                                setEqualizerPathName(equalizerPathnames[4].path);
                                setRevenue(financialParams[4].revenue);
                                setMedian(financialParams[4].median);
                                setCI5(financialParams[4].quantile5);
                                setCI95(financialParams[4].quantile95);
                                break;
                            case "down":
                                setPathName(financialParams[5].path);
                                setEqualizerPathName(equalizerPathnames[5].path);
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
                                setEqualizerPathName(equalizerPathnames[6].path);
                                setRevenue(financialParams[6].revenue);
                                setMedian(financialParams[6].median);
                                setCI5(financialParams[6].quantile5);
                                setCI95(financialParams[6].quantile95);
                                break;
                            case "up":
                                setPathName(financialParams[7].path);
                                setEqualizerPathName(equalizerPathnames[7].path);
                                setRevenue(financialParams[7].revenue);
                                setMedian(financialParams[7].median);
                                setCI5(financialParams[7].quantile5);
                                setCI95(financialParams[7].quantile95);
                                break;
                            case "down":
                                setPathName(financialParams[8].path);
                                setEqualizerPathName(equalizerPathnames[8].path);
                                setRevenue(financialParams[8].revenue);
                                setMedian(financialParams[8].median);
                                setCI5(financialParams[8].quantile5);
                                setCI95(financialParams[8].quantile95);
                                break;
                        }
                        break;

                };

                break;

            case "tsla":
                setTicker("TSLA");
                switch (activeButtonId) {

                    case "low":
                        switch (activeButtonId2) {
                            case "arrowUp":
                                setPathName(financialParams[9].path);
                                setEqualizerPathName(equalizerPathnames[0].path);
                                setRevenue(financialParams[9].revenue);
                                setMedian(financialParams[9].median);
                                setCI5(financialParams[9].quantile5);
                                setCI95(financialParams[9].quantile95);
                                break;
                            case "up":
                                setPathName(financialParams[10].path);
                                setEqualizerPathName(equalizerPathnames[1].path);
                                setRevenue(financialParams[10].revenue);
                                setMedian(financialParams[10].median);
                                setCI5(financialParams[10].quantile5);
                                setCI95(financialParams[10].quantile95);
                                break;
                            case "down":
                                setPathName(financialParams[11].path);
                                setEqualizerPathName(equalizerPathnames[2].path);
                                setRevenue(financialParams[11].revenue);
                                setMedian(financialParams[11].median);
                                setCI5(financialParams[11].quantile5);
                                setCI95(financialParams[11].quantile95);
                                break;
                        };
                        break;

                    case "moderate":
                        switch (activeButtonId2) {
                            case "arrowUp":
                                setPathName(financialParams[12].path);
                                setEqualizerPathName(equalizerPathnames[3].path);
                                setRevenue(financialParams[12].revenue);
                                setMedian(financialParams[12].median);
                                setCI5(financialParams[12].quantile5);
                                setCI95(financialParams[12].quantile95);
                                break;
                            case "up":
                                setPathName(financialParams[13].path);
                                setEqualizerPathName(equalizerPathnames[4].path);
                                setRevenue(financialParams[13].revenue);
                                setMedian(financialParams[13].median);
                                setCI5(financialParams[13].quantile5);
                                setCI95(financialParams[13].quantile95);
                                break;
                            case "down":
                                setPathName(financialParams[14].path);
                                setEqualizerPathName(equalizerPathnames[5].path);
                                setRevenue(financialParams[14].revenue);
                                setMedian(financialParams[14].median);
                                setCI5(financialParams[14].quantile5);
                                setCI95(financialParams[14].quantile95);
                                break;
                        };
                        break;

                    case "high":
                        switch (activeButtonId2) {
                            case "arrowUp":
                                setPathName(financialParams[15].path);
                                setEqualizerPathName(equalizerPathnames[6].path);
                                setRevenue(financialParams[15].revenue);
                                setMedian(financialParams[15].median);
                                setCI5(financialParams[15].quantile5);
                                setCI95(financialParams[15].quantile95);
                                break;

                            case "up":
                                setPathName(financialParams[16].path);
                                setEqualizerPathName(equalizerPathnames[7].path);
                                setRevenue(financialParams[16].revenue);
                                setMedian(financialParams[16].median);
                                setCI5(financialParams[16].quantile5);
                                setCI95(financialParams[16].quantile95);
                                break;

                            case "down":
                                setPathName(financialParams[17].path);
                                setEqualizerPathName(equalizerPathnames[8].path);
                                setRevenue(financialParams[17].revenue);
                                setMedian(financialParams[17].median);
                                setCI5(financialParams[17].quantile5);
                                setCI95(financialParams[17].quantile95);
                                break;
                        }
                        break;


                };

                break;

            case "msft":
                setTicker("MSFT");
                switch (activeButtonId) {

                    case "low":
                        switch (activeButtonId2) {
                            case "arrowUp":
                                setPathName(financialParams[18].path);
                                setEqualizerPathName(equalizerPathnames[0].path)
                                setRevenue(financialParams[18].revenue);
                                setMedian(financialParams[18].median);
                                setCI5(financialParams[18].quantile5);
                                setCI95(financialParams[18].quantile95);
                                break;
                            case "up":
                                setPathName(financialParams[19].path);
                                setEqualizerPathName(equalizerPathnames[1].path)
                                setRevenue(financialParams[19].revenue);
                                setMedian(financialParams[19].median);
                                setCI5(financialParams[19].quantile5);
                                setCI95(financialParams[19].quantile95);
                                break;
                            case "down":
                                setPathName(financialParams[20].path);
                                setEqualizerPathName(equalizerPathnames[2].path)
                                setRevenue(financialParams[20].revenue);
                                setMedian(financialParams[20].median);
                                setCI5(financialParams[20].quantile5);
                                setCI95(financialParams[20].quantile95);
                                break;
                        };
                        break;

                    case "moderate":
                        switch (activeButtonId2) {
                            case "arrowUp":
                                setPathName(financialParams[21].path);
                                setEqualizerPathName(equalizerPathnames[3].path)
                                setRevenue(financialParams[21].revenue);
                                setMedian(financialParams[21].median);
                                setCI5(financialParams[21].quantile5);
                                setCI95(financialParams[21].quantile95);
                                break;
                            case "up":
                                setPathName(financialParams[22].path);
                                setEqualizerPathName(equalizerPathnames[4].path)
                                setRevenue(financialParams[22].revenue);
                                setMedian(financialParams[22].median);
                                setCI5(financialParams[22].quantile5);
                                setCI95(financialParams[22].quantile95);
                                break;
                            case "down":
                                setPathName(financialParams[23].path);
                                setEqualizerPathName(equalizerPathnames[5].path)
                                setRevenue(financialParams[23].revenue);
                                setMedian(financialParams[23].median);
                                setCI5(financialParams[23].quantile5);
                                setCI95(financialParams[23].quantile95);
                                break;
                        };
                        break;

                    case "high":
                        switch (activeButtonId2) {
                            case "arrowUp":
                                setPathName(financialParams[24].path);
                                setEqualizerPathName(equalizerPathnames[6].path)
                                setRevenue(financialParams[24].revenue);
                                setMedian(financialParams[24].median);
                                setCI5(financialParams[24].quantile5);
                                setCI95(financialParams[24].quantile95);
                                break;
                            case "up":
                                setPathName(financialParams[25].path);
                                setEqualizerPathName(equalizerPathnames[7].path)
                                setRevenue(financialParams[25].revenue);
                                setMedian(financialParams[25].median);
                                setCI5(financialParams[25].quantile5);
                                setCI95(financialParams[25].quantile95);
                                break;
                            case "down":
                                setPathName(financialParams[26].path);
                                setEqualizerPathName(equalizerPathnames[8].path)
                                setRevenue(financialParams[26].revenue);
                                setMedian(financialParams[26].median);
                                setCI5(financialParams[26].quantile5);
                                setCI95(financialParams[26].quantile95);
                                break;
                        }
                        break;

                };

                break;

        default:
            break;

        };

    }


    useEffect(() => {
        handlePathname();
        handleProbabilityValue();
    }

    );

    return (

        <div className="text-onBackground lg:container bg-background md:shadow-2xl shadow-2xl lg:px-8 xl:pt-3 xl:pb-6 px-4 py-4 rounded-[25px]">

            <div className={`${sourceSerif.className} text-lg md:text-3xl pt-2 pb-4 lg:px-2`}>
                <div className="flex flex-row justify-between items-center lg:pb-4 tracking-tight">
                    <div className="flex">
                        <h1>Fundamental analysis | <span>Skidetics</span> + <span>Fritilaria</span> </h1>
                    </div>

                </div>
            </div>

            <div className="lg:px-8 px-5 pt-4 lg:pt-0 text-sm tracking-wide lg:leading-relaxed md:tracking-wide">
                <ul className="list-decimal">
                    <div className="flex flex-col pb-8 space-y-6">
                        <li className="lg:text-base">Select a company</li>
                        <div className="flex flex-row space-x-4 justify-center">

                            {companyButtons.map((button) => (
                                <button type="submit" onClick={() => {
                                    handleCompanyButton(button.id);

                                }} key={button.id} className={clsx('flex md:w-[100px] w-[80px] h-[32px] rounded-xl items-center justify-center',
                                    {
                                        'bg-elevated text-onBackground hover:bg-elevated2': button.state === false,
                                        'bg-primaryContainer opacity-95 text-onBackground': button.state === true
                                    })}>
                                    {button.label}
                                </button>
                            ))}

                        </div>

                    </div>
                    <li className="pb-4 lg:text-base">Use the equalizer to select the expected growth rate (%) and growth pattern for the next five years</li>
                    <div className="pb-6 lg:text-base space-y-[10px]">
                        <div className="flex justify-center pt-6 lg:pt-6">
                            <div className="flex flex-col space-y-10">
                                <div className="flex flex-row justify-center space-x-4">

                                    {buttons.map((button) => (
                                        <button type="submit" onClick={() => {
                                            handleGrowthButton(button.id);

                                        }} key={button.id} className={clsx('flex md:w-[100px] w-[80px] h-[36px] rounded-xl items-center justify-center',
                                            {
                                                'bg-elevated text-onBackground hover:bg-elevated2': button.state === false,
                                                'bg-primaryContainer text-onBackground opacity-95': button.state === true
                                            })}>
                                            {button.label}
                                        </button>
                                    ))}

                                </div>
                                <div className="w-[273px] min-h-[106px] block md:hidden">
                                    <RenderAnimation pathname={`./animation/equalizer/${equalizerPathName}.json`} loop={true} />
                                </div>
                                <div className="w-[340px] min-h-[106px] hidden md:block">
                                    <RenderAnimation pathname={`./animation/equalizer/${equalizerPathName}.json`} loop={true} />
                                </div>
                                <div className="flex flex-row justify-center space-x-4">

                                    {patternButtons.map((button) => (
                                        <button type="submit" onClick={() => {
                                            handlePatternButton(button.id);
                                        }} key={button.id} className={clsx('flex md:w-[100px] w-[80px] h-[34px] rounded-xl items-center justify-center',
                                            {
                                                'bg-elevated text-onBackground hover:bg-elevated2': button.state === false,
                                                'bg-primaryContainer text-onBackground opacity-95': button.state === true
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
                    <li className="pt-6 pb-4 lg:text-base">Check if the expected year five revenue is reasonable and aligns with your beliefs</li>
                    <div className="flex flex-col pb-6 lg:text-base space-y-1 justify-center">
                        <div className="flex flex-col space-y-[10px]">
                        </div>
                        <div className="flex justify-center lg:pt-4 pt-4">
                            <div className="flex w-2/4 justify-center text-onBackground shadow-3xl bg-elevated shadow-elevated4 text-base px-4 py-2 rounded-xl">
                                <h1 className="text-base tracking-wide lg:text-3xl">{revenue}M€</h1>
                            </div>
                        </div>


                    </div>
                    <li className="pt-4 pb-4  lg:text-base">Estimate the fair value of the selected company</li>
                    <div className="pb-12 lg:text-base space-y-[10px]">

                    </div>
                    <div className="flex justify-center">
                        <div className="block lg:hidden space-y-4">
                            <RenderAnimation pathname={`./animation/density/${pathName}.json`} loop={false} />
                            <label className="flex justify-center">Value / Share (€)</label>
                        </div>
                        <div className="space-y-4 hidden lg:block w-[340px]">
                            <RenderAnimation pathname={`./animation/density/${pathName}.json`} loop={false} />
                            <label className="flex justify-center">Value / Share (€)</label>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col pt-8 space-y-8">
                            <div className="flex flex-row justify-center space-x-4">

                                {probabilityButtons.map((button) => (
                                    <button type="submit" onClick={() => {
                                        handleProbabilityButton(button.id);

                                    }} key={button.id} className={clsx('flex md:w-[120px] w-[80px] h-[32px] rounded-xl items-center lg:text-base text-sm justify-center',
                                        {
                                            'bg-elevated text-onBackground hover:bg-elevated2': button.state === false,
                                            'bg-primaryContainer text-onBackground opacity-95': button.state === true
                                        })}>
                                        <div className="flex flex-row justify-center">

                                            {button.id == 'fair' ? button.label : button.icon}

                                        </div>
                                    </button>
                                ))}

                            </div>
                            <div className="container w-4/4  text-onBackground shadow-2xl bg-elevated  px-4 py-4 rounded-xl">
                                <div className="flex text-center justify-center lg:text-base text-sm">

                                    {probabilityType === 'median' && (<p> {ticker} fair value is {probabilityValue} (€).</p>)}
                                    {probabilityType === 'ci5' && (<p>There&apos;s 5% probability that {ticker} <br /> fair value is less than {probabilityValue} (€).</p>)}
                                    {probabilityType === 'ci95' && (<p>There&apos;s 5% probability that {ticker} <br /> fair value is more than {probabilityValue} (€).</p>)}

                                </div>

                            </div>

                            <div>
                                <hr className="opacity-10" />
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

                    <Footer />


                </ul>
            </div>
        </div>
    );
}

