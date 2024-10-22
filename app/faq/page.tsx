import Link from "next/link";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { RenderFAQListItem, RenderFAQListItem2 } from "../ui/TermsListItem";


export const metadata = {
  title: 'FAQ',
  keywords: ['skidetica faq, skidetica simpacks, skidetica runs, skidetica questions'],
  alternates: {
    canonical: '/faq'
  }


}

export default function FAQ() {
  const LinkIcon = ArrowLeftIcon;

  const jsonLd = {

    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [

      {
        '@type': "Question",
        name: "What's Skidetica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skidetica (/σχέδιο/) represents a new technology that converts subjective opinions into robust statistical financial models."
        }

      },

      {
        '@type': "Question",
        name: "How can Skidetica help a retail investor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skidetica can generate an accurate estimate of the fair value for any given publicly traded stock."
        }

      },

      {
        '@type': "Question",
        name: "How does Skidetica do that?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skidetica supercharges classical fundamental analysis. It employs both high-quality accounting data and the user's subjective opinion."

        }

      },
      {
        '@type': "Question",
        name: "What's Skidetica fair value?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skidetica fair value represents the fair value of a publicly traded stock given all the possible and plausible macroeconomic scenarios."

        }

      },

      {
        '@type': "Question",
        name: "Can I use Skidetica for the valuation of start-ups or companies with negative returns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can. But you have to be very optimistic during the simulation process."

        }

      },

      {
        '@type': "Question",
        name: "What is a simulation package (simpack)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simpacks represent a group of Skidetica models. These models are attributed to a specific set of publicly traded companies."
        }

      },

      {
        '@type': "Question",
        name: "What is a simulation run (simrun)",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A very singular analysis using Skidetica constitutes a simulation run."
        }

      },

    ]

  }

  return (

    <section id="skideticaFAQ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[840px] dark:text-md_theme_dark_onSurface text-md_theme_light_onSurface dark:bg-md_theme_dark_surface_lowest bg-md_theme_light_surface_lowest shadow-sm shadow-md_theme_light_scrim py-5 px-5 lg:py-5 lg:px-8">
        <div className="flex flex-col pb-8">
          <div className="flex flex-row lg:space-x-4 items-baseline pb-4">
            <div className="flex">
              <Link key={"Home"} href={"/"}>
                <LinkIcon className="w-[20px] font-extrabold lg:block hidden" />
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className={`${sourceSerif.className} text-xl md:text-3xl tracking-tight pb-2`}>
                Frequently asked questions
              </h1>
              <h2 className={`${sourceSerif.className} text-sm md:text-lg tracking-tight pb-4 `}>
                Next-generation fundamental analysis
              </h2>
            </div>
          </div>

          <div id="faqList" className="flex flex-col space-y-4">

            <RenderFAQListItem name="What's Skidetica?" content="Skidetica (/σχέδιο/) represents a new technology that converts subjective opinions into robust statistical financial models." />
            <RenderFAQListItem name="How can Skidetica help a retail investor?" content="Skidetica can generate an accurate estimate of the fair value for any given publicly traded stock." />
            <RenderFAQListItem name="How does Skidetica do that?" content="Skidetica supercharges classical fundamental analysis. It employs both high-quality accounting data and the user's subjective opinion." />


            <RenderFAQListItem name="Why do you need my opinion?" content="Statistical models are accurate only if they are grounded in reality. Your subjective opinion serves as a lightning rod." />
            <RenderFAQListItem name="So how do you use my opinion?" content="User opinions can be transformed into probability distributions. These distributions are integrated into Skidetica's models. In this way, you receive a bespoke analysis and a personalized fair value." />
            <RenderFAQListItem name="Is my opinion that important?" content="Yes, your opinion is very important. Half of Skidetica's processes rely on accounting data. The other half is supposed to integrate the overall mood regarding the stock. You provide the mood." />

            <RenderFAQListItem name="What's Skidetica fair value?" content="Skidetica fair value represents the fair value of a publicly traded stock given all the possible and plausible macroeconomic scenarios. Skidetica gives you a fair value that takes into account all the catastrophic, bad, good, and very good market scenarios." />
            <RenderFAQListItem name="Can I rely on Skidetica?" content="Skidetica transforms the user's subjective opinion into a probabilistic model. Skidetica mirrors the user's outlook on a specific stock. If the user feels optimistic, then Skidetica will provide optimistic results. Skidetica simply tries to convert your opinion into a reliable statistical estimate. That's why Skidetica is not a financial advisement tool." />
            <RenderFAQListItem name="What is a simulation package (simpack)?" content="Simpacks represent a group of Skidetica models. These models are attributed to a specific set of publicly traded companies. Simpacks are typically grouped by country, industry, or some other abstract category." />
            <RenderFAQListItem name="What is a simulation run (simrun)?" content="A very singular analysis using Skidetica constitutes a simulation run." />
            <RenderFAQListItem name="I bought a simpack. Will it be mine forever? Will I receive updates for it?" content="Yes. When you buy a simpack, you also buy all future updates indefinitely." />
            <RenderFAQListItem name="Do you provide subscriptions?" content="No." />

            <RenderFAQListItem name="Should I care about things such as beta, default rate, premium rate, and so on?" content="No, you don't. Skidetica does it for you." />
            <RenderFAQListItem name="So I cannot choose my beta, default rate, and the other company-specific metrics?" content="No, you don't need to. Skidetica works with ranges of macroeconomic estimates. This means that Skidetica's final outputs account for all possible betas, default rates, premiums, and so on." />
            <RenderFAQListItem2 name="Could you disclose some of these estimate ranges?" content="" />

            <RenderFAQListItem name="Skidetica shows that this popular stock is almost worthless. Why?" content="Skidetica does not depend on stock price. Very often, popular stocks are not as good as you might expect, and the price is heavily distorted. Thus, the Skidetica team recommends using Skidetica as a reality checker or at least as a baseline for your further deliberations." />
            <RenderFAQListItem name="Can I use Skidetica for the valuation of start-ups or companies with negative returns?" content="Yes, you can. But you have to be very optimistic during the simulation process." />
            <RenderFAQListItem name="Does Skidetica provide ratios such as P/E?" content="No. Skidetica does not take into account stock price."/>
            <RenderFAQListItem name="Does Skidetica employ AI or LLMs?" content="No." />
            <RenderFAQListItem name="Is Skidetica a technical analysis tool?" content="No." />

          </div>

        </div>
      </div>

    </section>
  );

}