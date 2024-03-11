import Image from 'next/image'
import logo from '@/images/logo.svg'
export function Logo(props: { className?: string }) {
  return (
    <div className='flex max-w-[250px] items-center'>
      <Image src={logo} alt={'SEO Case Study Logo'} title={'SEO Case Study Logo'} unoptimized  {...props} />
      <p className='ml-2 flex max-w-[200px] flex-col items-center bg-gradient-to-l from-main-blue to-main-purple bg-clip-text text-[14px] text-main-text'>
        <span>SEO Case Study</span>
      </p>
    </div>
  )
}
