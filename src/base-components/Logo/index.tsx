import Image from 'next/image'
import logo from '@/images/logo.svg'
export function Logo(props: { className?: string }) {
  return (
    <div className='flex items-center max-w-[250px]'>
      <Image src={logo} alt={'SEO Case Study Logo'} unoptimized  {...props} />
      <p className='bg-gradient-to-l from-main-blue to-main-purple bg-clip-text text-main-text text-[14px] max-w-[200px] ml-2 flex flex-col items-center'>
        <span>SEO Case Study</span>
      </p>
    </div>
  )
}
