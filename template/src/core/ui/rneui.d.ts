/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import "@rneui/themed";

import { Colors } from ".";

type ColorKeys = keyof typeof Colors;

declare module "@rneui/themed" {
  export interface Colors {
    tertiary: string;
    cardBg: string;
  }

  export interface IconProps {
    font?:
      | "antdesign"
      | "entypo"
      | "evilicon"
      | "feather"
      | "font-awesome"
      | "font-awesome-5"
      | "fontisto"
      | "foundation"
      | "ionicon"
      | "material"
      | "material-community"
      | "octicon"
      | "simple-line-icon"
      | "zocial";
  }

  export interface TextProps {
    bold?: boolean;
    medium?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underlined?: boolean;
    center?: boolean;
    color?: ColorKeys;
    p1?: boolean;
    p2?: boolean;
  }

  export interface ListItemTitleProps {
    bold?: boolean;
    medium?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underlined?: boolean;
    center?: boolean;
    color?: ColorKeys;
  }

  export interface ComponentTheme {
    Text: Partial<TextProps>;
    Icon: Partial<IconProps>;
  }
}
