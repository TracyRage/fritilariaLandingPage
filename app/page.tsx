import Guide from "./ui/Guide";
import Manifesto from "./ui/Manifesto";

export default function Home() {


  return (
    <div className="flex lg:flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[840px]">
      <div className="flex flex-col lg:space-y-10">
      <Manifesto/>
      <Guide/>
      </div>
    </div>
  );
}