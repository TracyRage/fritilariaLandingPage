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
        name: "What is Skidetica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skidetica /σχέδιο/ represents a new technology which implies the process of converting subjective opinions into robust statistical models"
        }

      },

      {
        '@type': "Question",
        name: "How can Skidetica help a retail investor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skidetica can generate accurate estimate of the fair value for any given publicly traded company."
        }

      },

      {
        '@type': "Question",
        name: "How does Skidetica do that?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skidetica performs a new type of fundamental analysis which employs both high quality accounting data and users subjective opinion."
        
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

            <RenderFAQListItem name="What's Skidetica?" content="Skidetica /σχέδιο/ represents a new technology which converts subjective opinions into robust statistical models" />
            <RenderFAQListItem name="How can Skidetica help a retail investor?" content="Skidetica can generate accurate estimate of the fair value for any given publicly traded company." />
            <RenderFAQListItem name="How does Skidetica do that?" content="Skidetica supercharges the classical fundamental analysis. It employs both high quality accounting data and user's subjective opinion." />
            <RenderFAQListItem name="Why do you need my opinion?" content="Statistical models are accurate only in case then they are grounded in reality. Your subjective opinion serves as a lighting rod." />
            <RenderFAQListItem name="So how do you use my opinion?" content="User's opinions can be transformed in probability distributions. These distributions are integrated into Skidetica models. In this way, you are getting a bespoke analysis and a personal fair value." />
            <RenderFAQListItem name="Is my opinion that important?" content="Yes. Your opinion is very important. Half of the Skidetica process relies on accounting data. The other half is supposed to integrate overall mood regrading the stock. You provide the mood." />
            <RenderFAQListItem name="Should I care about things such as beta, default rate, premium rate and so on?" content="No. You don't. Skidetica does it for you." />
            <RenderFAQListItem name="So I cannot choose my beta, default rate and other company specifie metrics?" content="No. You don't need it. Skidetica works with ranges of macroeconomic estimates. It means that Skidetica final outputs account for all the possible betas, default rates, premiums and so on." />
            <RenderFAQListItem2 name="Could you disclose some of these estimate ranges?" content="" />
          </div>

        </div>
      </div>

    </section>
  );

}