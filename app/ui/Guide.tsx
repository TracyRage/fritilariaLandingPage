import RenderAnimation from "./RenderDensityGraph"
import { sourceSerif } from "./fonts";

export default function Guide() {
    return (

        <div className="text-onBackground">

            <div className={`${sourceSerif.className} text-lg md:text-3xl md:pt-14 pt-6 pb-4 px-2`}>
                <span className="text-fritilariaGreen">Skidetics</span> + <span className="text-primary">Fritilaria</span> = grounded fundamental analysis
            </div>

            <div className="pt-4 pb-14 px-6 tracking-wide text-sm lg:leading-relaxed">
                <ul className="list-decimal">
                    <li className="pb-4 lg:text-lg">Choose growth magnitude (%) and pattern for the next 5 years.</li>
                    <div className="flex md:justify-center lg:pt-6 py-6 md:pe-6">
                        <div className="w-[423px] h-[256px] hidden md:block">
                            <RenderAnimation pathname="./animation/equalizer/equalizer_arrow_up_high.json" loop={true} />
                        </div>
                        <div className="w-[223px] min-h-[56px] block md:hidden">
                            <RenderAnimation pathname="./animation/equalizer/equalizer_arrow_up_high.json" loop={true} />
                        </div>
                    </div>
                    <li className="pt-14 pb-12 lg:text-lg">Get Value/Share graph.</li>
                </ul>
                <div className="flex md:justify-center">
                    {/* <div className="w-[577px] h-[537px]"> */}
                        {/* <RenderAnimation pathname="./conclusion" loop={false} /> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}