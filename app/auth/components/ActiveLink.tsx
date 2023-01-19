'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CSSProperties } from 'react'

const style: CSSProperties = {
  background: '#FF6584',
  color: '#FFFFFF',
  borderRadius: '50px'
}

interface IProps {
  text: string
  href: string
}

export default function ActiveLink({ text, href }: IProps) {
  return (
    <button
      type="button"
      className="btn-standard h-10 w-1/2"
      style={usePathname() === href ? style : undefined}
    >
      <Link
        href={href}
        className="flex w-full h-10 justify-center items-center"
      >
        {text}
      </Link>
    </button>
  )
}
