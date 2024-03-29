import { Cases } from '@/components/Home/Cases';
import { Docs } from '@/components/Home/Docs';
import { FAQ } from '@/components/Home/FAQ';
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
      <Meta title={'真实案例，真诚分享：免费获取资料和工具，通过案例学习 SEO，开启网站优化新篇 - SEO Case Study'} description={"SEO Case Study 是一份 SEO 指南，专注于提供 SEO 教程和实践案例，旨在通过丰富的实战案例和工具，帮助站长在实际项目中轻松应用 SEO 策略。"} locale={locale} />
      <MainContent>
        <Hero />
        <Container className='leading-8'>
          <Steps />
          <Docs />
          <Tools />
          <Cases />
          <FAQ />
        </Container>
      </MainContent>
    </>
  )
}
