import Image, { type StaticImageData } from 'next/image'

type FeedbackCardProps = {
  testimonial: string
  name: string
  designation: string
  company: string
  image: StaticImageData
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  company,
  designation,
  image,
  name,
  testimonial,
}) => (
  <>
    <p className="text-5xl font-black text-white">&#34;</p>

    <p className="text-lg tracking-wider text-white">{testimonial}</p>
    <div className="mt-auto">
      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-base font-medium text-white ">
            <span className="blue-text-gradient">&#64;</span> {name}
          </p>
          <p className="mt-1 text-xs text-secondary">
            {designation} {company}
          </p>
        </div>

        <Image
          className="rounded-full object-cover"
          src={image}
          alt={`feedback-by-${name}`}
          width={40}
          height={40}
        />
      </div>
    </div>
  </>
)
