'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'

type HOCProps = {
  Component: React.FC
  idName: string
}

export const SectionWrapper = ({ Component, idName }: HOCProps) =>
  function HOC() {
    return (
      <motion.section
        className="relative z-0 mx-auto max-w-7xl px-6 sm:px-16"
        id={idName}
        variants={staggerContainer({})}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Component />
      </motion.section>
    )
  }
