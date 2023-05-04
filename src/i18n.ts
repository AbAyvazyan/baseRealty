import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ArmenianTranslations from "./Components/Translations/hy.json";
import EnglishTranslations from "./Components/Translations/en.json";
import RussianTranslations from "./Components/Translations/ru.json";

const resources = {
    en: {
        translation: EnglishTranslations,
    },
    hy: {
        translation: ArmenianTranslations,
    },
    ru: {
        translation: RussianTranslations
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;