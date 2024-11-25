import i18next, { type Resource, } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, } from 'react-i18next';

import { handleError, } from '../utils';

export const apply = ({
    language,
    supportedLanguages,
    fallbackLanguage,
    resources,
} : {
    language           : string,
    supportedLanguages : string[],
    fallbackLanguage   : string,
    resources          : Resource,
}) => i18next.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        supportedLngs     : supportedLanguages,
        lng               : language,
        fallbackLng       : fallbackLanguage,
        nsSeparator       : false,
        keySeparator      : false,
        compatibilityJSON : 'v4',
        interpolation     : {
            escapeValue : false,
        },
        resources,
    })
    .catch(handleError);
