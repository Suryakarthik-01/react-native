declare module 'i18n-js' {
  interface Translations {
    [key: string]: Record<string, string>;
  }

  class I18n {
    translations: Translations;
    locale: string;
    defaultLocale: string;
    fallbacks: boolean;
    t(scope: string, options?: any): string;
  }

  const i18n: I18n;

  export default i18n;
}
