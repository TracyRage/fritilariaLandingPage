import Image from 'next/image';


export default function RenderFritilariaLogoColors() {

    return (
        <section>
            <div className='hidden lg:block'>
              <div className='flex flex-col w-[32px] h-fit bg-elevated3 md:black space-y-2 shadow-md shadow-elevated2 pt-2'>
                <Image alt={''} width={45} height={20} src={"fritilaria_white.svg"} />
                <Image alt={''} width={45} height={20} src={"fritilaria_pink.svg"} />
                <Image alt={''} width={45} height={20} src={"fritilaria_red.svg"} />
                <Image alt={''} width={45} height={20} src={"fritilaria_green.svg"} />
              </div>
            </div>

        </section>

    )

}