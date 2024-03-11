import { H3 } from "@/base-components/Text";
import Image, { StaticImageData } from "next/image"
import Link from "next/link";

export interface TempCardProps {
  href: string;
  desc: string;
  title: string;
  img: StaticImageData
}

export const TempCard = ({ temp }: { temp: TempCardProps }) => {
  return <Link href={temp.href} target="_blank" className="max-w-sm overflow-hidden rounded shadow-lg">
    <Image className="w-full" src={temp.img} alt={temp.title} title={temp.title} width={100} height={100} />
    <div className="px-6 py-4">
      <H3 className="mb-2 text-xl font-bold">{temp.title}</H3>
      <p className="text-base text-gray-700">
        {temp.desc}
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">#nextjs</span>
      <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">#i18n</span>
      <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">#supabase</span>
    </div>
  </Link>
}