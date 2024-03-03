import { MainContent } from "@/layout/Main"
import { Meta } from "@/layout/Meta"

const TermPage = ({ params }: { params: Record<string, string> }) => {
  const { locale = 'en' } = params;

  return (
    <>
      <Meta title={"Terms of Service | User Agreement & Policies"} description={""} locale={locale} pageurl="/terms-of-service" />
      <MainContent>
        <div className="leading-loose px-10 w-[95%] lg:w-[60%] mx-auto">
          <h1 className="text-3xl font-bold my-10 tracking-tight text-main-text sm:text-4xl text-center">
            Term of Service
          </h1>
          <p className=" leading-10">{"Last Updated: February 20, 2024"}</p>
          <p className=" leading-10">{"Thank you for choosing SEO Case Study! This Privacy Policy explains our practices regarding the collection, use, and protection of your information when you interact with our platform located at "}
            <a href="https://seocasestudy.com" className="underline text-main-blue">seo case study</a>
          </p>
          <h2 className={"text-white text-2xl my-8 font-bold"}>{"1、Information We Collect:"}</h2>
          <p className=" leading-10">{"a. Personal Data: When you use SEO Case Study, we may collect your name, email address, and payment information for order processing purposes."}</p>
          <p className=" leading-10">{"b. Non-Personal Data: We may also collect non-personal data through web cookies to enhance your browsing experience."}</p>
          <h2 className={"text-white text-2xl my-8 font-bold"}>{"2、Purpose of Data Collection:"}</h2>
          <p className=" leading-10">We collect your personal data solely for order processing purposes.</p>
          <h2 className={"text-white text-2xl my-8 font-bold"}>3、Data Sharing:</h2>
          <p className=" leading-10">{"We do not share your personal data with any third parties."}</p>
          <h2 className={"text-white text-2xl my-8 font-bold"}>{"4、Children's Privacy:"}</h2>
          <p className=" leading-10">{"SEO Case Study does not knowingly collect any personal data from children."}</p>
          <h2 className={"text-white text-2xl my-8 font-bold"}>{"5、Updates to the Privacy Policy:"}</h2>
          <p className=" leading-10">We will notify users of any updates to this Privacy Policy via email.</p>
          <h2 className={"text-white text-2xl my-8 font-bold"}>{"6、Contact Information:"}</h2>
          <p className=" leading-10">
            If you have any questions or concerns regarding our Privacy Policy, please contact us at <a href="mailto:jexlau.dev@gmail.com" className="underline text-main-blue">jexlau.dev@gmail.com</a>.
          </p>
        </div>
      </MainContent>
    </>
  )

}

export default TermPage
