import Link from "next/link";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import MacroTable from "./MacrosTable";
import RenderTermsListItem, { RenderFAQListItem} from "../ui/TermsListItem";
import Image from "next/image";



export default function FAQ() {
    const LinkIcon = ArrowLeftIcon;
    return (
 
          <div className="flex flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[950px] border-primary text-onBackground py-5 px-5 lg:py-5 lg:px-8 lg:shadow-2xl lg:shadow-primary shadow-md shadow-primary">
      <div className="flex flex-col">
      <div className="flex flex-row lg:space-x-4 items-baseline">
          <div className="flex">
            <Link key={"Home"} href={"/"}>
              <LinkIcon className="w-[20px] font-extrabold lg:block hidden" />
            </Link>
          </div>
          <div className="flex">
            <h1 className={`${sourceSerif.className} text-xl md:text-3xl md:tracking-tight pb-6`}>
              FAQ
            </h1>
          </div>
        </div>

        <div className="">

        <RenderFAQListItem name="What's Skidetica?" content="Skidetica /σχέδιο/ represents the process of converting subjective opinions into Bayesian statistical models." />
        <RenderFAQListItem name="What's Fritilaria?" content="Fritilaria represents the first implementation of skidetics in realm if value investing and by extension finance." />
        <RenderFAQListItem name="What does Fritilaria do?" content="Simply put, Fritilaria calculates fundamental value of public traded companies." />
        <RenderFAQListItem name="How does Fritilaria do it?" content="Fritilaria takes user's subjective opinion and fits it to a predifined Bayesian model." />
        <RenderFAQListItem name="What's a predifined model?" content="Predifined model represents a Bayesian model which is trained on recently published accounting data" />
        <RenderFAQListItem name="Why the model is predifined?" content="In order to became a full model, Fritilaria needs your opinion." />
        <RenderFAQListItem name="What's accounting data?" content="Data extracted from publicly available data such as annual and quarter reports published by companies themselves." />
        <RenderFAQListItem name="Do predifined models account for beta, default rate, risk premium and company specific statistics such as cost of debt?" content="Yes. They do. We create models what are based on ranges of values. It means that Fritilaria models take into account almost infinite number of macroeconomic scenarios (Table 1)." />
      <div className="flex justify-center mx-2 mt-8 mb-8 ">
      <MacroTable/>
      </div>
        <RenderFAQListItem name="Can you rely on Fritilaria?" content="Fritilaria transforms user's subjective opinion into probabilistic model. Fritilaria mirrors user's outlook on a specific company. If user feels optimistic, then Fritilaria will provide optimistic results. User is in charge of reasoning and final conslusion. That's why Fritilaria is not a financial advisement app." />
        <RenderFAQListItem name="Does Fritilaria employ AI?" content="No." />
        <RenderFAQListItem name="Is Fritilaria a techical analysis tool?" content="No." />
        <RenderFAQListItem name="Does Fritilaria provides ratios such as P/E?" content="No. Fritilaria does not take into account company stock price. Fritilaria is immune to market mood swings, speculative news or any kind short-term volatility." />

        </div>

        <div className="flex flex-col lg:pt-12 pt-6 space-y-6 text-onBackground align-bottom">
          <hr className="opacity-50" />
          <div className="flex flex-row space-x-6 justify-center">

            <Image src="reddit.svg" width={25} height={10} alt="x" />
            <Image src="x.svg" width={20} height={10} alt="x" />
            <Image src="threads.svg" width={20} height={10} alt="x" />
            <Image src="discord.svg" width={25} height={10} alt="x" />

          </div>
           <div className="flex flex-col space-y-2">
            <p className="text-center text-xs text-onBackground opacity-50">Moldova IT Park resident. Edineț, MD-4601, Republic of Moldova.</p>
            <p className="text-center text-xs text-onBackground opacity-50">@ 2024 Aremti Statistica. All rights Reserved.</p>
          </div>
        </div>



      </div>
    </div>
  
  );
   
}