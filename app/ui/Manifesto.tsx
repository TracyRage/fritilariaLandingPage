import { sourceSerif } from "./fonts"


export default function Manifesto() {
    return (
        <div className="hidden lg:block text-onBackground lg:container lg:bg-background lg:shadow-2xl  lg:px-4 lg:pt-2 lg:pb-6 lg:rounded-3xl">
            <div>
                <h1 className={`${sourceSerif.className} text-xl px-2 lg:text-3xl pb-4`}>
                    <p>Skidetic <span className="tracking-wide">/σχέδιο/</span> manifesto</p>
                </h1>
            </div>
            <div className="px-6 pt-2 lg:text-base lg:leading-relaxed md:tracking-wide">
                <ul className="list-disc">
                    <li className="pb-4">
                        Have you ever tried to value invest and perform high-quality fundamental analyses? <br></br> Did you get lost in math?
                    </li>
                    <li className="pb-4">
                        You&apos;ve definitely tried. You&apos;ve definitely got lost.
                    </li>
                    <li className="pb-4">
                        The majority of retail investors have found it challenging to perform good quality fundamental analyses and usually pretend to value invest.
                    </li>
                    <li className="pb-4">
                        However, there is a solution - <span className="text-fritilariaGreen">Skidetica</span> + <span className="text-primary">Fritilaria</span>.
                    </li>

                    <li className="pb-4">
                    Skidetika is a new technology that involves transforming subjective opinions into rigorous scientific discussions. It employs your intuition and creates robust fundamental analysis models for  <span className="text-fritilariaGreen">value investing</span>.

                    </li>

                    <li>
                    Fritilaria app employs skidetika and assists you in finding the  <span className="text-fritilariaGreen">fair value</span> of your favorite stocks.

                    </li>


                    <div className="flex flex-col pt-8 space-y-6 text-onBackground">
                        <hr className="opacity-10" />
                        <div className="flex flex-row justify-end">
                            <p>Do you want to try it? It&apos;s easy, do it below.</p>
                        </div>
                    </div>



                </ul>
            </div>
        </div>
    );
}