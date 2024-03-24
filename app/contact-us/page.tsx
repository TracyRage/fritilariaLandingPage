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
import Image from "next/image";


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


    } else if (type == "feedback") {

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

    <div className="flex flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[950px] border-primary text-onBackground py-5 px-5 lg:py-5 lg:px-8 shadow-2xl">
      <div className="flex flex-col">
        <div className="flex flex-row lg:space-x-4 items-baseline">
          <div className="flex">
            <Link key={"Home"} href={"/"}>
              <LinkIcon className="w-[20px] font-extrabold lg:block hidden" />
            </Link>
          </div>
          <div className="flex">
            <h1 className={`${sourceSerif.className} text-xl md:text-3xl md:tracking-tight`}>
              Contact us
            </h1>
          </div>
        </div>
        <div className="pb-4">
          <ContactForm sendEmail={sendEmail} />
        </div>
        <div className="flex flex-col space-y-6 lg:pt-12 pt-12 text-onBackground align-bottom">
          <hr className="opacity-50" />
          <div className="flex flex-row space-x-6 justify-center">

            <Image src="reddit.svg" width={25} height={10} alt="x" />
            <Image src="x.svg" width={20} height={10} alt="x" />
            <Image src="threads.svg" width={20} height={10} alt="x" />
            <Image src="discord.svg" width={25} height={10} alt="x" />


          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-center text-xs text-onBackground opacity-50">Moldova IT Park resident. Edineț, MD-4601, Republic of Moldova.</p>
            <p className="text-center text-xs text-onBackground opacity-50">@ 2024 Aremti Statistica. All rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}