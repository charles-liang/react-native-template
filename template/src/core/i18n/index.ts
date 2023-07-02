/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import "./polyfill";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "../assets/locales";
import env from "../env.mjs";
import languageDetector from "./language-detector";

export const defaultNS = "app";

export const resources = {
  en
} as const;

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: env.ENV === "development",
    fallbackLng: "en",
    supportedLngs: ["en", "en-US"],
    resources
  });

export default i18n;
