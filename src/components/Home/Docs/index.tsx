import { H2 } from "@/base-components/Text"
import { templates } from "./constants"
import { TempCard } from "./TempCard"

export const Docs = () => {
  return <div className="mx-auto mt-8 h-max w-full">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-gray-700">WEBSITE OPENSOURCE TEMPLATES</p>
      <H2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        快速建站模版
      </H2>
      <p className="mx-auto mt-4 text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
        Quickly build a website with the help of these opensource templates
      </p>
    </div>
    <div className="links mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
      {templates.map(item => {
        return <TempCard key={item.title} temp={item} />
      })}
    </div>
  </div>
}