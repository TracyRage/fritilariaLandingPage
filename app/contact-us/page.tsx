import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { sourceSerif } from "../ui/fonts";
import Link from 'next/link';
import { ContactForm } from "../ui/contact-us/form";
import { Resend } from "resend";
import FritilariaUserFarewellEmail from "@/components/farewell-template";
import FritilariaDeleteAccountEmail from "@/components/delete-account-template";
import getTicketNumber from "../utils/generateTicket";
import FritilariaFeedbackEmail from "@/components/feedback-template";
import generateTimastamp from "../utils/generateTimestamp";


export const metadata = {
  title: 'Contact us',
  description: 'Contact us and provide some feedback',
  keywords: ['fritilaria', 'skidetica labs', 'skidetic', 'contact us', 'feedback', 'delete data', 'business', 'delete account'],
  alternates: {
    canonical: '/contact-us'
  }
}

export default async function ContactUs() {

  const LinkIcon = ArrowLeftIcon;


  async function sendEmail(to: string, subject: string, message: string, type: string) {

    'use server';

    const resend = new Resend(process.env.RESEND_API_KEY);
    const ticket = getTicketNumber(1, 1e7);
    const timestamp = generateTimastamp();


    if (type == 'delete') {
      await resend.emails.send({
        from: 'feedback@skidetica.com',
        to: to,
        subject: "Fritilaria Account Deletion",
        react: FritilariaUserFarewellEmail({ email: to, date: timestamp }) as React.ReactElement
      });

      await resend.emails.send({
        from: 'feedback@skidetica.com',
        to: to,
        subject: `#deletion ${to} #${ticket}`,
        react: FritilariaDeleteAccountEmail({
          email: to,
          ticket: ticket,
          date: timestamp,
          subject: subject,
          message: message
        }) as React.ReactElement
      });


    } else if (type == "feedback") {

      const { data } = await resend.emails.send({
        from: 'feedback@skidetica.com',
        to: to,
        subject: subject,
        react: FritilariaFeedbackEmail({
          message: message,
          date: timestamp
        }) as React.ReactElement
      });

      console.log(data);

    }


  };

  return (

    <section id="skideticaContact">

    <div className="flex flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[840px] dark:text-md_theme_dark_onSurface text-md_theme_light_onSurface bg-md_theme_light_surface_lowest dark:bg-md_theme_dark_surface_lowest py-5 px-5 lg:py-5 lg:px-8 shadow-sm shadow-md_theme_light_scrim">
      <div className="flex flex-col">
        <div className="flex flex-row lg:space-x-4 items-baseline">
          <div className="flex">
            <Link key={"Home"} href={"/"}>
              <LinkIcon className="w-[20px] font-extrabold lg:block hidden" />
            </Link>
          </div>
          <div className="flex">
            <h1 className={`${sourceSerif.className} text-xl md:text-3xl tracking-tight`}>
              Contact us
            </h1>
          </div>
        </div>
        <div className="pb-20">
            <ContactForm sendEmail={sendEmail} />
        </div>
      </div>
    </div>
    </section>
  );
}