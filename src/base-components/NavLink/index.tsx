import clsx from 'clsx'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export interface NavLinkProps extends PropsWithChildren {
  href: string
  className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(["inline-block rounded-lg px-2 py-1 text-base hover:bg-slate-100 hover:text-main-text bg-gradient-to-l from-main-blue to-main-purple bg-clip-text text-transparent", className])}
    >
      {children}
    </Link>
  )
}
