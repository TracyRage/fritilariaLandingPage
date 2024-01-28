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


export default async function ContactUs() {

  const LinkIcon = ArrowLeftIcon;

  async function sendEmail(to: string, subject: string, message: string, type: string) {

    'use server';

    const resend = new Resend(process.env.RESEND_API_KEY);
    const ticket = getTicketNumber(1, 1e7);
    const timestamp = generateTimastamp();
 


    if (type == 'delete') {
      await resend.emails.send({
        from: 'noreply@fritilaria.com',
        to: to,
        subject: "Fritilaria Account Deletion",
        react: FritilariaUserFarewellEmail({ email: to, date: timestamp }) as React.ReactElement
      });

      await resend.emails.send({
        from: 'noreply@fritilaria.com',
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


    } else if(type == "feedback") {

      const { data } = await resend.emails.send({
        from: 'noreply@fritilaria.com',
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

    <div className="flex flex-col h-fit border-2 rounded-[25px] lg:w-6/6 xl:w-12/12 pb-[36px] border-primary text-onBackground">
      <div className="flex flex-col p-6">
        <div className="flex flex-row items-baseline lg:space-x-6">
          <div className="flex">
            <Link key={"Home"} href={"/"}>
              <LinkIcon className="w-[20px] font-extrabold md:block hidden" />
            </Link>
          </div>
          <div className="flex">
            <h1 className={`${sourceSerif.className} text-xl md:text-3xl md:tracking-tight`}>
              Contact us
            </h1>
          </div>
        </div>
        <ContactForm sendEmail={sendEmail} />
      </div>
    </div>
  );
}