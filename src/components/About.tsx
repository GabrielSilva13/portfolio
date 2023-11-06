'use client'

import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'
import { ServiceCardsWrapper } from './ServiceCardsWrapper'
import { SectionWrapper } from '@/hoc/SectionWrapper'

const About = () => {
  return (
    <div className="py-10 sm:py-16">
      <motion.div variants={textVariant({})}>
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          Introdução
        </p>
        <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Visão Geral.
        </h2>
      </motion.div>

      <motion.p
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
        variants={fadeIn({ direction: '', type: '', delay: 0.1, duration: 1 })}
      >
        Olá! Sou Gabriel Gonçalves, um apaixonado desenvolvedor front-end
        freelancer com expertise em criar interfaces de usuário incríveis para
        sites e aplicativos web. Minhas habilidades-chave incluem:
        Desenvolvimento com HTML, CSS e JavaScript Experiência sólida em React e
        Next.js Foco na usabilidade para experiências de usuário excepcionais
        Tenho um histórico comprovado de sucesso em projetos, entregando
        resultados de alta qualidade enquanto gerencio efetivamente prazos e
        expectativas dos clientes. Sou um comunicador claro e conciso, pronto
        para colaborar e trazer projetos para o próximo nível.
      </motion.p>

      <ServiceCardsWrapper />
    </div>
  )
}

export const AboutSection = SectionWrapper({
  Component: About,
  idName: 'about',
})
