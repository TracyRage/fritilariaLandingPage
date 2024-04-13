import Link from "next/link";
import RenderTermsListItem from "../ui/TermsListItem";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../ui/footer";


export const metadata = {
    title: 'Privacy policy',
    description: 'Fritilaria privacy policy',
    keywords: ['fritilaria', 'skidetica labs', 'skidetic', 'privacy', 'policy', 'privacy policy'],
    alternates: {
        canonical: '/privacy'
    }
}


export default function Privacy() {
  const LinkIcon = ArrowLeftIcon;
  return (

    <div className="flex flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[950px] border-primary bg-background text-onBackground py-5 px-5 lg:py-5 lg:px-8 md:shadow-xl shadow-2xl">
      <div className="flex flex-col">
        <div className="flex flex-row items-baseline lg:space-x-4">
          <div className="flex">
            <Link key={"Home"} href={"/"}>
              <LinkIcon className="w-[20px] font-extrabold hidden lg:block" />
            </Link>
          </div>
          <div className="flex">
            <h1 className={`${sourceSerif.className} text-xl md:text-3xl pb-6`}>
              Privacy policy
            </h1>
          </div>
        </div>

        <RenderTermsListItem name="Acceptance of Terms" content="By using Fritilaria, you agree to comply with and be bound by these terms and conditions. If you do not agree, please refrain from using the app." />
        <RenderTermsListItem name="User Conduct" content="Users must use the app in accordance with all applicable laws and regulations. Any misuse or unauthorized access may result in termination of access." />
        <RenderTermsListItem name="Intellectual Property" content="All content, trademarks, and intellectual property within the app are the property of Aremti Statistica. Users may not reproduce, distribute, or create derivative works without explicit permission." />
        <RenderTermsListItem name="Limitation of Liability" content="Aremti Statistica is not liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of the app." />
        <RenderTermsListItem name="Acceptance of Terms" content="By using Fritilaria, you agree to comply with and be bound by these terms and conditions. If you do not agree, please refrain from using the app." />

      <Footer/>

      </div>
    </div>
  );
}