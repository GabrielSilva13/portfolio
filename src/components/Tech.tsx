'use client'
import { technologies } from '@/constants'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import { BallCanvas } from './canvas/BallCanvas'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div key={tech.name} className="h-28 w-28">
          <BallCanvas icon={tech.icon.src} />
        </div>
      ))}
    </div>
  )
}

export const TechSection = SectionWrapper({
  Component: Tech,
  idName: '',
})
