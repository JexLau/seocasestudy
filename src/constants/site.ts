export const baseurl = 'https://seocasestudy.com';

export const getHrefLang = (locale: string) => locale === 'en' ? baseurl : `${baseurl}/${locale}`;
