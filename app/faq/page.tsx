import Link from "next/link";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import MacroTable from "./MacrosTable";
import RenderTermsListItem, { RenderFAQListItem} from "../ui/TermsListItem";



export default function FAQ() {
    const LinkIcon = ArrowLeftIcon;
    return (
 
          <div className="flex flex-col h-fit border-2 rounded-[25px] min-w-screen border-primary text-onBackground">
      <div className="flex flex-col p-6">
        <div className="flex flex-row items-baseline">
          <div className="flex">
            <Link key={"Home"} href={"/"}>
              <LinkIcon className="w-[20px] font-extrabold hidden md:block" />
            </Link>
          </div>
          <div className="flex">
            <h1 className={`${sourceSerif.className} text-xl pb-6`}>
              FAQ
            </h1>
          </div>
        </div>

        <RenderFAQListItem name="What's Skidetica?" content="Skidetica /σχέδιο/ represents the process of converting subjective opinions into Bayesian statistical models." />
        <RenderFAQListItem name="What's Fritilaria?" content="Fritilaria represents the first implementation of skidetics in realm if value investing and by extension finance." />
        <RenderFAQListItem name="What does Fritilaria do?" content="Simply put, Fritilaria calculates fundamental value of public traded companies." />
        <RenderFAQListItem name="How does Fritilaria do it?" content="Fritilaria takes user's subjective opinion and fits it to a predifined Bayesian model." />
        <RenderFAQListItem name="What's a predifined model?" content="Predifined model represents a Bayesian model which is trained on recently published accounting data" />
        <RenderFAQListItem name="Why the model is predifined?" content="In order to became a full model, Fritilaria needs your opinion." />
        <RenderFAQListItem name="What's accounting data?" content="Data extracted from publicly available data such as annual and quarter reports published by companies themselves." />
        <RenderFAQListItem name="Do predifined models account for beta, default rate, risk premium and company specific statistics such as cost of debt?" content="Yes. They do. We create models what are based on ranges of values. It means that Fritilaria models take into account almost infinite number of macroeconomic scenarios. Check Table 1 below." />
        <RenderFAQListItem name="Can you rely on Fritilaria?" content="Fritilaria transforms user's subjective opinion into probabilistic model. Fritilaria mirrors user's outlook on a specific company. If user feels optimistic, then Fritilaria will provide optimistic results. User is in charge of reasoning and final conslusion. That's why Fritilaria is not a financial advisement app." />
        <RenderFAQListItem name="Does Fritilaria employ AI?" content="No." />
        <RenderFAQListItem name="Is Fritilaria a techical analysis tool?" content="No." />
        <RenderFAQListItem name="Does Fritilaria provides ratios such as P/E?" content="No. Fritilaria does not take into account company stock price. Fritilaria is immune to market mood swings, speculative news or any kind short-term volatility." />

      </div>
      <div className="flex justify-center mx-2 mt-8 mb-8 ">
      <MacroTable/>
      </div>
    </div>
  
  );
   
}