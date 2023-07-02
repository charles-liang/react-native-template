/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { defaultNS, resources } from ".";

import resources from './resources';

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources.en;
  }
}
