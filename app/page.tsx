import Guide from "./ui/Guide";
import HeroTickerScroll from "./ui/HeroTickerScrool";
import Manifesto from "./ui/Manifesto";

export default async function Home() {

  const jsonLd = {

    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Skidetica',
    image: 'https://rmhsfgybzskyoimjlpfe.supabase.co/storage/v1/object/public/logo/friti_logo_dark_cropped_google.png',
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
      <div className="flex lg:flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[840px]">
        <div className="flex flex-col lg:space-y-10">
          <div className="hidden lg:block">
          <HeroTickerScroll/>
          </div>
          <Guide />
          <Manifesto />
        </div>
      </div>
    </section>
  );
}