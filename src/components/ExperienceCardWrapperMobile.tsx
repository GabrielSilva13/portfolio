'use client'

import { experiences } from '@/constants'
import { fadeIn } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const ExperienceCardWrapperMobile = () => {
  return (
    <div className="mt-7 flex flex-col items-center justify-center gap-5">
      {experiences.map((experience, index) => (
        <motion.div
          className="flex w-full flex-col items-center gap-4 rounded-md bg-[#1d1836] p-4"
          key={index + 1}
        >
          <Image
            className="mx-auto"
            src={experience.icon}
            alt={experience.company_name}
          />
          <strong>{experience.company_name}</strong>
          <strong>{experience.title}</strong>
          <time dateTime={experience.date}>{experience.date}</time>
          <ul className="visible ml-5 mt-5 list-disc space-y-2">
            {experience.points.map((point, index) => (
              <motion.li
                variants={fadeIn({
                  delay: 0.3 * index,
                  direction: 'right',
                  duration: 0.75,
                  type: 'spring',
                })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="pl-1 text-sm tracking-wider text-white-100"
                key={`experience-point-${index}`}
              >
                {`${point}`}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
