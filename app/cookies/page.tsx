import Link from "next/link";
import RenderTermsListItem from "../ui/TermsListItem";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../ui/footer";


export const metadata = {
  title: 'Cookie policy',
  keywords: ['skidetica cookies'],
  alternates: {
    canonical: '/cookies'
  }
}


export default function Cookies() {
  const LinkIcon = ArrowLeftIcon;
  return (

    <section id="skideticaCookies">
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
                Cookie policy
              </h1>
            </div>
          </div>

          <div className="flex flex-row justify-start pb-8">
            <p className="indent-6">Last updated: <span className="text-md_theme_light_primary dark:text-md_theme_dark_primary">09.27.2024</span></p>
          </div>

          <div className="flex flex-col indent-6 space-y-4">
            <div className="flex flex-col space-y-4">

              <p className="">This Cookie Policy explains how (&quot;<span className="dark:text-fritilariaGreen text-green-600">Company,</span>&quot; &quot; <span className="dark:text-fritilariaGreen text-green-600">we,</span>&quot; &quot;<span className="dark:text-fritilariaGreen text-green-600">us,</span>&quot; and &quot;<span className="dark:text-fritilariaGreen text-green-600">our</span>&quot;) uses cookies and similar technologies to recognize you when you visit our website at https://www.skidetica.com (&quot;<span className="dark:text-fritilariaGreen text-green-600">Website</span>&quot;). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
              <p className="pb-4">In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.</p>

              <p className="text-xl indent-6 pb-6">WHAT ARE COOKIES?</p>
              <p className="pb-4">Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
              <p className="pb-4">Cookies set by the website owner (in this case,) are called &quot;first-party cookies.&quot; Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>

              <p className="text-xl indent-6 pb-6">WHY DO WE USE COOKIES?</p>
              <p className="pb-4">We use first-and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.</p>

              <p className="text-xl indent-6 pb-6">HOW CAN I CONTROL COOKIES?</p>
              <p className="pb-4">You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</p>
              <p className="pb-4">The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.</p>
              <p className="pb-4">The specific types of first- and third-party cookies served through our Website and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):</p>

              <p className="text-xl indent-6 pb-6">HOW CAN I CONTROL COOKIES ON MY BROWSER</p>
              <div className="space-y-4">
                <p className="indent-6">As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser&apos;s help menu for more information. The following is information about how to manage cookies on the most popular browsers:</p>
                <ul className="list-decimal ps-12 space-y-4 pb-4">
                    <li>Chrome</li>
                    <li>Internet Explorer</li>
                    <li>Firefox</li>
                    <li>Safari</li>
                    <li>Edge</li>
                    <li>Opera</li>
                </ul>
              </div>

              <div className="space-y-4">
                <p className="indent-6">In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:</p>
                <ul className="list-decimal ps-12 space-y-4 pb-4">
                    <li><a href="http://www.aboutads.info/choices/">Digital Advertising Alliance</a></li>
                    <li><a href="https://youradchoices.ca/">Digital Advertising Alliance of Canada</a></li>
                    <li><a href="http://www.youronlinechoices.com/">European Interactive Digital Advertising Alliance</a></li>
                </ul>
              </div>


              <p className="text-xl indent-6 pb-6">WHAT ABOUT OTHER TRACKING TECHNOLOGIES, LIKE WEB BEACONS?</p>
              <p className="pb-4">Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called &quot;tracking pixels&quot; or &quot;clear gifs&quot;). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Website or opened an email including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.</p>

              <p className="text-xl indent-6 pb-6">DO YOU USE FLASH COOKIES OR LOCAL SHARED OBJECTS?</p>
              <p className="pb-4">Websites may also use so-called &quot;Flash Cookies&quot; (also known as Local Shared Objects or &quot;LSOs&quot;) to, among other things, collect and store information about your use of our services, fraud prevention, and for other site operations.</p>
              <p className="pb-4">If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html">Website Storage Settings Panel</a>. You can also control Flash Cookies by going to the <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html">Global Storage Settings Panel</a> and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to &quot;information&quot; on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).</p>
              <p className="pb-4">Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.</p>

              <p className="text-xl indent-6 pb-6">DO YOU SERVE TARGETED ADVERTISING?</p>
              <p className="pb-4">Third parties may serve cookies on your computer or mobile device to serve advertising through our Website. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. They can accomplish this by using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details, or other details that directly identify you unless you choose to provide these.</p>

              <p className="text-xl indent-6 pb-6">HOW OFTEN WILL YOU UPDATE THIS COOKIE POLICY?</p>
              <p className="pb-4">We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
              <p className="pb-4">The date at the top of this Cookie Policy indicates when it was last updated.</p>

              <p className="text-xl indent-6 pb-6">HOW CAN I GET FURTHER INFORMATION?</p>
              <p className="pb-4">If you have any questions about our use of cookies or other technologies, please contact us at: contact@skidetica.com or contact us by post at: Skidetica Labs SRL, Independenței 79, Edineț, Raionul Edineț, ED-4601, Republic of Moldova.</p>


            </div>


          </div>







        </div>
      </div>
    </section>
  );
}
