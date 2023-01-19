"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CSSProperties, FC } from "react"

const style: CSSProperties = {
    background: '#FF6584',
    color: '#FFFFFF',
    borderRadius: '50px'
}

interface Props {
  text: string,
  href: string
}

export const ActiveLink: FC<Props> = ({ text, href }) => {


  return (
    <button className='btn-standard h-10 w-1/2' style={usePathname() === href ? style : undefined}>
        <Link href={href} className="flex w-full h-10 justify-center items-center">{text}</Link>
    </button>
  )
}
