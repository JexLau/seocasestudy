import { H3, P } from "@/base-components/Text";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { UserCircleIcon } from '@heroicons/react/24/solid'

export interface CaseCardProps {
  title: string;
  author: string;
  link: string;
  image: StaticImageData;
  desc: string;
}
export const CaseCard = ({ title, author, link, image, desc }: CaseCardProps) => {
  return <Link href={link} target="_blank" passHref className="overflow-hidden rounded shadow-lg hover:animate-swingy">
      <div className="relative">
        <Image aria-label={title} alt={title} title={title} className="h-[224px] object-cover object-top" src={image} height={224} width={400} />
        <div
          className="absolute bottom-0 left-0 right-0 top-0 bg-gray-900 opacity-25 transition duration-300 hover:bg-transparent">
        </div>
        <div
          className="absolute right-0 top-0 mr-3 mt-3 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-800 px-4 text-sm text-white transition duration-500 ease-in-out hover:bg-white hover:text-gray-800">
          <span className="font-bold">7</span>
          <small>March</small>
        </div>
      </div>
      <div className="px-6 py-2">
        <H3 className="line-clamp-2 overflow-hidden overflow-ellipsis">{title}</H3>
        <P className="line-clamp-3 overflow-hidden overflow-ellipsis">
          {desc}
        </P>
      </div>
      <div className="flex flex-row items-center px-6 py-2">
        <span className="font-regular mr-1 flex flex-row items-center py-1 text-sm text-gray-500">
          <UserCircleIcon className="h-4 w-4" />
          <span className="ml-1">{author}</span></span>
      </div>
  </Link>
}