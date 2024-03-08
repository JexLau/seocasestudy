import { H2 } from "@/base-components/Text"
import { steps } from "./constants"
import { StepCard } from "./StepCard"

export const Steps = () => {
  return <div className="mx-auto mt-8 h-max w-full">
  <div className="text-center">
    <p className="text-sm font-bold uppercase tracking-widest text-gray-700">HOW TO START</p>
    <H2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
      SEO 学习路线图
    </H2>
    <p className="mx-auto mt-4 text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
      Create your own product with us and practice seo skill with just 6 easy steps
    </p>
  </div>
  <div className="mt-20">
    <ul className="grid gap-x-4 sm:grid-cols-1 lg:grid-cols-3">
      {steps.map((item, index) => {
        return <StepCard key={item.title} {...item} index={index + 1} />
      })}
    </ul>
  </div>
</div>
}