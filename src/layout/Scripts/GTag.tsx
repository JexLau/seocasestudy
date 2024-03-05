import Script from "next/script"

export const GTag = () => {
  if (process.env.NODE_ENV !== "production") {
    return null
  }
  return <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4ZBV6P6FTW"></Script>
    <Script id="gtag" async dangerouslySetInnerHTML={{
      __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-4ZBV6P6FTW');`}} />
  </>
}