import Guide from "./ui/Guide";
import HeroTickerScroll from "./ui/HeroTickerScrool";
import Manifesto from "./ui/Manifesto";

export default async function Home() {

  const jsonLd = {

    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Skidetica',
    image: 'https://rmhsfgybzskyoimjlpfe.supabase.co/storage/v1/object/public/logo/friti_logo_dark_cropped_og.png',
    description: "Transform your opinion into statistically accurate fundamental analysis",
    applicationCategory: 'Business',
    downloadURL: 'https://skidetica.com',
    operatingSystem: 'Android',
    isAccesibleForFree: true,
    offers: {
      '@type': "Offer",
      price: '0',
      priceCurrency: 'USD'
    },
    softwareVersion: "1.1.0",
    installURL: 'https://skidetica.com',
    aggregateRating: {
      '@type': "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "10000"
    },
    author: {
      '@type': "Organization",
      name: "Skidetica Labs",
      url: "https://skidetica.com/company",
      contactPoint: {
        "@type": "ContactPoint",
        email: "contanct@skidetica.com"
      }
    },

  }

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex lg:flex-col h-fit rounded-[25px] lg:w-[600px] xl:w-[840px]">
        <div className="flex flex-col lg:space-y-10">
          <div className="hidden lg:block">
          <HeroTickerScroll/>
          </div>
          <div className="vvs:w-[295px] vs:w-[320px] big:space-y-10 lg:space-y-10 s:w-[335px] m:w-full xm:w-[780px] xm+:w-[810px] xxm:w-[885px] lg:w-[600px] xl:w-[840px]">
          <Guide />
          <Manifesto />
          </div>
        </div>
      </div>
    </section>
  );
}