import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import en from '../src/i18n/en.json';
import { handleError, } from '../src/utils';

i18next.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        supportedLngs     : [
            'en',
        ],
        lng               : 'en',
        fallbackLng       : 'en',
        nsSeparator       : false,
        keySeparator      : false,
        compatibilityJSON : 'v4',
        interpolation     : {
            escapeValue : false,
        },
        resources         : {
            en : {
                translation : en,
            },
        },
    })
    .catch(handleError);

export default i18next;
