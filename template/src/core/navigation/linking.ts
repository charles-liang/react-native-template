/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { LinkingOptions } from "@react-navigation/native";

import { RootStackParamList } from "./root-stack-routes";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ["projectname://"]
};

export default linking;
