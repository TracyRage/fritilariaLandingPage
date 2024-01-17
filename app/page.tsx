import Guide from "./ui/Guide";
import Manifesto from "./ui/Manifesto";

export default function Home() {

  return (
    <div className="flex flex-col h-fit border-2 rounded-[25px] w-[1000px] me-40 border-primary">
      <div className="flex flex-col ps-6 pt-6">
      <Manifesto/>
      <Guide/>
      </div>
    </div>
  );
}