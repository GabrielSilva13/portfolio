import Image, { StaticImageData } from 'next/image'
import { Tilt } from 'react-tilt'

type ServiceCardProps = {
  service: {
    title: string
    icon: StaticImageData
  }
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, icon } = service

  return (
    <Tilt className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card xs:w-[250px]">
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
          src={icon}
          alt={title}
          width={64}
          height={64}
        />

        <h3 className="text-center text-[20px] font-bold text-white">
          {title}
        </h3>
      </div>
    </Tilt>
  )
}
