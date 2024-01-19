import { sourceSerif } from "./fonts"


export default function Manifesto() {
    return (
        <div className="hidden md:block text-onBackground">
                    <div>
                        <h1 className={`${sourceSerif.className} text-xl md:text-3xl pb-4`}>
                            <span className="text-fritilariaGreen">Skidetic</span> manifesto
                        </h1>
                    </div>
                    <div className="lg:text-lg px-6 pt-4 lg:tracking-wide lg:leading-relaxed">
                        <ul className="list-disc">
                            <li className="pb-4">Skidetika represents the process of transforming opinionated banter in rigorous scientific discussion.</li>
                            <li className="pb-4">Skidetika tries to employ both human subjectivity and robust Bayesian statistical models for accurate probability estimation and future events anticipation. </li>
                            <li className="pb-4"><span className="text-primary">Fritilaria</span> represents the first implementation of <span className="text-fritilariaGreen">skidetics</span> in realm of <span className="text-fritilariaGreen">value investing</span>. </li>
                            <li><span className="text-primary">Fritilaria</span> performs a <span className="text-fritilariaGreen">skidetik fundamental analysis</span> of any publicly traded stock by employing user&apos;s subjective opinion and delivers accurate statistical conclusions. </li>
                        </ul>
                    </div>
                </div>
    );
}