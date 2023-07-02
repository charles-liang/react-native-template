/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { LanguageDetectorModule } from "i18next";
import { findBestLanguageTag } from "react-native-localize";

const languageDetector: LanguageDetectorModule = {
  type: "languageDetector",
  init: () => {},
  detect: () => {
    const bestAvailableLanguage = findBestLanguageTag(["en", "en-US"]);

    return bestAvailableLanguage?.languageTag;
  },
  cacheUserLanguage: () => {}
};

export default languageDetector;
