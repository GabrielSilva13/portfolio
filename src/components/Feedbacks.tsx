import { motion } from "framer-motion"

import { styles } from "../style"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"

import { testimonials } from "../constants"

type FeedbackCardProps = {
  testimonial: string
  name: string
  designation: string
  company: string
  image: string
  index: number
}

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
  index,
}: FeedbackCardProps) => (
  <motion.div
    className="bg-black-200 p-10 rounded-3xl sm:w-[320px] w-full"
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
  >
    <p className="text-white font-black text-5xl">&#34;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-lg">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-white font-medium text-base ">
            <span className="blue-text-gradient">&#64;</span> {name}
          </p>
          <p className="mt-1 text-secondary text-xs">
            {designation} na {company}
          </p>
        </div>

        <img
          className="w-10 h-10 rounded-full object-cover"
          src={image}
          alt={`feedback-by-${name}`}
        />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Oque dizem meus clientes</p>
          <h2 className={styles.sectionHeadText}>Depoimentos.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")
