import Guide from "./ui/Guide";
import Manifesto from "./ui/Manifesto";

export default function Home() {

  return (
    <div className="flex flex-col h-fit border-2 rounded-[25px] lg:w-[1000px] lg:h-fit w-auto border-primary">
      <div className="flex flex-col py-4 px-4">
      <Manifesto/>
      <Guide/>
      </div>
    </div>
  );
}