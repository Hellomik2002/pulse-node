const path = require("path");

/** @type {import("next-i18next").UserConfig} */
const config = {
  i18n: {
    defaultLocale: "kg",
    locales: [
      "en",
      "fr",
      "it",
      "ru",
      "es",
      "kg",
      "de",
      "pt",
      "ro",
      "nl",
      "pt-BR",
      "es-419",
      "ko",
      "ja",
      "pl",
      "ar",
      "iw",
      "zh-CN",
      "zh-TW",
      "cs",
      "sr",
      "sv",
      "vi",
      "no",
    ],
  },
  reloadOnPrerender: process.env.NODE_ENV !== "production",
};

module.exports = config;
