/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { RootStackParamList } from "./root-stack-routes";

declare global {
  /**
   * react-navigation custom declarations
   */
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
