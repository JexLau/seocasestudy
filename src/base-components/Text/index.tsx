import clsx from "clsx"
import { PropsWithChildren } from "react"

export interface TextProps extends PropsWithChildren {
  className?: string
}

export const H1 = ({ children, ...props }: TextProps) => {
  return <h1 className={clsx(["text-4xl font-bold my-10  text-main-text sm:text-4xl", props?.className])}>{children}</h1>
}

export const H2 = ({ children, ...props }: TextProps) => {
  return <h2 className={clsx(["text-main-text text-xl lg:text-3xl my-6", props?.className])} {...props}>{children}</h2>
}

export const H3 = ({ children, ...props }: TextProps) => {
  return <h3 className={clsx(["text-main-text text-lg my-4", props?.className])} {...props}>{children}</h3>
}


export const H4 = ({ children, ...props }: TextProps) => {
  return <h4 className={clsx(["text-main-text text-base my-2", props?.className])} {...props}>{children}</h4>
}

export const P = ({ children, ...props }: TextProps) => {
  return <p className={clsx(["text-main-text", props?.className])} {...props}>{children}</p>
}
