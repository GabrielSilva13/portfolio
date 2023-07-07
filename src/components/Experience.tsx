import { motion } from "framer-motion"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { styles } from "../style"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import { ExperienceCardProps } from "../@types/experience"

const ExperienceCard = ({
  title,
  company_name,
  date,
  icon,
  iconBg,
  points,
}: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentArrowStyle={{
        borderRight: "7px solid #232631",
      }}
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            className="w-[60%] h-[60%] object-contain"
            src={icon}
            alt={company_name}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p
          className="text-secondary text-base font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            className="text-white-100 text-sm pl-1 tracking-wider"
            key={`experience-point-${index}`}
          >
            {`${point}`}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>O que eu fiz até agora</p>
        <h2 className={styles.sectionHeadText}>Experiências de Trabalho.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")
