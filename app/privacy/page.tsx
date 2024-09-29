import Link from "next/link";
import RenderTermsListItem from "../ui/TermsListItem";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../ui/footer";
import { PrivacyTable } from "../faq/MacrosTable";


export const metadata = {
  title: 'Privacy policy',
  keywords: ['skidetica privacy policy'],
  alternates: {
    canonical: '/privacy'
  }
}


export default function Privacy() {
  const LinkIcon = ArrowLeftIcon;
  return (

    <section>

      <div className="flex flex-col h-fit rounded-[25px] min-w-screen lg:w-[600px] xl:w-[840px] bg-md_theme_light_surface_lowest dark:bg-md_theme_dark_surface_lowest text-md_theme_light_onSurface dark:text-md_theme_dark_onSurface py-5 px-5 lg:py-5 lg:px-8 shadow-sm shadow-md_theme_light_scrim">
        <div className="flex flex-col pb-8">
          <div className="flex flex-row items-baseline lg:space-x-4">
            <div className="flex">
              <Link key={"Home"} href={"/"}>
                <LinkIcon className="w-[20px] font-extrabold hidden lg:block" />
              </Link>
            </div>
            <div className="flex">
              <h1 className={`${sourceSerif.className} text-xl md:text-3xl tracking-tight pb-8`}>
                Privacy policy
              </h1>
            </div>
          </div>

          <div className="flex flex-row justify-start pb-8">
            <p className="indent-6">Last updated: <span className="text-md_theme_light_primary dark:text-md_theme_dark_primary">09.27.2024</span></p>
          </div>

          <div className="flex flex-col space-y-8 pb-8">
            <p className="indent-6">This Privacy Notice for Skidetica Labs SRL ("<span className="dark:text-fritilariaGreen text-green-600">we,</span>" "<span className="dark:text-fritilariaGreen text-green-600">us, </span>" or "<span className="dark:text-fritilariaGreen text-green-600">our</span>"), describes how and why we might access, collect, store, use, and/or share ("<span className="dark:text-fritilariaGreen text-green-600">process</span>") your personal information when you use our services ("<span className="dark:text-fritilariaGreen text-green-600">Services</span>"), including when you:</p>
            <ul className="list-disc ps-4 space-y-4">
              <li>Visit our website at <a className="dark:text-fritilariaGreen text-green-600" href="https://www.fritilaria.com/privacy">https://www.skidetica.com/privacy</a>, or any website of ours that links to this Privacy Notice</li>
              <li>Download and use our mobile application (Skidetica), or any other application of ours that links to this Privacy Notice</li>
              <li>Use Skidetic models. Skidetica calculates the fair value of the publicly traded stock. Skidetica performs accurate fundamental analysis by combining advanced statistics and user's subjective opinion</li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>
            <p className="indent-6"><span className="dark:text-fritilariaGreen text-green-600">Questions or concerns?</span> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <span className="dark:text-fritilariaGreen text-green-600">contact@skidetica.com</span>.</p>
            <div className="flex flex-col space-y-4">
              <p className="text-2xl pb-4">Summary of key points</p>
              <RenderTermsListItem name="What personal information do we process?" content="When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use." />
              <RenderTermsListItem name="Do we process any sensitive personal information?" content="Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information." />
              <RenderTermsListItem name="Do we collect any information from third parties?" content="We do not collect any information from third parties." />
              <RenderTermsListItem name="How do we process your information?" content="We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so." />
              <RenderTermsListItem name="In what situations and with which parties do we share personal information? " content="We may share information in specific situations and with specific third parties." />
              <RenderTermsListItem name="How do we keep your information safe?" content="We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information." />
              <RenderTermsListItem name="What are your rights?" content="Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information." />
              <RenderTermsListItem name="How do we keep your information safe?" content="We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information." />
              <RenderTermsListItem name="How do you exercise your rights?" content="he easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws." />
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <p className="text-2xl pb-4">Privacy notice</p>
            <div className="flex flex-col space-y-4">
              <p className="text-xl">1. WHAT INFORMATION DO WE COLLECT?</p>
              <p className="font-bold">Personal information you disclose to us</p>
              <p className="indent-6 italic pb-4">In short: We collect personal information that you provide to us.</p>
              <p className="indent-6 pb-4">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
              <RenderTermsListItem name="Personal Information Provided by You"
                content={
                  <div className="space-y-4">

                    <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                    <ul className="list-disc ps-12">
                      <li>Email addresses</li>
                      <li>Password</li>
                      <li>Authentification data</li>
                    </ul>
                  </div>
                } />
              <RenderTermsListItem name="Sensitive Information"
                content={<p>We do not process sensitive information.</p>}
              />
              <RenderTermsListItem name="Payment Data"
                content={<p>We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by RevenueCat. You may find their privacy notice link(s) here: <a className="dark:text-fritilariaGreen text-green-600" href="https://www.revenuecat.com/privacy/">https://www.revenuecat.com/privacy/</a>.</p>}
              />

              <RenderTermsListItem name="Social Media Login Data"
                content={<p>We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.</p>}
              />

              <RenderTermsListItem name="Application Data"
                content={
                  <div className="space-y-4">

                    <p>If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
                    <ul className="list-disc ps-12 space-y-4">
                      <li><span className="italic">Mobile Device Data</span>. We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.</li>
                      <li><span className="italic">Push Notifications</span>. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings. </li>
                    </ul>
                    <p>This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</p>
                    <p>This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</p>
                    <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
                  </div>
                }

              />

              <p className="font-bold">Information automatically collected</p>

              <p className="indent-6 italic pb-4">In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>

              <p className="indent-6 pb-4">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>

              <p className="indent-6 pb-4">Like many businesses, we also collect information through cookies and similar technologies.</p>


              <div className="space-y-4">

                <p className="indent-6">The information we collect includes:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">
                  <li><span className="italic">Load and usage data</span>. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</li>
                  <li><span className="italic">Device Data</span>. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
                  <li><span className="italic">Location Data</span>. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
                </ul>
                <p className="indent-6">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
              </div>

              <p className="font-bold">Google API</p>
              <p className="indent-6 pb-4">Our use of information received from Google APIs will adhere to <a className="dark:text-fritilariaGreen text-green-600" href="https://developers.google.com/terms/api-services-user-data-policy"> Google API Services User Data Policy </a>, including the <a className="dark:text-fritilariaGreen text-green-600" href="https://developers.google.com/terms/api-services-user-data-policy#limited-use">Limited Use requirements</a>.</p>


              <p className="text-xl">2. HOW DO WE PROCESS YOUR INFORMATION?</p>

              <p className="indent-6 italic pb-4">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>

              <div className="space-y-4">

                <p className="indent-6">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">
                  <li><span className="italic">To facilitate account creation and authentication and otherwise manage user accounts</span>. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                  <li><span className="italic">To deliver and facilitate delivery of services to the user</span>. We may process your information to provide you with the requested service.</li>
                  <li><span className="italic">To respond to user inquiries/offer support to users</span>. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                  <li><span className="italic">To send administrative information to you</span>. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
                  <li><span className="italic">To fulfill and manage your orders</span>. We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
                  <li><span className="italic">To request feedback</span>. We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
                  <li><span className="italic">To send you marketing and promotional communications</span>. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below. </li>
                  <li><span className="italic">To deliver targeted advertising to you</span>. We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more. </li>
                  <li><span className="italic">To protect our Services</span>. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
                  <li><span className="italic">To identify usage trends</span>. We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
                  <li><span className="italic">To determine the effectiveness of our marketing and promotional campaigns</span>. We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you. </li>
                  <li><span className="italic">To save or protect an individual's vital interest</span>. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</li>

                </ul>
              </div>

              <p className="text-xl">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</p>

              <p className="indent-6 italic pb-4">In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>

              <p className="indent-6 dark:text-fritilariaGreen text-green-600 pb-4">If you are located in the EU or UK, this section applies to you.</p>

              <div className="space-y-4">

                <p className="indent-6">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">
                  <li><span className="italic">Consent</span>. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. </li>
                  <li><span className="italic">Performance of a Contract</span>. We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
                  <li>
                    <p className="pb-4"><span className="italic">Legitimate Interests</span>. We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:</p>
                    <ul className="list-inside">
                    <div className="flex flex-col space-y-2">
                      <li className="ps-4">- Send users information about special offers and discounts on our products and services</li>
                      <li className="ps-4">- Develop and display personalized and relevant advertising content for our users</li>
                      <li className="ps-4">- Analyze how our Services are used so we can improve them to engage and retain users</li>
                      <li className="ps-4">- Support our marketing activities</li>
                      <li className="ps-4">- Diagnose problems and/or prevent fraudulent activities</li>
                      <li className="ps-4">- Understand how our users use our products and services so we can improve user experience</li>
                      </div>
                    </ul>
                  </li>
                  <li><span className="italic">Legal Obligations</span>. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved. </li>
                  <li><span className="italic">Vital Interest</span>. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person. </li>
                </ul>
              </div>

              <p className="indent-6 dark:text-fritilariaGreen text-green-600 pb-4">If you are located in Canada, this section applies to you.</p>

              <p className="indent-6 pb-4">We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</p>

              <div className="space-y-4">

                <p className="indent-6">In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">
                  <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                  <li>For investigations and fraud detection and prevention</li>
                  <li>For business transactions provided certain conditions are met</li>
                  <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                  <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                  <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                  <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                  <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                  <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                  <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                  <li>If the information is publicly available and is specified by the regulations</li>

                </ul>
              </div>

              <p className="text-xl">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</p>

              <p className="indent-6 italic pb-4">In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.</p>

              <p className="indent-6 pb-4"><span className="dark:text-fritilariaGreen text-green-600">Vendors</span>, <span className="dark:text-fritilariaGreen text-green-600">Consultants</span>, and <span className="dark:text-fritilariaGreen text-green-600">Other Third-Party Service Providers</span>. We may share your data with third-party vendors, service providers, contractors, or agents ("<span className="dark:text-fritilariaGreen text-green-600">third parties</span>") who perform services for us or on our behalf and require access to such information to do that work.</p>

              <div className="space-y-4">

                <p className="indent-6">The categories of third parties we may share personal information with are as follows:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">

                  <li>Ad Networks</li>
                  <li>Payment Processors</li>
                  <li>Sales & Marketing Tools</li>
                  <li>User Account Registration & Authentication Services</li>
                  <li>Data Analytics Services</li>

                </ul>
              </div>

              <div className="space-y-4">

                <p className="indent-6">We also may need to share your personal information in the following situations:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">
                  <li><span className="italic">Business Transfers</span>. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                </ul>
              </div>

              <p className="text-xl">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</p>

              <p className="indent-6 italic pb-4">In Short: We may use cookies and other tracking technologies to collect and store your information.</p>

              <p className="indent-6 pb-4">We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
              <p className="indent-6 pb-4">We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</p>
              <p className="indent-6 pb-4">To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"</p>
              <p className="indent-6 pb-4">Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

              <p className="font-bold">Google Analytics</p>

              <p className="indent-6 pb-4">We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <a className="dark:text-fritilariaGreen text-green-600" href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>. For more information on the privacy practices of Google, please visit the <a href="https://policies.google.com/privacy" className="dark:text-fritilariaGreen text-green-600">Google Privacy & Terms page</a>.</p>

              <p className="text-xl">6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</p>

              <p className="indent-6 italic pb-4">In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</p>

              <p className="indent-6 pb-4">Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</p>

              <p className="indent-6 pb-4">We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>

              <p className="text-xl">7. HOW LONG DO WE KEEP YOUR INFORMATION?</p>

              <p className="indent-6 italic pb-4">In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>

              <p className="indent-6 pb-4">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>

              <p className="indent-6 pb-4">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>


              <p className="text-xl">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</p>

              <p className="indent-6 italic pb-4">In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>

              <p className="indent-6 pb-4">We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>


              <p className="text-xl">9. DO WE COLLECT INFORMATION FROM MINORS?</p>

              <p className="indent-6 italic pb-4">In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>

              <p className="indent-6 pb-4">We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at contact@skidetica.com.</p>


              <p className="text-xl">10.  WHAT ARE YOUR PRIVACY RIGHTS?</p>

              <p className="indent-6 italic pb-4">In Short: Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>

              <p className="indent-6 pb-4">In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</p>

              <p className="indent-6 pb-4">We will consider and act upon any request in accordance with applicable data protection laws.</p>

              <p className="indent-6 pb-4">If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" className="dark:text-fritilariaGreen text-green-600">Member State data protection authority</a> or <a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" className="dark:text-fritilariaGreen text-green-600">UK data protection authority</a>.</p>

              <p className="indent-6 pb-4">If you are located in Switzerland, you may contact the <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" className="dark:text-fritilariaGreen text-green-600"> Federal Data Protection and Information Commissioner</a>.</p>

              <p className="indent-6 pb-4"><span className="underline">Withdrawing your consent:</span> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below or updating your preferences.</p>

              <p className="indent-6 pb-4">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>

              <p className="indent-6 pb-4"><span className="underline">Opting out of marketing and promotional communications:</span> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. </p>

              <p className="font-bold">Account information</p>

              <div className="space-y-4">

                <p className="indent-6">If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">

                  <li>Log in to your account settings and update your user account.</li>

                </ul>
              </div>

              <p className="indent-6 pb-4">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>

              <p className="indent-6 pb-4"><span className="underline">Cookies and similar technologies: </span> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</p>

              <p className="indent-6 pb-4">If you have questions or comments about your privacy rights, you may email us at <span className="text-green-600 dark:text-fritilariaGreen">contact@skidetica.com</span>.</p>

              <p className="text-xl">11.  CONTROLS FOR DO-NOT-TRACK FEATURES</p>

              <p className="indent-6 pb-4">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>

              <p className="indent-6 pb-4">California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</p>


              <p className="text-xl">12.  DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</p>

              <p className="indent-6 pb-4">In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Montana, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</p>

              <p className="font-bold">Categories of Personal Information We Collect</p>

              <PrivacyTable/>

              <div className="space-y-4 pt-4">

                <p className="indent-6">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">
                  <li>Receiving help through our customer support channels;</li>
                  <li>Participation in customer surveys or contests; and</li>
                  <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                </ul>
              </div>

              <div className="space-y-4">

                <p className="indent-6">We will use and retain the collected personal information as needed to provide the Services or for:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">
                  <li>Category A - As long as the user has an account with us</li>
                  <li>Category B - As long as the user has an account with us</li>
                  <li>Category C - As long as the user has an account with us</li>
                  <li>Category D - As long as the user has an account with us</li>
                  <li>Category E - As long as the user has an account with us</li>
                  <li>Category F - As long as the user has an account with us</li>
                  <li>Category G - As long as the user has an account with us</li>
                  <li>Category H - As long as the user has an account with us</li>
                  <li>Category I - As long as the user has an account with us</li>
                  <li>Category J - As long as the user has an account with us</li>
                </ul>
              </div>

              <p className="font-bold">Sources of Personal Information</p>

              <p className="indent-6 pb-4">Learn more about the sources of personal information we collect in "WHAT INFORMATION DO WE COLLECT?"</p>

              <p className="font-bold">How We Use and Share Personal Information</p>

              <p className="indent-6 pb-4">Learn about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"</p>

              <div className="space-y-4 pt-4">
                <p className="indent-6 pb-4">We collect and share your personal information through:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">
                  <li>Targeting cookies/Marketing cookies</li>
                  <li>Beacons/Pixels/Tags</li>
                </ul>
              </div>

              <p className="indent-6 font-bold pb-4">Will your information be shared with anyone else?</p>

              <p className="indent-6 pb-4">We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</p>

              <p className="indent-6 pb-4">We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p>


              <div className="space-y-4 pt-4">
                <p className="indent-6 pb-4">We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">
                  <li>Category A. Identifiers</li>
                  <li>Category B. Personal information as defined in the California Customer Records law</li>
                  <li>Category C. Characteristics of protected classifications under state or federal law</li>
                  <li>Category D. Commercial information</li>
                  <li>Category E. Biometric information</li>
                  <li>Category F. Internet or other electronic network activity information</li>
                  <li>Category G. Geolocation data</li>
                  <li>Category H. Audio, electronic, visual, and similar information</li>
                  <li>Category I. Professional or employment-related information</li>
                  <li>Category J. Education information</li>
                </ul>
              </div>

              <p className="indent-6 pb-4">The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</p>

              <p className="font-bold text-lg">Your rights</p>

              <div className="space-y-4">

                <p className="indent-6">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">
                  <li><span className="font-bold">Right to know</span> whether or not we are processing your personal data</li>
                  <li><span className="font-bold">Right to access</span> your personal data</li>
                  <li><span className="font-bold">Right to correct</span> inaccuracies in your personal data</li>
                  <li><span className="font-bold">Right to request</span> the deletion of your personal data</li>
                  <li><span className="font-bold">Right to obtain a copy</span> of the personal data you previously shared with us</li>
                  <li><span className="font-bold">Right to non-discrimination</span> for exercising your rights</li>
                  <li><span className="font-bold">Right to opt out</span> of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>

                </ul>
              </div>


              <div className="space-y-4">

                <p className="indent-6">Depending upon the state where you live, you may also have the following rights:</p>
                <ul className="list-disc ps-12 space-y-4 pb-4">
                  <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including California's and Delaware's privacy law)</li>
                  <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including Oregon’s privacy law)</li>
                  <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including California’s privacy law)</li>
                  <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including Florida’s privacy law)</li>
                </ul>
              </div>

              <p className="font-bold text-lg">How to Exercise Your Rights</p>

              <p className="indent-6 pb-4">To exercise these rights, you can contact us by visiting <a href="https://www.skidetica.com/contact-us" className="dark:text-fritilariaGreen text-green-600">https://www.skidetica.com/contact-us</a>, by emailing us at contact@skidetica.com, or by referring to the contact details at the bottom of this document.</p>

              <p className="indent-6 pb-4">We will honor your opt-out preferences if you enact the <a href="https://globalprivacycontrol.org/" className="dark:text-fritilariaGreen text-green-600"> Global Privacy Control</a>, opt-out signal on your browser.</p>

              <p className="indent-6 pb-4">Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.</p>

              <p className="font-bold text-lg">Request Verification</p>

              <p className="indent-6 pb-4">Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</p>

              <p className="indent-6 pb-4">If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</p>

              <p className="font-bold text-lg">Appeals</p>

              <p className="indent-6 pb-4">Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <span className="dark:text-fritilariaGreen text-green-600">contact@skidetica.com</span>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>

              <p className="font-bold text-lg">California "Shine The Light" Law</p>

              <p className="indent-6 pb-4">California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</p>

              <p className="text-xl">13. DO WE MAKE UPDATES TO THIS NOTICE?</p>

              <p className="indent-6 italic pb-4">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>

              <p className="indent-6 pb-4">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>

              <p className="text-xl">14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</p>

              <p className="indent-6 pb-4">If you have questions or comments about this notice, you may email us at contact@skidetica.com or contact us by post at: Skidetica Labs SRL, Independenței 79, Edineț, Raionul Edineț, ED-4601, Republic of Moldova</p>

              <p className="text-xl">15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</p>

              <p className="indent-6 pb-4">Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: <a className="text-green-600 dark:text-fritilariaGreen" href="https://www.skidetica.com/contact-us">https://www.skidetica.com/contact-us</a>.</p>

            </div>


          </div>


        </div>
      </div>
    </section>
  );
}