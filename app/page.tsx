import Guide from "./ui/Guide";
import Manifesto from "./ui/Manifesto";

export default function Home() {

  return (
    <div className="flex lg:flex-col min-h-screen border-2 rounded-[25px] min-w-screen sm:w-fit md:w-fit lg:w-[600px] xl:w-[950px] border-primary py-5 px-5 lg:py-5 lg:px-5">
      <div className="flex flex-col">
      <Manifesto/>
      <Guide/>
      </div>
    </div>
  );
}