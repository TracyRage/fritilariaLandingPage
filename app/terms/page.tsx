import Link from "next/link";
import RenderTermsListItem from "../ui/TermsListItem";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";




export default function Terms() {
  const LinkIcon = ArrowLeftIcon;
  return (

    <div className="flex flex-col h-fit border-2 rounded-[25px] w-[1000px] me-40 border-primary text-onBackground">
      <div className="flex flex-col p-6">
        <div className="flex flex-row items-baseline space-x-6">
          <div className="flex">
            <Link key={"Home"} href={"/"}>
              <LinkIcon className="w-[20px] font-extrabold " />
            </Link>
          </div>
          <div className="flex">
            <h1 className={`${sourceSerif.className} text-xl md:text-3xl pb-6 md:tracking-tight`}>
              Terms & Conditions
            </h1>

          </div>
        </div>

        <RenderTermsListItem name="Acceptance of Terms" content="By using Fritilaria, you agree to comply with and be bound by these terms and conditions. If you do not agree, please refrain from using the app." />
        <RenderTermsListItem name="User Conduct" content="Users must use the app in accordance with all applicable laws and regulations. Any misuse or unauthorized access may result in termination of access." />
        <RenderTermsListItem name="Intellectual Property" content="All content, trademarks, and intellectual property within the app are the property of Aremti Statistica. Users may not reproduce, distribute, or create derivative works without explicit permission." />
        <RenderTermsListItem name="Limitation of Liability" content="Aremti Statistica is not liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of the app." />
        <RenderTermsListItem name="Acceptance of Terms" content="By using Fritilaria, you agree to comply with and be bound by these terms and conditions. If you do not agree, please refrain from using the app." />

        <p className="py-6 leading-relaxed indent-6">By using Fritilaria, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you have any questions, please contact Aremti Statistica <Link className="text-primary" href={"/contact-us"}> aremti@company.com</Link>.</p>

      </div>
    </div>
  );
}