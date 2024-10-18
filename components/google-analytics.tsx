'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script'
import React, { useEffect } from 'react';


interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string;
  GT_CONTAINER_ID: string;
};


export default function GoogleAnalytics({ GA_MEASUREMENT_ID, GT_CONTAINER_ID }: GoogleAnalyticsProps) {

    const pathname = usePathname()
    // SearchParams is a client side function.
    const searchParams = useSearchParams()
    useEffect(() => {
        const url = pathname + searchParams.toString();
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: url,
            });
        }
    }, [pathname, searchParams, GA_MEASUREMENT_ID]);
    return (
        <>
            <Script id='google-analytics' strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied',
                    'ad_storage': 'denied',
                    'personalization_storage': 'denied',
                    'functionality_storage': 'denied',
                    'security_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                });
                
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            />

            <Script strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />


            <Script id="google-tag" strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                    __html:
                        `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GT_CONTAINER_ID}');`

                }}
            />

        </>
    )
}