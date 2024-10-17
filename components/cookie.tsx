'use client';

import { useState, useEffect } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID as string;

type CookieState = 'not-answered' | 'accepted' | 'rejected';

const CookieConsent: React.FC = () => {
    const [cookieState, setCookieState] = useState<CookieState | null>(null);

    useEffect(() => {
        const storedState = localStorage.getItem('cookie-consent-state') as CookieState;
        if (storedState && (storedState === 'accepted' || storedState === 'rejected')) {
            setCookieState(storedState);
        } else {
            setCookieState('not-answered');
        }
    }, []);

    useEffect(() => {
        if (cookieState !== null) {
            localStorage.setItem('cookie-consent-state', cookieState);
        }
    }, [cookieState]);

    const handleConsent = (state: CookieState) => {
        setCookieState(state);
    };

    if (cookieState === null) {
        return null; // Render nothing while loading
    }

    if (cookieState === 'not-answered') {
        return (
            <div className="fixed bottom-10 p-4  mx-4 bg-md_theme_dark_secondaryContainer text-md_theme_dark_onSecondaryContainer rounded-2xl">
                <p>We use cookies to improve your experience. Do you accept?</p>
                <div className='flex flex-row space-x-4 text-red-500'>
                    <button onClick={() => handleConsent('accepted')}>Accept</button>
                    <button onClick={() => handleConsent('rejected')}>Reject</button>

                </div>
            </div>
        );
    }

    if (cookieState === 'accepted') {
        return <GoogleTagManager gtmId={GTM_ID} />;
    }

};

export default CookieConsent;
