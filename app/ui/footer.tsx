import Image from 'next/image';

export default function Footer() {
    return (

        <footer>
        <div className="flex flex-col pt-12 space-y-6 text-onBackground">
            <hr className="opacity-10 pb-4" />
            <div className="flex flex-row space-x-6 justify-center">

                <Image src="reddit.svg" width={25} height={10} alt="x" />
                <Image src="x.svg" width={20} height={10} alt="x" />
                <Image src="threads.svg" width={20} height={10} alt="x" />
                <Image src="discord.svg" width={25} height={10} alt="x" />
            </div>
            <div className="flex flex-col space-y-2 tracking-tight md:tracking-normal">
                <p className="text-center text-xs text-onBackground opacity-50">Edineț, MD-4601, Republic of Moldova.</p>
                <p className="text-center text-xs text-onBackground opacity-50">@ 2024 Skidetica Labs. All rights Reserved.</p>
            </div>

        </div>

        </footer>

    );
}