import { H1, H2, H3, H4, P } from '@/base-components/Text';
import { Cases } from '@/components/Home/Cases';
import { Hero } from '@/components/Home/Hero';
import { Steps } from '@/components/Home/Steps';
import { Tools } from '@/components/Home/Tools';
import { Container } from '@/layout/Container';
import { MainContent } from '@/layout/Main';
import { Meta } from '@/layout/Meta'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Home({ params }: { params: Record<string, string> }) {
  const { locale = 'en' } = params;
  unstable_setRequestLocale(locale);

  return (
    <>
      <Meta title={'通过案例学习 SEO - SEO Case Study'} description={"SEO Case Study 是一份 SEO 指南，专注于提供 SEO 教学和实践案，旨在通过丰富的实战案例和工具，帮助站长在实际项目中轻松应用 SEO 策略。"} locale={locale} />
      <MainContent>
        <Hero />
        <Container className='leading-8'>
          <Steps />
          <Tools />
          <Cases />
        </Container>
      </MainContent>
    </>
  )
}
