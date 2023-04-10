import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../style"

import { services } from "../constants"

import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

type ServiceCardProps = {
  index: number
  title: string
  icon: string
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          //@ts-ignore
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img className="w-16 h-16 object-contain" src={icon} alt={title} />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão Geral</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Sou um desenvolvedor de software habilidoso com experiência em HTML,
        CSS, TailwindCSS, SCSS, consumo de APIs, Framer-motion, Vite, CRA,
        Redux, Javascript, Typescript e React, tenho expertise em frameworks
        javacript como, Next e estou aprendendo Node.JS. Aprendo rápido, tenho
        espirito de equipe e gosto de trabalhar em conjunto com o cliente para
        resolver os problemas de forma precisa, escalável e user-friendly que
        resolvem problemas do mundo real, vamos trabalhar juntos e trazer vida
        para suas ideias!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
