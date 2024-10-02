'use client';
import { withFormik, FormikProps, FormikErrors, Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
import { useTheme } from '../ThemeToggle';


interface FormValues {
  email: string,
  subject: string,
  message: string,
  picked: string,
  checked: boolean,
};


const InnerForm = (props: FormikProps<FormValues>) => {



  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY


  const { isDarkTheme, toggleTheme } = useTheme();

  const { touched, errors, isSubmitting, values } = props;

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  const resetRECAPTCHA = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  }


  return (

    <main>
    <Form>
      <div className="flex flex-col items-baseline lg:pt-4">
        <div>
          <h1 className="lg:text-lg py-4">Email</h1>
        </div>
        <Field type="email" name="email"
          className="flex lg:w-[270px] h-[38px] border-2 border-md_theme_light_outline dark:border-md_theme_dark_outline dark:bg-md_theme_dark_surface bg-md_theme_light_surface dark:text-md_theme_dark_onSurface text-md_theme_light_onSurface rounded-md font-medium tracking-wider px-2 shadow-inner" />
        {touched.email && errors.email && <div className="py-2 font dark:text-md_theme_dark_error text-md_theme_light_error">{errors.email}</div>}
      </div>

      <div className="flex flex-col xl:flex-row xl:space-x-[52px]">
        <div className="flex flex-col items-baseline pb-2">

          <div>
            <h1 className="lg:text-lg py-4">Subject</h1>
          </div>
          <Field id="subject" name="subject"
            className="flex lg:w-[270px] h-[38px] border-2 border-md_theme_light_outline dark:border-md_theme_dark_outline bg-md_theme_light_surface dark:bg-md_theme_dark_surface text-md_theme_light_onSurface dark:text-md_theme_dark_onSurface rounded-md font-medium tracking-wider px-2 shadow-inner" />
          {touched.subject && errors.subject && <div className="py-2 dark:text-md_theme_dark_error text-md_theme_light_error">{errors.subject}</div>}

        </div>

        <div className="flex flex-col">
          <div className="flex flex-col items-baseline pb-2">
            <div>
              <h1 className="lg:text-lg py-4">Category</h1>
            </div>



            <div className="flex xl:flex-row xl:space-x-4 flex-col  xl:space-y-0 space-y-4 h-[38px]">
              <div className="flex flex-row space-x-2 items-center">
                <Field className="h-[24px] w-[24px] dark:text-md_theme_dark_primary text-md_theme_light_primary" type="radio" name="picked" value={"technical"} />
                <label className="flex lg:text-md">Technical</label>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <Field className="h-[24px] w-[24px] dark:text-md_theme_dark_primary text-md_theme_light_primary" type="radio" name="picked" value={"business"} />
                <label className="flex lg:text-md">Business</label>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className="flex flex-col items-baseline pt-16 pb-8 xl:py-4">

        <div>
          <h1 className="lg:text-lg py-4">Message</h1>
          <div>
            <Field as='textarea' id="message" name="message" rows={10} cols={44} className="hidden sm:block bg-md_theme_light_surface dark:bg-md_theme_dark_surface border-2 border-md_theme_light_primary dark:border-md_theme_dark_primary rounded-md font-medium text-md_theme_light_onSurface dark:text-md_theme_dark_onSurface tracking-wider p-2 shadow-inner " />
            <Field as='textarea' id="message" name="message" rows={10} cols={28} className="block sm:hidden bg-md_theme_light_surface  dark:bg-md_theme_dark_surface rounded-md border-2 border-md_theme_light_primary dark:border-md_theme_dark_primary font-medium text-md_theme_light_onSurface dark:text-md_theme_dark_onSurface tracking-wider p-2 shadow-inner" />
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:pt-4 space-y-8 justify-center">

        <ReCAPTCHA
          sitekey={recaptchaKey || ""}
          ref={recaptchaRef}
          onChange={handleChange}
          onExpired={handleExpired}
          theme='dark'
        />

        <button type="submit" disabled={!isVerified || isSubmitting} onClick={() => resetRECAPTCHA()} className="flex w-[220px] h-[38px] bg-md_theme_light_primary dark:bg-md_theme_dark_primary text-md_theme_light_onPrimary dark:text-md_theme_dark_onPrimary hover:bg-md_theme_light_secondary dark:hover:bg-md_theme_dark_secondary hover:text-md_theme_light_onSecondary dark:hover:text-md_theme_dark_onSecondary active:bg-fritilariaGreen active:text-md_theme_dark_scrim dark:active:bg-fritilariaGreen rounded-xl items-center justify-center">
          Submit
        </button>
        {<Toaster toastOptions={{
          success: {
            style: {
              background: isDarkTheme ? '#201A1B' : '#FFFBFF',
              border: isDarkTheme ? '2px solid #9F8C8E' : '2px solid #847374 ',
              color: isDarkTheme ? '#ECE0E0' : '#201A1B',
            },
            iconTheme: {
              primary: '#b2ffcf',
              secondary: '#201a1b'
            }
          },
        }} />}
      </div>
    </Form>
    </main>

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

  handleSubmit: (values, { setSubmitting, props, resetForm }) => {


    setTimeout(() => {


      if (values.picked == 'delete') {
        props.sendEmail(values.email, `#${values.picked} ${values.subject}`, values.message, "delete");
        toast.success('Your account and data will be deleted.', { duration: 6000 });
      } else if (values.picked == 'technical' || values.picked == 'business') {
        props.sendEmail(values.email, `#${values.picked} ${values.subject}`, values.message, "feedback");
        toast.success('Message has been sent');
        resetForm();


      }

      setSubmitting(false);

    }, 1000)

  },

})(InnerForm);


