import { sourceSerif } from "./fonts"


export default function Manifesto() {
    return (
        <div className="hidden md:block text-onBackground">
                    <div>
                        <h1 className={`${sourceSerif.className} text-xl px-2 md:text-3xl pb-4`}>
                            <span className="text-fritilariaGreen">Skidetic</span> manifesto
                        </h1>
                    </div>
                    <div className="px-6 pt-4 lg:text-lg lg:leading-relaxed">
                        <ul className="list-disc">
                            <li className="pb-4">
                                Have you ever tried to perform a fundamental analysis but got lost in math? Or struggled to transform your personal opions in a statistically robust hypotheses? 
                                </li>
                            <li className="pb-4">
                                You have tried. You have struggled. The majority of retail investors have found challenging to perform statistically sound fundamental analyses and usually delegate important financial decisions to blind chance.
                            </li>
                            <li className="pb-4">
                                However, there is a solution - <span className="text-fritilariaGreen">Skidetica</span> + <span className="text-primary">Fritilaria</span>.
                            </li>

                            <li className="pb-4">
                                 Skidetika represents the process of transforming opinionated banter in rigorous scientific discussion.
                            </li>
                            <li className="pb-4">
                                Skidetika tries to employ both human subjectivity and robust Bayesian statistical models for accurate probability estimation and future events anticipation.
                            </li>
                            <li className="pb-4"><span className="text-primary">Fritilaria</span> app represents the first implementation of <span className="text-fritilariaGreen">skidetics</span> in realm of <span className="text-fritilariaGreen">value investing</span>. </li>
                            <li className="pb-4"><span className="text-primary">Fritilaria</span> performs a <span className="text-fritilariaGreen">skidetik fundamental analysis</span> of publicly traded stock by employing user&apos;s subjective opinion and delivers accurate statistical conclusions.</li>
                            <li>
                                Do you want to try it? <span className="text-fritilariaGreen"> It's easy, do it below. </span>
                
                            </li>

                        </ul>
                    </div>
                </div>
    );
}