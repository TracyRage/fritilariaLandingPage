import Image from "next/image";
import { useTheme } from "./ThemeToggle";

export default function RenderCompanyElement({
    magnitude,
    pattern,
    companyTicker,
    fairValue,
    upperLimit
}: {magnitude: string, pattern: string, companyTicker: string, fairValue: number, upperLimit: number}) {

    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <div className="flex flex-col w-[140px] h-[58px] px-2 py-4 space-y-2">
            <div className="flex flex-row space-x-2">
                <div className="flex flex-col w-[60px] place-items-center overflow-x-hidden text-ellipsis">
                    <div className="flex flex-row space-x-2">
                        <p>{magnitude}</p>
                        <Image
                            src={pattern}
                            width={26}
                            height={26}
                            alt="Skidetica pattern buttons"
                            className={isDarkTheme ? "invert" : ""} />
                    </div>
                    <div className="flex">
                        <p>{companyTicker}</p>
                    </div>
                </div>
                <div className="flex flex-col w-[60px]">
                    <p className="dark:text-md_theme_dark_primary font-medium text-md_theme_light_primary">{upperLimit}</p>
                    <p className="dark:text-green-400 text-green-600 font-medium dark:font-normal">{fairValue}</p>
                </div>
            </div>
        </div>
    );
}