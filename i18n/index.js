let en = require("./translations.en.json");
let ru = require("./translations.ru.json");

const i18n = {
  translations: {
    en: en,
    ru: ru,
  },
  defaultLang: "ru",
  useBrowserDefault: false,
};

module.exports = i18n;
