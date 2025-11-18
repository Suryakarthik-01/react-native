import i18n from 'i18n-js';
import * as Localization from 'react-native-localize';

import en from './en.json';
import hi from './hi.json';

// Add translations
i18n.translations = { en, hi };

// Enable fallback
i18n.fallbacks = true;

// Detect language
const deviceLang = Localization.getLocales()[0]?.languageCode;

// Set current language
i18n.locale = deviceLang === 'hi' ? 'hi' : 'en';

export default i18n;
