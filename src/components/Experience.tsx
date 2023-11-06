'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import { textVariant } from '@/utils/motion'
import { ExperienceCardWrapper } from './ExperienceCardWrapper'

const Experience = () => {
  return (
    <div className="py-10 sm:py-16">
      <motion.div variants={textVariant({})}>
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          O que eu fiz até agora
        </p>
        <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Lugares que trabalhei.
        </h2>
      </motion.div>
      <ExperienceCardWrapper />
    </div>
  )
}

export const ExperienceSection = SectionWrapper({
  Component: Experience,
  idName: 'experience',
})
