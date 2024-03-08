import { H1, P } from "@/base-components/Text"
import { SuggestionClient } from "@/components/Suggestion"
import { MaskContainer } from "@/components/SvgMaskEffect"
import clsx from "clsx"

export const Hero = () => {
  const p1 = "SEO Case Study 是一份 SEO 指南，专注于提供 SEO 教学和实践案例"
  const p2 = "旨在通过丰富的实战案例和工具，帮助站长在实际项目中轻松应用 SEO 策略。"
  const p3 = "从 SEO 基础概念，如关键词研究、链接建设，到内容优化、技术 SEO，再到监测 SEO 指标、建立 SEO 策略，这里您将找到一份完整的学习路线图，包含了 SEO 社区开发的免费可靠的综合博客文章、指南、在线课程、资源和工具。"

  const h1 = <>SEO Case Study <br /> 通过案例学习 SEO </>
  const version = "v1.0.0"
  const udpate = "UPDATED On March 4, 2024"
  return <div className="flex w-full flex-col items-center justify-center overflow-hidden md:h-[46rem] md:flex-row">
    <MaskContainer
      className="h-[46rem]"
      revealText={
        <div className="flex h-full w-full items-center justify-center bg-grid-black/[0.05] dark:bg-grid-white/[0.2]">
          <div className="flex max-w-4xl flex-col px-8">
            <H1>{h1}</H1>
            <p className='my-4 text-[30px] font-bold'>{version}</p>
            <p className='text-gray-400'>{udpate}</p>
            <p className='mt-8'>{p1}</p>
            <p className='my-4'>{p2}</p>
            <p className='my-4'>{p3}</p>
          </div>
        </div>
      }
    >
      <div className="mx-auto flex max-w-4xl flex-col px-8">
        <p className={clsx(["text-4xl font-bold my-10  text-main-text sm:text-4xl", "text-red-500"])}>{h1}</p>
        <p className='my-4 text-[30px] font-bold'>{version}</p>
        <p className='text-gray-400'>{udpate}</p>
        <p className='mt-8'>{p1}</p>
        <p className='my-4'>{p2}</p>
        <p className='my-4'>{p3}</p>
      </div>
    </MaskContainer>
    <SuggestionClient />
  </div>
}