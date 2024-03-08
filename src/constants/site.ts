export const baseurl = 'https://seocasestudy.dev';

export const getHrefLang = (locale: string) => locale === 'en' ? baseurl : `${baseurl}/${locale}`;
