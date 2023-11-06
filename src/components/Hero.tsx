import Link from 'next/link'

import { ComputerCanvas } from './canvas/ComputerCanvas'
import { ScrollToAbout } from './ScrollToAbout'

export const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div className="absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5 px-6 sm:px-16">
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className="mt-2 text-[40px] font-black text-white xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]">
            Olá, Eu sou <span className="text-[#915eff]">Gabriel</span>
          </h1>
          <p className="mt-2 text-[16px] font-medium text-[#dfd9ff] xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]">
            Meu compromisso com a excelência e atenção aos detalhes garantem que
            meu trabalho se destaque na multidão. Aberto a oportunidades
            desafiadoras e projetos emocionantes. Vamos conversar!
          </p>
        </div>
      </div>

      <ComputerCanvas />

      <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
        <Link className="outline-none focus:ring" href="#about" passHref>
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <ScrollToAbout />
          </div>
        </Link>
      </div>
    </section>
  )
}
