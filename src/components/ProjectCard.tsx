/* eslint-disable camelcase */

import { github, link } from '@/assets'

import Image, { StaticImageData } from 'next/image'

import { Tilt } from 'react-tilt'

type ProjectCardProps = {
  name: string
  description: string
  tags: { name: string; color: string }[]
  image: StaticImageData
  source_code_link: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  description,
  image,
  name,
  source_code_link,
  tags,
}) => {
  const haveLivePreview = name === 'Noar Cloud' || name === 'Gramleft'

  return (
    <Tilt
      className="h-[458px] w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]"
      data-options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <div className="relative h-[230px] w-full">
        <Image
          className="h-full w-full rounded-2xl object-cover"
          src={image}
          alt={name}
        />

        <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
          <Image
            src={haveLivePreview ? link : github}
            alt="github"
            className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full object-contain p-1"
            onClick={() => window.open(source_code_link, '_blank')}
          />
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-[24px] font-bold text-white">{name}</h3>
        <p className="mt-2 text-[14px] text-secondary">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`"text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  )
}
