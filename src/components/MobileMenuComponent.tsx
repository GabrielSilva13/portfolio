'use client'

import { useState } from 'react'
import { close, menu } from '@/assets'
import { navLinks } from '@/constants'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type MobileMenuComponentProps = {
  active: string
  setActive: (active: string) => void
}

export const MobileMenuComponent: React.FC<MobileMenuComponentProps> = ({
  active,
  setActive,
}) => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="flex flex-1 items-center justify-end sm:hidden">
      <Image
        src={toggle ? close : menu}
        alt="Menu mobile hamburger"
        width={28}
        height={28}
        className="cursor-pointer object-contain"
        onClick={() => setToggle((prevState) => !prevState)}
      />

      <AnimatePresence>
        {toggle && (
          <motion.div
            key={'Mobile menu'}
            className="black-gradient absolute right-0 top-20 z-10 mx-4 my-2 flex min-w-[300px] rounded-xl p-6"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } text-base font-medium`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle((prevState) => !prevState)
                  }}
                >
                  <Link
                    className="outline-none focus:ring"
                    href={`#${link.id}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
