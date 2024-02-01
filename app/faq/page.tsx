import Link from "next/link";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import MacroTable from "./MacrosTable";



export default function FAQ() {
    const LinkIcon = ArrowLeftIcon;
    return (
 
    <div className="flex flex-col h-fit border-2 rounded-[25px] lg:w-[1000px] w-fill border-primary text-onBackground">
      <div className="flex flex-col p-6">
        <div className="flex flex-row items-baseline lg:space-x-6">
          <div className="flex">
            <Link key={"Home"} href={"/"}>
              <LinkIcon className="w-[20px] font-extrabold hidden md:block" />
            </Link>
          </div>
          <div className="flex">
            <h1 className={`${sourceSerif.className} text-xl md:text-3xl pb-6 lg:tracking-tight`}>
              FAQ
            </h1>
          </div>
        </div>

        <div>
          <MacroTable/>
        </div>


      </div>
    </div>
  );
   
}