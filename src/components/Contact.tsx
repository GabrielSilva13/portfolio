'use client'

import { useState, useRef, ChangeEvent, FormEvent } from 'react'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'
import { EarthCanvas } from './canvas/EarthCanvas'

type FormProps = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [form, setForm] = useState({} as FormProps)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef(null)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY ?? '',
        {
          from_name: form.name,
          to_name: 'Gabriel',
          from_email: form.email,
          to_email: 'gabriel-onimusha@hotmail.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setIsLoading(false)
          // Colocar toast
          alert('Mensagem enviada com sucesso!')
          setForm({
            email: '',
            name: '',
            message: '',
          })
        },
        (error: unknown) => {
          setIsLoading(false)
          console.log(error)
        },
      )
  }

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden py-10 sm:py-16 xl:mt-12 xl:flex-row">
      <motion.div
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
        variants={slideIn({
          direction: 'left',
          type: 'tween',
          delay: 0.2,
          duration: 1,
        })}
      >
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          Entre em contato
        </p>
        <h3 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Contato.
        </h3>

        <form
          className="mt-12 flex flex-col gap-8"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Seu Nome</span>
            <input
              required
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary focus:ring"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Qual o seu nome ?"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Seu email</span>
            <input
              required
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary focus:ring"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Qual o seu email ?"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Sua mensagem</span>
            <textarea
              required
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary focus:ring"
              name="message"
              value={form.message}
              rows={7}
              onChange={handleChange}
              placeholder="O que gostaria de dizer ?"
            />
          </label>

          <button
            className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </motion.div>

      <motion.div
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        variants={slideIn({
          direction: 'right',
          type: 'tween',
          delay: 0.2,
          duration: 1,
        })}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export const ContactSection = SectionWrapper({
  Component: Contact,
  idName: 'contact',
})
