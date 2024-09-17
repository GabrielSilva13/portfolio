'use client'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Image from 'next/image'
import { experiences } from '@/constants'
import { motion } from 'framer-motion'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { fadeIn } from '@/utils/motion'

type ExperienceCardProps = {
  title: string
  company_name: string
  icon: string | StaticImport
  iconBg: string
  date: string
  points: string[]
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company_name,
  date,
  icon,
  iconBg,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentArrowStyle={{
        borderRight: '7px solid #232631',
      }}
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
        visibility: 'visible',
      }}
      date={date}
      iconStyle={{ background: iconBg, visibility: 'visible' }}
      icon={
        <div className="visible flex h-full w-full items-center justify-center ">
          <Image
            className="h-[60%] w-[60%] object-contain"
            src={icon}
            alt={company_name}
          />
        </div>
      }
    >
      <motion.div
        className="visible"
        variants={fadeIn({
          delay: 0,
          direction: 'up',
          duration: 0.75,
          type: 'spring',
        })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p
          className="text-base font-semibold text-secondary"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </motion.div>

      <ul className="visible ml-5 mt-5 list-disc space-y-2">
        {points.map((point, index) => (
          <motion.li
            variants={fadeIn({
              delay: 0.3 * index,
              direction: 'up',
              duration: 0.75,
              type: 'spring',
            })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="pl-1 text-sm tracking-wider text-white-100"
            key={`experience-point-${index + 1}`}
          >
            {`${point}`}
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export const ExperienceCardWrapper = () => {
  return (
    <motion.div
      className="mt-20 flex flex-col"
      variants={fadeIn({
        delay: 0.25,
        direction: 'right',
        duration: 0.75,
        type: 'tween',
      })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <VerticalTimeline lineColor="">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </VerticalTimeline>
    </motion.div>
  )
}
