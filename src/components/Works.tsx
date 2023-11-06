'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import { fadeIn, textVariant } from '@/utils/motion'
import { projects } from '@/constants/'
import { ProjectCard } from './ProjectCard'

const Works = () => {
  return (
    <section className="py-10 sm:py-16">
      <motion.div variants={textVariant({})}>
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          Meus Trabalhos
        </p>
        <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Projetos.
        </h2>
      </motion.div>

      <div>
        <motion.p
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
          variants={fadeIn({
            delay: 0.1,
            duration: 1,
            direction: '',
            type: '',
          })}
        >
          Os projetos a seguir, é uma demostração de minhas habilidades e
          experiencias em projetos reais dando alguns exemplos do meu trabalho,
          cada projeto é brevemente descrito com links para os repositórios e
          demonstrações ao vivo dos mesmos. Refletindo minhas habilidades em
          resolver problemas, trabalhar com tecnologias diversificadas e
          gerenciar meus projetos de forma produtiva e efetiva.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index + 1}`}
            variants={fadeIn({
              direction: 'up',
              type: 'spring',
              delay: 0.5 * index,
              duration: 0.75,
            })}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export const WorksSection = SectionWrapper({ Component: Works, idName: '' })
