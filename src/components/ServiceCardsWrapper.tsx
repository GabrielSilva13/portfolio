'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

import { services } from '@/constants'

import { ServiceCard } from './ServiceCard'

export const ServiceCardsWrapper = () => {
  return (
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <motion.div
          className="w-full"
          key={service.title}
          variants={fadeIn({
            direction: 'right',
            type: 'spring',
            delay: 0.5 * index,
            duration: 0.75,
          })}
        >
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </div>
  )
}
