'use client';

import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from './storage-helper';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
 
    const [cookieConsent, setCookieConsent] = useState<null|boolean>(null);
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
            });
        }
    }, [cookieConsent]);

    // Do not render the banner if loading or consent is already given
    if (isLoading || cookieConsent !== null) {
        return null;
    }

    return (
        <div className={`${cookieConsent != null ? "hidden" : "flex"}`}>
            <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow`}>

                <div className='text-center'>
                    <Link href="/info/cookies"><p>We use <span className='font-bold text-sky-400'>cookies</span> on our site.</p></Link>
                </div>


                <div className='flex gap-2'>
                    <button onClick={() => setCookieConsent(false)} className='px-5 py-2 text-gray-300 rounded-md border-gray-900'>Decline</button>
                    <button onClick={() => setCookieConsent(true)} className='bg-gray-900 px-5 py-2 text-white rounded-lg'>Allow Cookies</button>
                </div>
            </div>
        </div>
    )
}