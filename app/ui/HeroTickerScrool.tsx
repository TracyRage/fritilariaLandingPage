'use client';
import RenderTickerScroll from "./RenderTickerScroll";


export default function HeroTickerScroll() {

    return (

        <div className="hidden lg:block lg:container dark:bg-md_theme_dark_surface_lowest bg-md_theme_light_surface_lowest  dark:shadow-sm shadow-sm shadow-md_theme_dark_scrim lg:px-8 xl:pt-3 xl:pb-6 px-4 py-4 rounded-[25px]">

            <RenderTickerScroll/>

        </div>

    );
}