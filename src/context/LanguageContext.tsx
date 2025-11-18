import React, { createContext, useState, useEffect, ReactNode } from 'react';
import I18n from 'i18n-js';
import * as Localization from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from '../localization/en.json';
import hi from '../localization/hi.json';

// Setup translations
I18n.translations = { en, hi };
I18n.fallbacks = true;

interface LangContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LangContextProps>({
  language: 'en',
  setLanguage: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: ProviderProps) => {
  const [language, setLanguageState] = useState('en');

  useEffect(() => {
    loadLanguage();
  }, []);

  const loadLanguage = async () => {
    const saved = await AsyncStorage.getItem('APP_LANGUAGE');

    if (saved) {
      setLanguageState(saved);
      I18n.locale = saved;
    } else {
      const deviceLang = Localization.getLocales()[0]?.languageCode;
      const lang = deviceLang === 'hi' ? 'hi' : 'en';

      setLanguageState(lang);
      I18n.locale = lang;
    }
  };

  const setLanguage = async (lang: string) => {
    setLanguageState(lang);
    I18n.locale = lang;
    await AsyncStorage.setItem('APP_LANGUAGE', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
