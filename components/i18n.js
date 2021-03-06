import I18n from "i18n-js";
//import * as RNLocalize from "react-native-localize";

import en from "../locales/en";
import es from "../locales/es";

//const locales = RNLocalize.getLocales();
var locales = ['en', 'es'];

if (Array.isArray(locales)) {
  I18n.locale = locales[0];
}

I18n.fallbacks = true;
I18n.translations = {
  es,
  en
};

export default I18n;