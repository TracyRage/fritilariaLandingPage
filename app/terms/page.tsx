import Link from "next/link";
import RenderTermsListItem from "../ui/TermsListItem";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../ui/footer";


export const metadata = {
    title: 'Terms & Conditions',
    keywords: ['skidetica terms and conditions'],
    alternates: {
        canonical: '/terms'
    }
}


export default function Terms() {
  const LinkIcon = ArrowLeftIcon;
  return (

    <section>
    <div className="flex flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[840px] bg-md_theme_light_surface_lowest dark:bg-md_theme_dark_surface_lowest text-md_theme_light_onSurface  dark:text-md_theme_dark_onSurface py-5 px-5 lg:py-5 lg:px-8 shadow-sm shadow-md_theme_light_scrim">
      <div className="flex flex-col pb-8">
        <div className="flex flex-row items-baseline lg:space-x-4">
          <div className="flex">
            <Link key={"Home"} href={"/"}>
              <LinkIcon className="w-[20px] font-extrabold hidden lg:block" />
            </Link>
          </div>
          <div className="flex">
            <h1 className={`${sourceSerif.className} text-xl md:text-3xl  tracking-tight pb-8`}>
              Terms & Conditions
            </h1>
          </div>
        </div>

        <RenderTermsListItem name="Acceptance of Terms" content="By using Fritilaria, you agree to comply with and be bound by these terms and conditions. If you do not agree, please refrain from using the app." />
        <RenderTermsListItem name="User Conduct" content="Users must use the app in accordance with all applicable laws and regulations. Any misuse or unauthorized access may result in termination of access." />
        <RenderTermsListItem name="Intellectual Property" content="All content, trademarks, and intellectual property within the app are the property of Aremti Statistica. Users may not reproduce, distribute, or create derivative works without explicit permission." />
        <RenderTermsListItem name="Limitation of Liability" content="Aremti Statistica is not liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of the app." />
        <RenderTermsListItem name="Acceptance of Terms" content="By using Fritilaria, you agree to comply with and be bound by these terms and conditions. If you do not agree, please refrain from using the app." />

        <p className="pt-6 pb-8 text-sm lg:text-base ">By using Fritilaria, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you have any questions, please contact Aremti Statistica <Link className="text-primary" href={"/contact-us"}> aremti@company.com</Link>.</p>


      </div>
    </div>
    </section>
  );
}