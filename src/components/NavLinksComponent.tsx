'use client'

import { logo } from '@/assets'
import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MobileMenuComponent } from './MobileMenuComponent'

export const NavLinksComponent = () => {
  const [active, setActive] = useState('')

  return (
    <>
      <Link
        className="flex items-center gap-2 outline-none focus:ring"
        href="/"
        onClick={() => {
          setActive('')
          window.scrollTo(0, 0)
        }}
      >
        <Image
          className="object-contain"
          src={logo}
          alt="logo"
          width={36}
          height={36}
        />

        <p className="cursor-pointer text-[18px] font-bold text-white">
          Gabriel <span className="hidden sm:inline">| Gonçalves da Silva</span>
        </p>
      </Link>

      <ul className="hidden list-none flex-row gap-10 sm:flex">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? 'text-white' : 'text-secondary'
            } text-[18px] transition-colors hover:text-white`}
            onClick={() => setActive(link.title)}
          >
            <Link className="outline-none focus:ring" href={`#${link.id}`}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <MobileMenuComponent active={active} setActive={setActive} />
    </>
  )
}
