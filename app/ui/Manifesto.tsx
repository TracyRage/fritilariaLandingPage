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
                                Have you ever tried to perform a fundamental analysis but got lost in math? Or struggled to transform your personal opions in a statistically robust hypotheses? You have tried. You have struggled. The majority of retail investors have found challenging to perform statistically sound fundamental analyses and usually delegate important financial decisions to blind chance.
                                </li>
                            <li className="pb-4">
                                However, there is a solution - <span className="text-fritilariaGreen">Skidetica</span> + <span className="text-primary">Fritilaria</span>.
                            </li>

                            <li className="pb-4">
                                 <span className="text-fritilariaGreen">Skidetika </span> represents the process of transforming opinionated banter in rigorous scientific discussion. Skidetika employs your subjective opinion and robust statistical models for accurate probability estimation. Simultaneously, <span className="text-primary">Fritilaria</span> app represents the first implementation of skidetics in realm of <span className="text-fritilariaGreen">value investing</span>.

                            </li>
                            <li className="pb-4">Fritilaria performs a skidetik fundamental analysis of publicly traded stock by employing user&apos;s subjective opinion and estimates the fair value of any given company.</li>
                            <li>
                                Do you want to try it? It&apos;s easy, <span className="text-fritilariaGreen"> do it below </span>.
                
                            </li>

                        </ul>
                    </div>
                </div>
    );
}