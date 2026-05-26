// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import en from "./AboutPage/en.json";
// import ua from "./AboutPage/ua.json";

// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: en,
//     },
//     ua: {
//       translation: ua,
//     },
//   },

//   lng: "en",
//   fallbackLng: "en",

//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",

    ns: ["home", "about"],
    defaultNS: "home",

    backend: {
      loadPath: "/translation/{{lng}}/{{ns}}.json",
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
