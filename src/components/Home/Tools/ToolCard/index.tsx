import { H3, H4 } from '@/base-components/Text';
import EvenoddSvg from './evenodd.svg';
import Image from "next/image";

export const tools1: ToolCardProps[] = [{
  title: 'Google',
  desc: '由 Google 开发的网络搜索引擎，是万维网上使用最广泛的搜索引擎，每天提供数十亿的搜索结果。',
  icon: '',
  children: [
    {
      title: "Google Search",
      href: 'https://www.google.com/search?q=seocasestudy.dev',
    },
    {
      title: "Google Search Console",
      href: "https://search.google.com/search-console/",
    },
    {
      title: "Google Analytics",
      href: "https://analytics.google.com/analytics/",
    },
    {
      title: "Google Tag Manager",
      href: "https://tagmanager.google.com/",
    }
  ]
}, {
  title: 'Ahref',
  desc: 'Ahrefs 是一款综合性 SEO 工具，可为链接构建、关键词研究、竞争对手分析提供高级分析和见解。',
  icon: '',
  children: [
    {
      title: "Ahref",
      href: 'https://ahrefs.com/',
    },
    {
      title: "Keyword Difficulty Checker",
      href: "https://ahrefs.com/keyword-difficulty",
    },
    {
      title: "Backlink Checker",
      href: "https://ahrefs.com/backlink-checker",
    },
    {
      title: "Website Authority Checker",
      href: "https://ahrefs.com/website-authority-checker",
    }
  ]
}, {
  title: 'Extension',
  desc: '通过浏览器扩展程序，可以快速获取网站的 SEO 数据，方便站长进行 SEO 优化。',
  icon: '',
  children: [
    {
      title: "Website Traffic Rank",
      href: 'https://www.similarweb.com/corp/extension/',
    },
    {
      title: "Ahrefs SEO Toolbar",
      href: "https://ahrefs.com/seo-toolbar",
    },
    {
      title: "Keywords Everywhere",
      href: "https://keywordseverywhere.com/",
    },
    {
      title: "AITDK Extension",
      href: "https://aitdk.com/extension/",
    }
  ]
}]

export const tools2: ToolCardProps[] = [{
  title: 'Similarweb',
  desc: 'Similarweb 是一个数字情报平台，可提供对竞争对手网络流量和性能的洞察，帮助了解其市场份额和在线策略的有效性。',
  icon: '',
  children: [{
    title: "Similarweb",
    href: 'https://www.similarweb.com/',
  }]
}, {
  title: 'Semrush',
  desc: 'Semrush 是一款面向数字营销专业人士的一体化营销工具包，为 SEO、PPC、内容、社交媒体和竞争性研究提供解决方案。',
  icon: '',
  children: [{
    title: "Semrush",
    href: 'https://www.semrush.com/',
  }]
}, {
  title: 'PageSpeed',
  desc: 'PageSpeed Insights (PSI) 报告移动和桌面设备上页面的用户体验，并提供有关如何改进该页面的建议。',
  icon: '',
  children: [{
    title: "PageSpeed Insights",
    href: 'https://pagespeed.web.dev/',
  }]
}]

export interface ToolCardProps {
  title: string;
  desc?: string;
  href?: string;
  icon?: string;
  children?: ToolCardProps[]
}

export const ToolCard = (props: ToolCardProps) => {
  return <div className="rounded-lg bg-white px-8 py-10 shadow-lg">
    <H3 className="mb-4 text-[20px] font-extrabold leading-none text-black sm:text-[30px]">
      <span>{props.title}</span>
    </H3>
    <div className="text-lg leading-[1.8] text-black">
      <p>{props.desc}</p>
    </div>
    <ul className="mt-6 sm:mt-10">
      {props.children?.map(item => {
        return <li key={item.title} className="border-b border-solid border-black pb-4 pt-4 text-black hover:animate-swing hover:bg-gray-100 hover:px-6">
          <H4 className='m-0'>
            <a rel="nofollow" className="flex items-center justify-between text-lg font-medium sm:text-xl"
              href={item.href}>
              <span>{item.title}</span>
              <Image src={EvenoddSvg} alt={item.title} title={item.title} className="inline-block h-6" />
            </a>
          </H4>
        </li>
      })}
    </ul>
  </div>
}