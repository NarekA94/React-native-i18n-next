import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        'home': 'Hey Yo Im at home',
        'second': 'Hey Yo Im inside Room',
      },
    },
    es: {
      translation: {
        'home': 'Hey yo estoy en casa',
        'second': 'Hola, yo estoy dentro de la habitación',
      },
    },
    de: {
      translation: {
        'home': 'Hey Yo Ich bin zu Hause',
        'second': 'Hey Yo Ich bin im Zimmer',
      },
    },
  },
});
export default i18n;