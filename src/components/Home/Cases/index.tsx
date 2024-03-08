import { H2 } from "@/base-components/Text"
import { cases } from "./constants"
import { CaseCard } from "./CaseCard"
import { NormalButton, PrimaryButton } from "@/base-components/Button"

export const Cases = () => {
  return <div className="mx-auto mt-8 h-max w-full">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-gray-700">LEARN FROM CASES</p>
      <H2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        SEO 案例分享
      </H2>
      <p className="mx-auto mt-4 text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
        Easy to learn quickly from practical simple case study
      </p>
    </div>
    <div className="my-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
      {cases.map(item => {
        return <CaseCard key={item.title} {...item} />
      })}
    </div>
    <div className="my-8 flex w-full justify-center">
      <NormalButton href="/" className="px-8">
        More Cases
      </NormalButton>
    </div>
  </div>
}
