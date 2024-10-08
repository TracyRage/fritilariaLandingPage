'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'EULA', href: '/eula' },
    { name: 'Privacy policy', href: '/privacy' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About us', href: '/company' },
    { name: 'Contact us', href: '/contact-us' },
];



export function NavLink() {

    return (

    <div className="flex justify-center space-x-4 dark:font-normal font-medium text-md_theme_light_primary dark:text-md_theme_dark_primary">

        {
            links.slice(0,3).map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm text-primary lg:pt-2">
                            {link.name}
                        </Link>
                )
            })
        }
    
    </div>

    );
}

export function NavLink2() {

    return (

    <div className="flex justify-center space-x-4 dark:font-normal font-medium text-md_theme_light_primary dark:text-md_theme_dark_primary">

        {
            links.slice(3,6).map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm text-primary lg:pt-2">
                            {link.name}
                        </Link>
                )
            })
        }
    
    </div>

    );
}

export function NavLink3() {

    return (

    <div className="flex justify-center space-x-4 dark:font-normal font-medium text-md_theme_light_primary dark:text-md_theme_dark_primary">

        {
            links.slice(0,3).map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="sm:text-xs md:text-sm text-primary">
                            {link.name}
                        </Link>
                )
            })
        }
    
    </div>

    );
}

export function NavLink4() {

    return (

    <div className="flex justify-center space-x-4 dark:font-normal font-medium text-md_theme_light_primary dark:text-md_theme_dark_primary">

        {
            links.slice(3,6).map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="sm:text-xs md:text-sm text-primary">
                            {link.name}
                        </Link>
                )
            })
        }
    
    </div>

    );
}