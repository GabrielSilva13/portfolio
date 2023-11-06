'use client'

import { motion } from 'framer-motion'

export const ScrollToAbout = () => {
  return (
    <motion.div
      animate={{
        y: [0, 24, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="mb-1 h-3 w-3 rounded-full bg-secondary"
    />
  )
}
