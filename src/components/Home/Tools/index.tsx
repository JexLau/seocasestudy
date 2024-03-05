import { H2 } from "@/base-components/Text"
import { ToolCard, tools1, tools2 } from "@/components/ToolCard"
import Image from "next/image"

export const Tools = () => {
  return <div className="mx-auto my-8 h-max w-full">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-gray-700">SEO TOOLS BOX</p>
      <H2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        SEO 工具
      </H2>
      <p className="mx-auto mt-4 text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
        Easy to use 10+ tools for better website visibility and traffic.
      </p>
    </div>
    <div className="links mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
      {tools1.map(item => {
        return <ToolCard key={item.title} {...item} />
      })}
    </div>
    <div className="links mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
      {tools2.map(item => {
        return <ToolCard key={item.title} {...item} />
      })}
    </div>
  </div>
}