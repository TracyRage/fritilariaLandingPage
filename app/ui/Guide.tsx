'use client';
import { use, useEffect, useState } from "react";
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

    const [pathName, setPathName] = useState('arrow_up_low')
    const [pathName2, setPathName2] = useState('arrowUp')

    const handlePathname = () => {

        const activeButtonId = buttons.find(button => button.state === true)?.id;
        const activeButtonId2 = patternButtons.find(button => button.state === true)?.id;

        switch (activeButtonId) {

            case "low":
                switch (activeButtonId2) {
                    case "arrowUp":
                        setPathName("arrow_up_low");
                        break;
                    case "up":
                        setPathName("ascending_low");
                        break;
                    case "down":
                        setPathName("descending_low");
                        break;
                }

            //  case "moderate":
            //      switch (activeButtonId2) {
            //          case "arrowUp":
            //              setPathName("equalizer_arrow_up_moderate");
            //          case "up":
            //              setPathName("equalzier_ascending_moderate");
            //          case "down":
            //              setPathName("equalizer_descending_moderate");
            //      }

            //  case "high":
            //      switch (activeButtonId2) {
            //          case "arrowUp":
            //              setPathName("equalizer_arrow_up_high");
            //          case "up":
            //              setPathName("equalzier_ascending_high");
            //          case "down":
            //              setPathName("equalizer_descending_high");
            //      }

            //  default:
            //      return "";

        }


    }


    useEffect(() => {
        handlePathname();
    }

    );



    return (

        <div className="text-onBackground">

            <div className={`${sourceSerif.className} text-lg md:text-3xl md:pt-14 py-4 ps-2`}>
                <span className="text-fritilariaGreen">Skidetics</span> + <span className="text-primary">Fritilaria</span> = grounded fundamental analysis
            </div>

            <div className="px-6 pt-4 text-sm tracking-wide pb-14 lg:leading-relaxed">
                <ul className="list-decimal">
                    <li className="pb-6 lg:text-lg">Choose growth magnitude (%) and pattern for the next 5 years.</li>
                    <div className="flex justify-center lg:pt-6 md:pe-6">
                        <div className="w-[423px] h-[256px] hidden md:block">
                            <RenderAnimation pathname={`./animation/equalizer/equalizer_arrow_up_low.json`} loop={true} />
                        </div>
                        <div className="flex flex-col space-y-10 pb-4">
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
                                            className={clsx('invert', {'invert-0': button.state === true})}
                                             />


                                    </button>
                                ))}

                            </div>

                        </div>
                    </div>
                    <li className="pb-8 pt-12 lg:text-lg">Get Value/Share graph.</li>
                    <div className="flex justmd:ify-center">
                        <div>
                            <RenderAnimation pathname={`./animation/density/density_${pathName}.json`} loop={true} />
                        </div>
                        <div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}

