import { H2 } from "@/base-components/Text"

export const Steps = () => {
  return <div className="mx-auto mt-8 h-max w-full">
  <div className="text-center">
    <p className="text-sm font-bold uppercase tracking-widest text-gray-700">HOW TO START</p>
    <H2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
      SEO 学习路线图
    </H2>
    <p className="mx-auto mt-4 text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
      Create your own product with us and practice seo skill with just 5 easy steps
    </p>
  </div>
  <div className="mt-20">
    <ul className="grid gap-x-4 sm:grid-cols-1 lg:grid-cols-3">
      <li className="mb-12 rounded-lg bg-gray-100 p-5 pb-10 text-center">
        <div className="flex flex-col items-center">
          <div className="relative top-0 -mt-16 flex-shrink-0">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-800 text-xl font-semibold text-white">
              1
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">关键词研究</h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              使用工具进行关键词研究
            </p>
            <p className="mt-2 text-base leading-6 text-gray-500">
              了解用户意图和关键词类型
            </p>
          </div>
        </div>
      </li>
      <li className="mb-12 rounded-lg bg-gray-100 p-5 pb-10 text-center">
        <div className="flex flex-col items-center">
          <div className="relative top-0 -mt-16 flex-shrink-0">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-800 text-xl font-semibold text-white">
              2
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">竞争分析</h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              分析竞争对手的SEO策略
            </p>
            <p className="mt-2 text-base leading-6 text-gray-500">
              获取竞争对手的关键词排名、反向链接等信息
            </p>
          </div>
        </div>
      </li>
      <li className="mb-12 rounded-lg bg-gray-100 p-5 pb-10 text-center">
        <div className="flex flex-col items-center">
          <div className="relative top-0 -mt-16 flex-shrink-0">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-800 text-xl font-semibold text-white">
              3
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">内容优化</h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              创建高质量原创且针对目标关键词优化的内容
            </p>
            <p className="mt-2 text-base leading-6 text-gray-500">
              理解用户需求，找到用户行为，做出产品
            </p>
          </div>
        </div>
      </li>
    </ul>
    <ul className="grid gap-x-4 sm:grid-cols-1 lg:grid-cols-2">
      <li className="mb-12 rounded-lg bg-gray-100 p-5 pb-10 text-center">
        <div className="flex flex-col items-center">
          <div className="relative top-0 -mt-16 flex-shrink-0">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-800 text-xl font-semibold text-white">
              4
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">技术优化</h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              确保网站的技术基础对搜索引擎友好
            </p>
            <p className="mt-2 text-base leading-6 text-gray-500">
              使用工具进行技术SEO审查
            </p>
          </div>
        </div>
      </li>
      <li className="mb-12 rounded-lg bg-gray-100 p-5 pb-10 text-center">
        <div className="flex flex-col items-center">
          <div className="relative top-0 -mt-16 flex-shrink-0">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-800 text-xl font-semibold text-white">
              5
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">链接建设</h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
            获取来自权威网站的反向链接
            </p>
            <p className="mt-2 text-base leading-6 text-gray-500">
            避免采用可能被搜索引擎视为操纵排名的链接建设策略。
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
}