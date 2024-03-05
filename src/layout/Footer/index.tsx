import { Container } from '@/layout/Container'
import { Logo } from '@/base-components/Logo'
import { NavLink } from '@/base-components/NavLink'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function Footer() {
  const t = useTranslations('Common')
  return (
    <footer className=" bg-main-bg">
      <Container>
        <nav className="pt-4 text-sm flex items-center justify-between" aria-label="quick links">
          <div className="flex gap-x-4">
            <NavLink className='!text-gray-500 !text-sm' href="/privacy-policy">{'Policy'}</NavLink>
            <NavLink className='!text-gray-500 !text-sm' href="/terms-of-service">{'Terms'}</NavLink>
          </div>
        </nav>
        <div className="flex flex-col items-center py-2 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <div
              className="group flex flex-col items-center gap-y-1"
              aria-label="TaxPal on Wechat">
              <svg className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700" width="24" height="24" viewBox="0 0 1024 1024" ><path d="M682.409135 315.751361c11.047614 0 21.978571 0.811482 32.821523 2.01796-29.490661-137.322575-176.304402-239.35132-343.883071-239.35132-187.352015 0-340.821339 127.703497-340.821339 289.864784 0 93.603865 51.058886 170.46951 136.381134 230.087329l-34.088376 102.528118 119.145587-59.747779c42.632983 8.438183 76.839039 17.114796 119.384018 17.114796 10.694573 0 21.300119-0.528026 31.816636-1.354857-6.658653-22.786982-10.516518-46.653553-10.516518-71.417563C392.646682 436.592566 520.513908 315.751361 682.409135 315.751361zM499.153414 223.342718c25.662473 0 42.662659 16.882506 42.662659 42.529629 0 25.544793-17.000186 42.662659-42.662659 42.662659-25.544793 0-51.176566-17.117866-51.176566-42.662659C447.977871 240.225223 473.609645 223.342718 499.153414 223.342718zM260.625856 308.535005c-25.541723 0-51.321876-17.117866-51.321876-42.662659 0-25.647123 25.780153-42.529629 51.321876-42.529629 25.543769 0 42.544979 16.882506 42.544979 42.529629C303.169811 291.417139 286.169625 308.535005 260.625856 308.535005z" fill="#64748b" p-id="1474"></path><path d="M993.473753 581.399603c0-136.263453-136.353504-247.335155-289.497417-247.335155-162.160263 0-289.880133 111.071701-289.880133 247.335155 0 136.498814 127.718847 247.335155 289.880133 247.335155 33.94102 0 68.173682-8.558933 102.263082-17.10354l93.483114 51.191916-25.631774-85.173868C942.502871 726.32432 993.473753 658.265248 993.473753 581.399603zM609.989755 538.752294c-16.97051 0-34.088376-16.882506-34.088376-34.103726 0-16.98279 17.117866-34.085306 34.088376-34.085306 25.780153 0 42.662659 17.10354 42.662659 34.085306C652.652414 521.869788 635.769908 538.752294 609.989755 538.752294zM797.460474 538.752294c-16.85283 0-33.853016-16.882506-33.853016-34.103726 0-16.98279 17.000186-34.085306 33.853016-34.085306 25.543769 0 42.659589 17.10354 42.659589 34.085306C840.120063 521.869788 823.004243 538.752294 797.460474 538.752294z" fill="#64748b" p-id="1475"></path></svg>
              <span className='text-[12px] text-[#64748b]'>JexLau</span>
            </div>
            <Link
              href="https://twitter.com/jexlau"
              className="group"
              aria-label="TaxPal on Twitter"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
            </Link>
            <Link
              href="https://github.com/jexlau/seocasestudy"
              className="group"
              aria-label="TaxPal on GitHub"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            {t("Rights")}
          </p>
        </div>
      </Container>
    </footer>
  )
}
