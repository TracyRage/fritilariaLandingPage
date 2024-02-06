import Guide from "./ui/Guide";
import Manifesto from "./ui/Manifesto";

export default function Home() {

  return (
    <div className="flex lg:flex-col min-h-screen rounded-[25px] min-w-screen sm:w-fit md:w-fit lg:w-[600px] xl:w-[950px] py-5 px-5 lg:py-5 lg:px-5 lg:shadow-2xl shadow-md shadow-primary lg:shadow-primary">
      <div className="flex flex-col">
      <Manifesto/>
      <Guide/>
      </div>
    </div>
  );
}