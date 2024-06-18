import Guide from "./ui/Guide";
import Manifesto from "./ui/Manifesto";

export default function Home() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Skidetica',
    image: 'https://fortiqrsbyglyzsgzcim.supabase.co/storage/v1/object/public/logo/friti_logo_dark_cropped.png',
    description: "Transform your opinion into statistically accurate fundamental analysis",
    publisher: 'Skidetica Labs',
    category: 'Business',
    downloadURL: 'htpps://fritilaria.com',
    operatingSystem: 'Android 11',
    isAccesibleForFree: true,
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