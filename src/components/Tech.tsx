import { motion } from "framer-motion"
import { Tilt } from "react-tilt"

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { useEffect, useState } from "react"
import { TechMobileCardProps } from "../@types/tech"

const TechMobileCard = ({ index, name, icon }: TechMobileCardProps) => {
  return (
    <Tilt className="w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        initial={{ opacity: 0, y: 30 * index }}
        animate={{
          opacity: 1,
          transition: { type: "spring", delay: 0.2 * index },
          y: 0,
        }}
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
          <img className="w-16 h-16 object-contain" src={icon} alt={name} />
          <h3 className="text-white text-[20px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)")

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (e: any) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {isMobile ? (
        <>
          {technologies.map((tech, index) => (
            <TechMobileCard key={tech.name} index={index} {...tech} />
          ))}
        </>
      ) : (
        <>
          {technologies.map((tech) => (
            <div className="w-28 h-28" key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default SectionWrapper(Tech, "")
