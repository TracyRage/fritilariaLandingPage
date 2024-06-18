import Guide from "./ui/Guide";
import Manifesto from "./ui/Manifesto";

export default function Home() {

  const jsonLd = {

    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Skidetica',
    image: 'https://fortiqrsbyglyzsgzcim.supabase.co/storage/v1/object/public/logo/friti_logo_dark_cropped.png',
    description: "Transform your opinion into statistically accurate fundamental analysis",
    publisher: 'Skidetica Labs',
    applicationCategory: 'Business',
    downloadURL: 'https://fritilaria.com',
    operatingSystem: 'Android',
    isAccesibleForFree: true,
    offers: {
      '@type': "Offer",
      price: '0',
      priceCurrency: 'USD'
    },
    softwareVersion: "1.1.0",
    installURL: 'https://fritilaria.com',
    aggregateRating: {
      '@type': "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "10000"
    }

  }

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex lg:flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[840px]">
        <div className="flex flex-col lg:space-y-10">
          <Manifesto />
          <Guide />
        </div>
      </div>
    </section>
  );
}