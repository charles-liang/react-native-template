/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import About from "src/About";

import { StackRoutesType } from "./types";

export type RootStackParamList = {
  about: undefined;
};

export type RootStackRoutesType = StackRoutesType<RootStackParamList>;

/**
 * Root Stack Routes
 */
const RootStackRoutes: RootStackRoutesType = [
  {
    name: "about",
    component: About
  }
];

export default RootStackRoutes;
