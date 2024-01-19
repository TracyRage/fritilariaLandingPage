import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { sourceSerif } from "../ui/fonts";
import Link from 'next/link';
import { ContactForm } from "../ui/contact-us/form";
import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";


export default async function ContactUs() {

  const LinkIcon = ArrowLeftIcon;

  async function sendEmail(to: string, subject: string, message: string) {

    'use server';

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data } = await resend.emails.send({
        from: 'noreply@fritilaria.com',
        to: to,
        subject: subject,
        react: EmailTemplate({message: message}) as React.ReactElement
      });

      console.log(data);
  
};

  return (

    <div className="flex flex-col h-fit border-2 rounded-[25px] w-[1000px] me-40 pb-[36px] border-primary text-onBackground">
      <div className="flex flex-col p-6">
        <div className="flex flex-row items-baseline space-x-6">
          <div className="flex">
            <Link key={"Home"} href={"/"}>
              <LinkIcon className="w-[20px] font-extrabold " />
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