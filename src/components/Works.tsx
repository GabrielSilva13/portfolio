import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../style"
import { github, link } from "../assets"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { projects } from "../constants"
import { ProjectCardProps } from "../@types/works"

const ProjectCard = ({
  index,
  image,
  name,
  description,
  source_code_link,
  tags,
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="relative w-full h-[230px]">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={image}
            alt={name}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
              role="button"
              onClick={() => {
                window.open(source_code_link, "_blank")
              }}
            >
              {name === "Noar Cloud" ? (
                <img
                  className="w-1/2 h-1/2 object-contain"
                  src={link}
                  alt="ícone de link"
                />
              ) : (
                <img
                  className="w-1/2 h-1/2 object-contain"
                  src={github}
                  alt="GitHub"
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-2xl">{name}</h3>
          <p className="mt-2 text-secondary text-sm">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              className={`text-sm ${tag.color}`}
              key={tag.name}
              title={tag.name}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Meus Trabalhos</p>
        <h2 className={styles.sectionHeadText}>Projetos.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-base max-w-3xl leading-8"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Os projetos a seguir, é uma demostração de minhas habilidades e
          experiencias em projetos reais dando alguns exemplos do meu trabalho,
          cada projeto é brevemente descrito com links para os repositórios e
          demonstrações ao vivo dos mesmos. Refletindo minhas habilidades em
          resolver problemas, trabalhar com tecnologias diversificadas e
          gerenciar meus projetos de forma produtiva e efetiva.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")
