import Guide from "./ui/Guide";
import Manifesto from "./ui/Manifesto";

export default function Home() {

  return (
    <div className="flex lg:flex-col min-h-screen rounded-[25px] min-w-screen sm:w-fit md:w-fit lg:w-[600px] xl:w-[950px]">
      <div className="flex flex-col lg:space-y-8">
      <Manifesto/>
      <Guide/>
      </div>
    </div>
  );
}