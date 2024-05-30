import Link from "next/link";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import MacroTable from "./MacrosTable";
import RenderTermsListItem, { RenderFAQListItem, RenderFAQListItem2 } from "../ui/TermsListItem";
import Image from "next/image";
import Footer from "../ui/footer";


export const metadata = {
  title: 'FAQ',
  description: 'Fritilaria most frequently asked questions',
  keywords: ['fritilaria', 'skidetica labs', 'skidetic', 'faq', 'question', 'algorithm', 'beta', 'cost of capital', 'models', 'statistics'],
  alternates: {
    canonical: '/faq'
  }


}

export default function FAQ() {
  const LinkIcon = ArrowLeftIcon;
  return (

    <div className="flex flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[840px] border-primary text-onBackground bg-background py-5 px-5 lg:py-5 lg:px-8 md:shadow-2xl shadow-2xl">
      <div className="flex flex-col">
        <div className="flex flex-row lg:space-x-4 items-baseline pb-4">
          <div className="flex">
            <Link key={"Home"} href={"/"}>
              <LinkIcon className="w-[20px] font-extrabold lg:block hidden" />
            </Link>
          </div>
          <div className="flex">
            <h1 className={`${sourceSerif.className} text-xl md:text-3xl tracking-tight pb-6`}>
              FAQ
            </h1>
          </div>
        </div>

        <div className="flex flex-col space-y-4">

          <RenderFAQListItem name="What's Skidetica?" content="Skidetica /σχέδιο/ represents the process of converting subjective opinions into Bayesian statistical models." />
          <RenderFAQListItem name="What's Fritilaria?" content="Fritilaria represents the first implementation of skidetics in realm if value investing and by extension finance." />
          <RenderFAQListItem name="What does Fritilaria do?" content="Simply put, Fritilaria calculates fundamental value of public traded companies." />
          <RenderFAQListItem name="How does Fritilaria do it?" content="Fritilaria takes user's subjective opinion and fits it to a predifined Bayesian model." />
          <RenderFAQListItem name="What's a predifined model?" content="Predifined model represents a Bayesian model which is trained on recently published accounting data" />
          <RenderFAQListItem name="Why the model is predifined?" content="In order to became a full model, Fritilaria needs your opinion." />
          <RenderFAQListItem name="What's accounting data?" content="Data extracted from publicly available data such as annual and quarter reports published by companies themselves." />
          <RenderFAQListItem2 name="What about beta, default rate, premium rate?" content="Yes. They do. We create models what are based on ranges of values. It means that Fritilaria models take into account almost infinite number of macroeconomic scenarios (Table 1)." />
          <RenderFAQListItem name="Can you rely on Fritilaria?" content="Fritilaria transforms user's subjective opinion into probabilistic model. Fritilaria mirrors user's outlook on a specific company. If user feels optimistic, then Fritilaria will provide optimistic results. User is in charge of reasoning and final conslusion. That's why Fritilaria is not a financial advisement app." />
          <RenderFAQListItem name="Does Fritilaria employ AI?" content="No." />
          <RenderFAQListItem name="Is Fritilaria a techical analysis tool?" content="No." />
          <RenderFAQListItem name="Does Fritilaria provides ratios such as P/E?" content="No. Fritilaria does not take into account company stock price. Fritilaria is immune to market mood swings, speculative news or any kind short-term volatility." />
        </div>

        <Footer />



      </div>
    </div>

  );

}