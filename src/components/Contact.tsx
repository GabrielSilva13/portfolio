import { useState, useRef, FormEvent } from "react"
import { motion } from "framer-motion"

import { toast } from "react-toastify"

import emailjs from "@emailjs/browser"

import { styles } from "../style"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

type ContactFormProps = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  } as ContactFormProps)
  const [loading, setLoading] = useState(false)

  const formRef = useRef(null)

  const disableButton =
    form.name === "" || form.email === "" || form.message === ""

  function handleChange(e: any) {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_hlr9gbn",
        "template_vc9rwpt",
        {
          from_name: form.name,
          to_name: "Gabriel Gonçalves da Silva",
          from_email: form.email,
          to_email: "gabriel-onimusha@hotmail.com",
          message: form.message,
        },
        "d1J6f7I8yZQIX1VV_"
      )
      .then(
        () => {
          setLoading(false)
          toast.success(
            "Obrigado pela preferência, entrarei em contato o mais breve possível!"
          )

          setForm({
            name: "",
            email: "",
            message: "",
          })
        },
        (error) => {
          setLoading(false)

          console.error(error)

          toast.error("Algo deu errado, tente novamente mais tarde")
        }
      )
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <p className={styles.sectionSubText}>Entre em contato</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>

        <form
          className="mt-12 flex flex-col gap-8"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col" htmlFor="name">
            <span className="text-white font-medium mb-4">Seu nome</span>
            <input
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Qual o seu nome ?"
            />
          </label>

          <label className="flex flex-col" htmlFor="email">
            <span className="text-white font-medium mb-4">Seu Email</span>
            <input
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Qual o seu Email ?"
            />
          </label>

          <label className="flex flex-col" htmlFor="name">
            <span className="text-white font-medium mb-4">Sua mensagem</span>
            <textarea
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="O que gostaria de me dizer ?"
            />
          </label>

          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:cursor-not-allowed disabled:opacity-[0.67]"
            disabled={disableButton}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
