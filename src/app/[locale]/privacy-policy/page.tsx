import { MainContent } from "@/layout/Main"
import { Meta } from "@/layout/Meta"

const PolicyPage = ({ params }: { params: Record<string, string> }) => {
  const { locale = 'en' } = params;

  return (
    <>
      <Meta title={""} description={""} keywords="" locale={locale}  pageurl="/privacy-policy" />
      <MainContent>
        <div className="mx-auto w-[95%] px-10 leading-loose lg:w-[60%]">
          <h1 className="my-10 text-center text-3xl font-bold tracking-tight text-main-text sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="leading-10">{"Last Updated: February 20, 2024"}</p>
          <p className="leading-10">{"Thank you for choosing Seo Case Study! This Privacy Policy explains our practices regarding the collection, use, and protection of your information when you interact with our platform located at "}
            <a href="https://seocasestudy.dev" className="text-main-blue underline">seo case study</a>
          </p>
          <h2 className={"my-8 text-2xl font-bold text-main-text"}>{"1、Information We Collect:"}</h2>
          <p className="leading-10">{"a. Personal Data: When you use Seo Case Study, we may collect your name, email address, and payment information for order processing purposes."}</p>
          <p className="leading-10">{"b. Non-Personal Data: We may also collect non-personal data through web cookies to enhance your browsing experience."}</p>
          <h2 className={"my-8 text-2xl font-bold text-main-text"}>{"2、Purpose of Data Collection:"}</h2>
          <p className="leading-10">We collect your personal data solely for order processing purposes.</p>
          <h2 className={"my-8 text-2xl font-bold text-main-text"}>3、Data Sharing:</h2>
          <p className="leading-10">{"We do not share your personal data with any third parties."}</p>
          <h2 className={"my-8 text-2xl font-bold text-main-text"}>{"4、Children's Privacy:"}</h2>
          <p className="leading-10">{"Seo Case Study does not knowingly collect any personal data from children."}</p>
          <h2 className={"my-8 text-2xl font-bold text-main-text"}>{"5、Updates to the Privacy Policy:"}</h2>
          <p className="leading-10">We will notify users of any updates to this Privacy Policy via email.</p>
          <h2 className={"my-8 text-2xl font-bold text-main-text"}>{"6、Contact Information:"}</h2>
          <p className="leading-10">
            If you have any questions or concerns regarding our Privacy Policy, please contact us at <a href="mailto:jexlau.dev@gmail.com" className="text-main-blue underline">jexlau.dev@gmail.com</a>.
          </p>
        </div>
      </MainContent>
    </>
  )

}

export default PolicyPage
