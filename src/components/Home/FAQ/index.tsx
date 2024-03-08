import { H2 } from "@/base-components/Text"
import { faqs } from "./constants"
import { FAQCard } from "./FAQCard"

export const FAQ = () => {
  return <div className="mx-auto mt-12 h-max w-full" id="faq">
    <div className="text-center">
      {/* <p className="text-sm font-bold uppercase tracking-widest text-gray-700">SEO TOOLS BOX</p> */}
      <H2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        SEO 常见问题解答
      </H2>
      <p className="mx-auto mt-4 font-normal text-gray-700 lg:leading-8">
        Have a different question about SEO and can’t find the answer you’re looking for?
      </p>
      <p className="mx-auto mt-2 font-normal text-gray-700 lg:leading-8">
        Reach out to our support team by 
        <a href="mailto:jexlau.dev@gmail.com" className="text-indigo-600"> sending us an email </a>
        and we’ll get back to you as soon as we can.
      </p>
    </div>
    <div className="my-8 rounded-lg bg-white px-6 py-4">
      {faqs.map(item => {
        return <FAQCard faq={item} key={item.a} />
      })}
    </div>
  </div>
}