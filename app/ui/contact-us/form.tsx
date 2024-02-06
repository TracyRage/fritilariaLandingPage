'use client';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import getTicketNumber from '@/app/utils/generateTicket';
import FritilariaUserFarewellEmail from '@/components/farewell-template';
import { ReactNode } from 'react';


interface FormValues {
  email: string,
  subject: string,
  message: string,
  picked: string,
  checked: boolean,
};



const InnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, values } = props;

  return (

    <Form>
      <div className="flex flex-col items-baseline pt-4">
        <div>
          <h1 className="lg:text-lg py-4">Your email</h1>
        </div>
        <Field type="email" name="email"
          className="flex lg:w-[270px] h-[38px] border-onBackground border-2 bg-onBackground text-background rounded-md font-medium tracking-wider px-2 shadow-sm shadow-primary" />
        {touched.email && errors.email && <div className="py-2 font text-onPrimaryContainer">{errors.email}</div>}
      </div>

      <div className="flex flex-col xl:flex-row xl:space-x-[52px]">
        <div className="flex flex-col items-baseline pb-2">

          <div>
            <h1 className="lg:text-lg py-4">Subject</h1>
          </div>
          <Field id="subject" name="subject"
            className="flex lg:w-[270px] h-[38px] border-primar bg-onBackground text-background rounded-md font-medium tracking-wider px-2 shadow-sm shadow-primary" />
          {touched.subject && errors.subject && <div className="py-2 text-onPrimaryContainer">{errors.subject}</div>}

        </div>

        <div className="flex flex-col">
          <div className="flex flex-col items-baseline pb-2">
            <div>
              <h1 className="lg:text-lg py-4">Category</h1>
            </div>



            <div className="flex xl:flex-row xl:space-x-4 flex-col  xl:space-y-0 space-y-4 h-[38px]">
              <div className="flex flex-row space-x-2 items-center">
                <Field className="h-[24px] w-[24px] text-primaryContainer" type="radio" name="picked" value={"technical"} />
                <label className="flex lg:text-md">Technical</label>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <Field className="h-[24px] w-[24px] text-primaryContainer" type="radio" name="picked" value={"delete"} />
                <label className="flex lg:text-md">Delete account</label>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <Field className="h-[24px] w-[24px] text-primaryContainer" type="radio" name="picked" value={"business"} />
                <label className="flex lg:text-md">Business</label>
              </div>
            </div>


          </div>
        </div>

      </div>


      <div className="flex flex-col items-baseline py-16 xl:py-4">

        <div>
          <h1 className="lg:text-lg py-4">Message</h1>
        <div>
          <Field as='textarea' id="message" name="message" rows={10} cols={44} className="hidden sm:block border-primary bg-onBackground rounded-md font-medium text-background tracking-wider p-2 shadow-md shadow-primary" />
          <Field as='textarea' id="message" name="message" rows={10} cols={25} className="block sm:hidden border-primary bg-onBackground rounded-md font-medium text-background tracking-wider p-2 shadow-md shadow-primary" />
        </div>
        {values.picked === 'delete' && <div className="flex flex-row pt-6 lg:pt-8 space-x-4 lg:space-x-4 items-center">
          <Field type="checkbox" name="checked" className="rounded-full shadow w-8 h-8 text-primaryContainer" />
          <p className='text-sm lg:text-base'>I agree to delete my Fritilaria account and associated data.</p>
          {errors.checked && <div className="lg:py-2 text-onPrimaryContainer text-sm lg:text-base">{errors.checked}</div>}

        </div>}
      </div>
      </div>

      <div className="flex flex-col xl:pt-4 justify-center">

        <button type="submit" disabled={isSubmitting} className="flex w-[220px] h-[38px] bg-onPrimaryContainer text-primaryContainer border-onPrimary active:bg-fritilariaGreen active:text-onPrimary hover:bg-primary hover:text-onPrimary border-3 rounded-xl items-center justify-center">
          Submit
        </button>
        {<Toaster toastOptions={{
          success: {
            style: {
              background: '#201a1b',
              border: '2px solid #ece0e0',
              color: '#ece0e0',
            },
            iconTheme: {
              primary: '#b2ffcf',
              secondary: '#201a1b'
            }
          },
        }} />}
      </div>
    </Form>

  );
}

interface MyFormProps {
  initialEmail?: string;
  initialSubject?: string;
  initialPicked?: string;
  initialMessage?: string;
  initialChecked?: boolean;
  sendEmail: (to: string, subject: string, message: string, type: string) => void;
}

export const ContactForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      subject: props.initialSubject || '',
      message: props.initialMessage || '',
      picked: props.initialPicked || 'technical',
      checked: props.initialChecked || false
    };
  },

  // Add a custom validation function (this can be async too!)

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!Yup.string().email(values.email).required()) {
      errors.email = 'Invalid email address';
    }

    if (!values.subject) {
      errors.subject = 'Required';
    }

    if (values.picked == 'delete' && !values.checked) {
      errors.checked = 'Required'

    }


    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {

    setTimeout(() => {

      if (values.picked == 'delete') {
        props.sendEmail(values.email, `#${values.picked} ${values.subject}`, values.message, "delete");
        toast.success('Your account and data will be deleted.', { duration: 6000 });
      } else if (values.picked == 'technical' || values.picked == 'business') {
        props.sendEmail(values.email, `#${values.picked} ${values.subject}`, values.message, "feedback");
        toast.success('Message has been sent');
      }

      setSubmitting(false);

    }, 1000)

  },

})(InnerForm);