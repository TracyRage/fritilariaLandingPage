'use server';
import EmailTemplate from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export default async function sendEmail() {

  // const resend = new Resend(process.env.RESEND_API_KEY);

  try {
  const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'noreply@fritilaria.com',
      to: 'robohoratio@gmail.com',
      subject: 'Hello world',
      html: '<h1> Hello, Alexei </h1>'
    });

    if (error) {
      return Response.json({error});
    }

    return Response.json({data});

  } catch(error) {

    return NextResponse.json({error})
  }
  
}