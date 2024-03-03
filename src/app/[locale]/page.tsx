import { ContentSection } from '@/components/ContentSection'
import { MainContent } from '@/layout/Main';
import { Meta } from '@/layout/Meta'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Home({ params }: { params: Record<string, string> }) {
  const { locale = 'en' } = params;
  unstable_setRequestLocale(locale);

  return (
    <>
      <Meta title={'SEO 建站学习路线图 - SEO Case Study'} description={"专注于为程序员提供 SEO 教学和实践案"}  locale={locale} />
      <MainContent>
        <h1>SEO 建站学习路线图</h1>
        <p>专注于为程序员提供 SEO 教学和实践案例</p>
        <div className="mx-auto max-w-4xl text-center my-4">
          <h2 className="text-main-text text-xl lg:text-4xl flex justify-center items-center my-6 text-center">
            
          </h2>
          <p className="my-8 text-main-text text-center">
          </p>
        </div>
      </MainContent>
    </>
  )
}
