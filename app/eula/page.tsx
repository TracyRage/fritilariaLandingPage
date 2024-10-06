import Link from "next/link";
import RenderTermsListItem from "../ui/TermsListItem";
import { sourceSerif } from "../ui/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../ui/footer";


export const metadata = {
  title: 'EULA',
  keywords: ['skidetica eula'],
  alternates: {
    canonical: '/eula'
  }
}


export default function EULA() {
  const LinkIcon = ArrowLeftIcon;
  return (

    <section id="skideticaEula">
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
                EULA
              </h1>
            </div>
          </div>

          <div className="flex flex-row justify-start pb-8">
            <p className="indent-6">Last updated: <span className="text-md_theme_light_primary dark:text-md_theme_dark_primary">09.27.2024</span></p>
          </div>

          <div className="flex flex-col indent-6 space-y-4">
            <div className="flex flex-col space-y-4">

              <p className="pb-4">Skidetica is licensed to You (End-User) by Skidetica Labs SRL, located and registered at Independenței 79, Edineț, Raionul Edineț ED-4601, Republica Moldova (&quot;<span className="dark:text-fritilariaGreen text-green-600">Licensor</span>&quot;), for use only under the terms of this License Agreement.</p>
              <p className="pb-4">By downloading the Licensed Application from Google&apos;s software distribution platform (&quot;<span className="dark:text-fritilariaGreen text-green-600">Play Store</span>&quot;), and any update thereto (as permitted by this License Agreement), You indicate that You agree to be bound by all of the terms and conditions of this License Agreement, and that You accept this License Agreement. Play Store is referred to in this License Agreement as &quot;<span className="dark:text-fritilariaGreen text-green-600">Services</span>&quot;.</p>
              <p className="pb-4">The parties of this License Agreement acknowledge that the Services are not a Party to this License Agreement and are not bound by any provisions or obligations with regard to the Licensed Application, such as warranty, liability, maintenance and support thereof. Skidetica Labs SRL, not the Services, is solely responsible for the Licensed Application and the content thereof.</p>
              <p className="pb-4">This License Agreement may not provide for usage rules for the Licensed Application that are in conflict with the latest <a className="dark:text-fritilariaGreen text-green-600" href="https://play.google.com/intl/en_US/about/play-terms/">Google Play Terms of Service</a> (&quot;<span className="dark:text-fritilariaGreen text-green-600">Usage Rules</span>&quot;). Skidetica Labs SRL acknowledges that it had the opportunity to review the Usage Rules and this License Agreement is not conflicting with them.</p>
              <p className="pb-4">Skidetica when purchased or downloaded through the Services, is licensed to You for use only under the terms of this License Agreement. The Licensor reserves all rights not expressly granted to You. Skidetica is to be used on devices that operate with Google&apos;s operating system (&quot;Android&quot;).</p>

              <p className="text-xl indent-6 pb-6">1. THE APPLICATION</p>
              <p className="pb-4">Skidetica (&quot;<span className="dark:text-fritilariaGreen text-green-600">Licensed Application</span>&quot;) is a piece of software created to perform fundamental analysis by means of proprietary Bayesian algorithms — and customized for Android mobile devices (&quot;<span className="dark:text-fritilariaGreen text-green-600">Devices</span>&quot;). It is used to calculate theoretical fair value of a public traded companies. Skidetica stores its data in simulation packages (&quot;<span className="dark:text-fritilariaGreen text-green-600">simpacks</span>&quot;), and every analysis iteration performed by the user is named a simulation run (&quot;<span className="dark:text-fritilariaGreen text-green-600">run</span>&quot;).</p>
              <p className="pb-4">The Licensed Application is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Licensed Application. You may not use the Licensed Application in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>

              <p className="text-xl indent-6 pb-6">2. SCOPE OF LICENSE</p>
              <p className="pb-4">2.1  You are given a non-transferable, non-exclusive, non-sublicensable license to install and use the Licensed Application on any Devices that You (End-User) own or control and as permitted by the Usage Rules, with the exception that such Licensed Application may be accessed and used by other accounts associated with You (End-User, The Purchaser) via Family Sharing or volume purchasing.</p>
              <p className="pb-4">2.2  This license will also govern any updates of the Licensed Application provided by Licensor that replace, repair, and/or supplement the first Licensed Application, unless a separate license is provided for such update, in which case the terms of that new license will govern.</p>
              <p className="pb-4">2.3  You may not share or make the Licensed Application available to third parties (unless to the degree allowed by the Usage Rules, and with Skidetica Labs SRL&apos;s prior written consent), sell, rent, lend, lease or otherwise redistribute the Licensed Application.</p>
              <p className="pb-4">2.4  You may not reverse engineer, translate, disassemble, integrate, decompile, remove, modify, combine, create derivative works or updates of, adapt, or attempt to derive the source code of the Licensed Application, or any part thereof (except with Skidetica Labs SRL&apos;s prior written consent).</p>
              <p className="pb-4">2.5  You may not copy (excluding when expressly authorized by this license and the Usage Rules) or alter the Licensed Application or portions thereof. You may create and store copies only on devices that You own or control for backup keeping under the terms of this license, the Usage Rules, and any other terms and conditions that apply to the device or software used. You may not remove any intellectual property notices. You acknowledge that no unauthorized third parties may gain access to these copies at any time. If you sell your Devices to a third party, you must remove the Licensed Application from the Devices before doing so.</p>
              <p className="pb-4">2.6  Violations of the obligations mentioned above, as well as the attempt of such infringement, may be subject to prosecution and damages.</p>
              <p className="pb-4">2.7  Licensor reserves the right to modify the terms and conditions of licensing.</p>
              <p className="pb-4">2.8  Nothing in this license should be interpreted to restrict third-party terms. When using the Licensed Application, You must ensure that You comply with applicable third-party terms and conditions.</p>

              <p className="text-xl indent-6 pb-6">3. TECHNICAL REQUIREMENTS</p>
              <p className="pb-4">3.1  The Licensed Application requires a firmware version 1.0.0 or higher. Licensor recommends using the latest version of the firmware.</p>
              <p className="pb-4">3.2  Licensor attempts to keep the Licensed Application updated so that it complies with modified/new versions of the firmware and new hardware. You are not granted rights to claim such an update.</p>
              <p className="pb-4">3.3  You acknowledge that it is Your responsibility to confirm and determine that the app end-user device on which You intend to use the Licensed Application satisfies the technical specifications mentioned above.</p>
              <p className="pb-4">3.4  Licensor reserves the right to modify the technical specifications as it sees appropriate at any time.</p>


              <p className="text-xl indent-6 pb-6">4. MAINTENANCE AND SUPPORT</p>
              <p className="pb-4">4.1  The Licensor is solely responsible for providing any maintenance and support services for this Licensed Application. You can reach the Licensor at the email address listed in the Play Store Overview for this Licensed Application.</p>
              <p className="pb-4">4.2  Skidetica Labs SRL and the End-User acknowledge that the Services have no obligation whatsoever to furnish any maintenance and support services with respect to the Licensed Application.</p>

              <p className="text-xl indent-6 pb-6">5. USE OF DATA</p>
              <p className="pb-4">You acknowledge that Licensor will be able to access and adjust Your downloaded Licensed Application content and Your personal information, and that Licensor&apos;s use of such material and information is subject to Your legal agreements with Licensor and Licensor&apos;s privacy policy: skidetica.com/privacy.</p>
              <p className="pb-4">You acknowledge that the Licensor may periodically collect and use technical data and related information about your device, system, and application software, and peripherals, offer product support, facilitate the software updates, and for purposes of providing other services to you (if any) related to the Licensed Application. Licensor may also use this information to improve its products or to provide services or technologies to you, as long as it is in a form that does not personally identify you.</p>

              <p className="text-xl indent-6 pb-6">6. USER-GENERATED CONTRIBUTIONS</p>
              <div className="space-y-4">

                <p className="indent-6">The Licensed Application does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or in the Licensed Application, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quot;<span className="dark:text-fritilariaGreen text-green-600">Contribution</span>&quot;). Contributions may be viewable by other users of the Licensed Application and through third-party websites or applications. As such, any Contributions you transmit may be treated in accordance with the Licensed Application Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:</p>
                <ul className="list-decimal ps-12 space-y-4 pb-4">
                  <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
                  <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Licensed Application, and other users of the Licensed Application to use your Contributions in any manner contemplated by the Licensed Application and this License Agreement.</li>
                  <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness or each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Licensed Application and this License Agreement.</li>
                  <li>Your Contributions are not false, inaccurate, or misleading.</li>
                  <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
                  <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
                  <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
                  <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
                  <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
                  <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
                  <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
                  <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
                  <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of this License Agreement, or any applicable law or regulation.</li>
                </ul>
              </div>

              <p className="pb-4">Any use of the Licensed Application in violation of the foregoing violates this License Agreement and may result in, among other things, termination or suspension of your rights to use the Licensed Application.</p>



              <p className="text-xl indent-6 pb-6">7. CONTRIBUTION LICENSE</p>

              <p className="pb-4">You agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).</p>
              <p className="pb-4">By submitting suggestions of other feedback regarding the Licensed Application, you agree that we can use and share such feedback for any purpose without compensation to you.</p>
              <p className="pb-4">We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area in the Licensed Application. You are solely responsible for your Contributions to the Licensed Application and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>

              <p className="text-xl indent-6 pb-6">8. LIABILITY</p>
              <p className="pb-4">8.1  Licensor&apos;s responsibility in the case of violation of obligations and tort shall be limited to intent and gross negligence. Only in case of a breach of essential contractual duties (cardinal obligations), Licensor shall also be liable in case of slight negligence. In any case, liability shall be limited to the foreseeable, contractually typical damages. The limitation mentioned above does not apply to injuries to life, limb, or health.</p>
              <p className="pb-4">8.2  Licensor takes no accountability and responsibility in case of __________.</p>

              <p className="text-xl indent-6 pb-6">9. WARRANTY</p>
              <p className="pb-4">9.1  Licensor warrants that the Licensed Application is free of spyware, trojan horses, viruses, or any other malware at the time of Your download. Licensor warrants that the Licensed Application works as described in the user documentation.</p>
              <p className="pb-4">9.2  No warranty is provided for the Licensed Application that is not executable on the device, that has been unauthorizedly modified, handled inappropriately or culpably, combined or installed with inappropriate hardware or software, used with inappropriate accessories, regardless if by Yourself or by third parties, or if there are any other reasons outside of Skidetica Labs SRL&apos;s sphere of influence that affect the executability of the Licensed Application.</p>
              <p className="pb-4">9.3  You are required to inspect the Licensed Application immediately after installing it and notify Skidetica Labs SRL about issues discovered without delay by email provided in Contact Information. The defect report will be taken into consideration and further investigated if it has been emailed within a period of ninety (90) days after discovery.</p>
              <p className="pb-4">9.4  If we confirm that the Licensed Application is defective, Skidetica Labs SRL reserves a choice to remedy the situation either by means of solving the defect or substitute delivery.</p>
              <p className="pb-4">9.5  In the event of any failure of the Licensed Application to conform to any applicable warranty, You may notify the Services Store Operator, and Your Licensed Application purchase price will be refunded to You. To the maximum extent permitted by applicable law, the Services Store Operator will have no other warranty obligation whatsoever with respect to the Licensed Application, and any other losses, claims, damages, liabilities, expenses, and costs attributable to any negligence to adhere to any warranty.</p>
              <p className="pb-4">9.6  If the user is an entrepreneur, any claim based on faults expires after a statutory period of limitation amounting to twelve (12) months after the Licensed Application was made available to the user. The statutory periods of limitation given by law apply for users who are consumers.</p>

              <p className="text-xl indent-6 pb-6">10. PRODUCT CLAIMS</p>

              <div className="space-y-4">

                <p className="indent-6">Skidetica Labs SRL and the End-User acknowledge that Skidetica Labs SRL, and not the Services, is responsible for addressing any claims of the End-User or any third party relating to the Licensed Application or the End-User&apos;s possession and/or use of that Licensed Application, including, but not limited to:</p>
                <ul className="list-decimal ps-12 space-y-4 pb-4">
                  <li>(i) product liability claims;</li>
                  <li>(ii) any claim that the Licensed Application fails to conform to any applicable legal or regulatory requirement; and</li>
                  <li>(iii) claims arising under consumer protection, privacy, or similar legislation.</li>
                </ul>
              </div>

              <p className="text-xl indent-6 pb-6">11. LEGAL COMPLIANCE</p>
              <p className="pb-4">You represent and warrant that You are not located in a country that is subject to a US Government embargo, or that has been designated by the US Government as a &quot;terrorist supporting&quot; country; and that You are not listed on any US Government list of prohibited or restricted parties.</p>

              <p className="text-xl indent-6 pb-6">12. CONTACT INFORMATION</p>

              <div className="space-y-4">

                <p className="pb-4">For general inquiries, complaints, questions or claims concerning the Licensed Application, please contact:</p>
                <ul className="space-y-4 pb-4">
                  <li>Skidetica Labs SRL</li>
                  <li>Independenței 79</li>
                  <li>Edineț, Raionul Edineț, ED-4601</li>
                  <li>Republica Moldova</li>
                  <li><span className="dark:text-fritilariaGreen text-green-600">contact@skidetica.com</span></li>
                </ul>
              </div>

              <p className="text-xl indent-6 pb-6">13. TERMINATION</p>
              <p className="pb-4">The license is valid until terminated by Skidetica Labs SRL or by You. Your rights under this license will terminate automatically and without notice from Skidetica Labs SRL if You fail to adhere to any term(s) of this license. Upon License termination, You shall stop all use of the Licensed Application, and destroy all copies, full or partial, of the Licensed Application.</p>

              <p className="text-xl indent-6 pb-6">14. THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY</p>
              <p className="pb-4">Skidetica Labs SRL represents and warrants that Skidetica Labs SRL will comply with applicable third-party terms of agreement when using Licensed Application.</p>
              <p className="pb-4">In Accordance with Section 9 of the &quot;Instructions for Minimum Terms of Developer&apos;s End-User License Agreement,&quot; Google&apos;s subsidiaries shall be third-party beneficiaries of this End User License Agreement and — upon Your acceptance of the terms and conditions of this License Agreement, Google will have the right (and will be deemed to have accepted the right) to enforce this End User License Agreement against You as a third-party beneficiary thereof.</p>

              <p className="text-xl indent-6 pb-6">15. INTELLECTUAL PROPERTY RIGHTS</p>
              <p className="pb-4">Skidetica Labs SRL and the End-User acknowledge that, in the event of any third-party claim that the Licensed Application or the End-User&apos;s possession and use of that Licensed Application infringes on the third party&apos;s intellectual property rights, Skidetica Labs SRL, and not the Services, will be solely responsible for the investigation, defense, settlement, and discharge or any such intellectual property infringement claims.</p>

              <p className="text-xl indent-6 pb-6">16. APPLICABLE LAW</p>
              <p className="pb-4">This License Agreement is governed by the laws of Moldova excluding its conflicts of law rules.</p>

              <p className="text-xl indent-6 pb-6">17. MISCELLANEOUS</p>
              <p className="pb-4">17.1  If any of the terms of this agreement should be or become invalid, the validity of the remaining provisions shall not be affected. Invalid terms will be replaced by valid ones formulated in a way that will achieve the primary purpose.</p>
              <p className="pb-4">17.2  Collateral agreements, changes and amendments are only valid if laid down in writing. The preceding clause can only be waived in writing.</p>


              {/* <p className="pb-4 font-bold">Our intellectual property</p> */}




            </div>


          </div>







        </div>
      </div>
    </section>
  );
}
