import Guide from "./ui/Guide";
import HeroTickerScroll from "./ui/HeroTickerScrool";
import Manifesto from "./ui/Manifesto";

export default async function Home() {



  return (
    <section>
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