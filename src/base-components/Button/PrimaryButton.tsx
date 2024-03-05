import clsx from "clsx"
import { PropsWithChildren } from "react"
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import loading from '@/images/loading.svg'
import Image from "next/image"

export interface PrimaryButtonProps extends PropsWithChildren {
  onClick?: () => void
  className?: string
  href?: string
  isLoading?: boolean
}

export const PrimaryButton = ({ children, onClick,isLoading, ...props }: PrimaryButtonProps) => {
  if (isLoading) {
    return <div className={clsx(["duration-700 inset-0 flex items-center justify-center bg-gradient-to-l from-main-blue to-main-purple px-8 py-[6px] transition-opacity ease-in-out group-hover:opacity-0"], props.className)}>
      <Image alt="loading" className="h-6 w-6 animate-spin" src={loading} />
    </div>
  }
  if (props.href) {
    return <a href={props.href} className={clsx(["group block px-6 py-[7px] rounded transition duration-700 ease-in-out indent-4 text-center font-bold text-white relative overflow-hidden cursor-pointer ", props.className])}>
      <div className="absolute inset-0 bg-gradient-to-l from-main-blue to-main-purple transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-main-purple to-main-blue opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"></div>
      <span className="relative inline-flex items-center">{children}
        <ArrowRightIcon className="ml-4 h-5 w-5 animate-swing text-white" />
      </span>
    </a>
  }
  return <div onClick={onClick} className={clsx(["group block px-6 py-[7px] rounded transition duration-700 ease-in-out indent-4  font-bold text-white text-center relative overflow-hidden cursor-pointer ", props.className])}>
    <div className="absolute inset-0 bg-gradient-to-l from-main-blue to-main-purple transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
    <div className="absolute inset-0 bg-gradient-to-l from-main-purple to-main-blue opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"></div>
    <span className="relative inline-flex items-center">{children}
      <ArrowRightIcon className="ml-4 h-5 w-5 animate-swing text-white" />
    </span>
  </div>
}

export default PrimaryButton;