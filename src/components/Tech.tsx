'use client'
import { technologies } from '@/constants'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import useIsMobile from '@/hooks/useIsMobile'
import Image from 'next/image'
import { Tilt } from 'react-tilt'
import { BallCanvas } from './canvas/BallCanvas'

const Tech = () => {
  const isMobile = useIsMobile({ screenWidth: '500' })
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {isMobile ? (
        <>
          {technologies.map((tech) => (
            <Tilt
              key={tech.name}
              className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card xs:w-[250px]"
            >
              <div
                className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
                data-options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
              >
                <Image
                  className="object-contain"
                  src={tech.icon}
                  alt={tech.name}
                  width={64}
                  height={64}
                />

                <h3 className="text-center text-[20px] font-bold text-white">
                  {tech.name}
                </h3>
              </div>
            </Tilt>
          ))}
        </>
      ) : (
        <>
          {technologies.map((tech) => (
            <div key={tech.name} className="h-28 w-28">
              <BallCanvas icon={tech.icon.src} />
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export const TechSection = SectionWrapper({
  Component: Tech,
  idName: '',
})
