import clsx from "clsx"
import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge";

export interface TextProps extends PropsWithChildren {
  className?: string
}

export const H1 = ({ children, ...props }: TextProps) => {
  const className = twMerge(clsx(["text-4xl font-bold my-10  text-main-text sm:text-4xl", props?.className]))

  return <h1 {...props} className={className}>{children}</h1>
}

export const H2 = ({ children, ...props }: TextProps) => {
  const className = twMerge(clsx(["text-main-text text-xl lg:text-3xl my-6", props?.className]))

  return <h2 {...props} className={className}>{children}</h2>
}

export const H3 = ({ children, ...props }: TextProps) => {
  const className = twMerge(clsx(["text-main-text text-lg my-4", props?.className]))
  return <h3 {...props} className={className} >{children}</h3>
}


export const H4 = ({ children, ...props }: TextProps) => {
  const className = twMerge(clsx(["text-main-text text-base my-2", props?.className]))
  return <h4 {...props} className={className}>{children}</h4>
}

export const P = ({ children, ...props }: TextProps) => {
  const className = twMerge(clsx(["text-main-text", props?.className]))
  return <p  {...props} className={className}>{children}</p>
}
