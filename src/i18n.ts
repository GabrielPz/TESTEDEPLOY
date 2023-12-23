import i18n from 'i18next';
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import global_pt from './translations/pt_br/global.json';
import global_it from './translations/it/global.json';



i18n
    .init({
        fallbackLng: 'en',
        lng: 'en',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                global: global_en
            },
            pt: {
                global: global_pt
            },
            es: {
                global: global_es
            },
            it: {
                global: global_it
            },
        }
    });

export default i18n;
