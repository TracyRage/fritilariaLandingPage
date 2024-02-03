import Guide from "./ui/Guide";
import Manifesto from "./ui/Manifesto";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen border-2 rounded-[25px] min-w-screen lg:w-[1000px] border-primary py-6 px-5 lg:py-4 lg:px-6">
      <div className="flex flex-col">
      <Manifesto/>
      <Guide/>
      </div>
    </div>
  );
}