'use client'

import { testimonials } from '@/constants'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import { fadeIn, textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'
import { FeedbackCard } from './FeedbackCard'

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      <div className="min-h-[300px] rounded-2xl bg-tertiary px-6 py-10 sm:px-16 sm:py-16">
        <motion.div variants={textVariant({})}>
          <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
            O que meus clientes dizem
          </p>
          <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
            Depoimentos.
          </h2>
        </motion.div>
      </div>
      <div className="-mt-20 flex flex-wrap gap-7 px-6 pb-14 sm:px-16">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className="flex w-full flex-col rounded-3xl bg-black-200 p-10 sm:w-[320px]"
            variants={fadeIn({
              direction: '',
              type: 'spring',
              delay: index * 0.5,
              duration: 0.75,
            })}
          >
            <FeedbackCard {...testimonial} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export const FeedbacksSection = SectionWrapper({
  Component: Feedbacks,
  idName: '',
})
