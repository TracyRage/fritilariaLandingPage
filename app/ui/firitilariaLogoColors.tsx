import Image from 'next/image';


export default function RenderFritilariaLogoColors() {

    return (

        <section>
            <div className='hidden 2xl:block'>
              <div className='flex flex-col w-[32px] h-fit bg-elevated3 md:black space-y-2 shadow-md shadow-elevated2 pt-2'>
                <div className='border-2 dark:border-0 border-md_theme_light_scrim'>
                <Image alt={''} width={45} height={20} src={"fritilaria_white.svg"} />
                </div>
                <div className='border-2 dark:border-0 border-md_theme_light_scrim'>
                <Image alt={''} width={45} height={20} src={"fritilaria_pink.svg"} />
                </div>
                <div className='border-2 dark:border-0 border-md_theme_light_scrim'>
                <Image alt={''} width={45} height={20} src={"fritilaria_red.svg"} />
                </div>
                <div className='border-2 dark:border-0 border-md_theme_light_scrim'>
                <Image alt={''} width={45} height={20} src={"fritilaria_green.svg"} />
                </div>
              </div>
            </div>
        </section>
    )

}