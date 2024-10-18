'use client';
import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from './storage-helper';
import { useEffect, useState } from 'react';

export default function CookieBanner() {

    const [cookieConsent, setCookieConsent] = useState<null | boolean>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Retrieve cookie consent status from local storage on component mount
    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
        console.log("Cookie Consent retrieved from storage: ", storedCookieConsent);
        setCookieConsent(storedCookieConsent);
        setIsLoading(false);
    }, []);

    // Update local storage and Google Analytics consent status when cookieConsent changes
    useEffect(() => {
        if (cookieConsent !== null) {
            setLocalStorage("cookie_consent", cookieConsent);
        }
        const newValue = cookieConsent ? "granted" : "denied";
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: newValue,
                ad_storage: newValue,
                personalization_storage: newValue,
                functionality_storage: newValue,
                security_storage: newValue,
            });
        }
    }, [cookieConsent]);

    // Do not render the banner if loading or consent is already given
    if (isLoading || cookieConsent !== null) {
        return null;
    }

    return (
        <div className={`${cookieConsent != null ? "hidden" : "flex"}`}>
            <div className="mx-auto w-[280px] md:w-[820px]
                        fixed bottom-5 right-10 text-sm md:text-sm
                        flex px-3 md:px-4 pt-4 pb-4  md:pt-3 md:pb-4 justify-between items-center flex-col sm:flex-row space-y-3
                         dark:bg-md_theme_dark_secondaryContainer/90 bg-md_theme_light_secondaryContainer/90 md:space-x-4 dark:text-md_theme_dark_onSecondaryContainer text-md_theme_light_onSecondaryContainer rounded-2xl shadow-sm shadow-md_theme_light_scrim dark:shadow-md_theme_dark_scrim">
                <div className='text-left'>
                    <p>We use <span className='dark:text-fritilariaGreen text-green-600 font-semibold'>cookies</span>. To improve your experience and analyze site traffic. By continuing, you agree to their use. <a href={"/cookies"}>Learn more about our <span className="dark:text-fritilariaGreen text-green-600 font-semibold">Cookie policy</span>.</a>  </p>
                </div>
                <div className='flex space-x-2'>
                    <button onClick={() => setCookieConsent(false)} className='px-5 py-2 dark:text-md_theme_dark_onPrimaryContainer text-md_theme_light_onPrimaryContainer rounded-md border-[0.5px] dark:border-md_theme_dark_scrim border-md_theme_light_scrim'>Decline</button>
                    <button onClick={() => setCookieConsent(true)} className='dark:text-md_theme_dark_onPrimaryContainer text-md_theme_light_onPrimary shadow-sm px-5 py-2 dark:bg-md_theme_dark_primaryContainer dark:shadow-md_theme_dark_scrim shadow-md_theme_light_scrim bg-md_theme_light_primary rounded-lg'>Allow</button>
                </div>
            </div>
        </div>
    )
}