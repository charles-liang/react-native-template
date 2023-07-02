/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { StyleProp, TextStyle } from "react-native";

import { createTheme, TextProps } from "@rneui/themed";
import { moderateScale } from "react-native-size-matters";

import Colors from "./colors";
import Typography, { fontSizes } from "./typography";

const getExtendedTextStyles = (props: Partial<TextProps>) => {
  const extendedStyles: Array<StyleProp<TextStyle>> = [
    { ...Typography.regular },
    props.bold && { ...Typography.bold },
    props.italic && { ...Typography.italic },
    props.bold && props.italic && { ...Typography.boldItalic },
    props.medium && { ...Typography.medium },
    props.medium && props.italic && { ...Typography.mediumItalic },
    props.strikethrough && {
      textDecorationLine: "line-through",
      textDecorationStyle: "solid"
    },
    props.underlined && {
      textDecorationLine: "underline",
      textDecorationStyle: "solid"
    },
    props.center && {
      textAlign: "center"
    },
    props.color && {
      color: Colors[props.color] || props.color
    },
    props.p1 && {
      ...fontSizes.p1,
      lineHeight: moderateScale(1.5)
    },
    props.p2 && {
      ...fontSizes.p2,
      lineHeight: moderateScale(1.5)
    }
  ];

  return extendedStyles;
};

const getTextStyles = (props: Partial<TextProps>) => {
  const extendedStyles = getExtendedTextStyles(props);

  return {
    h1Style: [
      {
        ...fontSizes.h1
      },
      extendedStyles
    ],
    h2Style: [
      {
        ...fontSizes.h2
      },
      extendedStyles
    ],
    h3Style: [
      {
        ...fontSizes.h3
      },
      extendedStyles
    ],
    h4Style: [
      {
        ...fontSizes.h4
      },
      extendedStyles
    ],
    style: [
      {
        ...fontSizes.p1
      },
      extendedStyles
    ]
  };
};

export const theme = createTheme({
  lightColors: {
    primary: Colors.primary,
    secondary: Colors.secondary,
    tertiary: Colors.tertiary,
    success: Colors.success,
    error: Colors.danger,
    warning: Colors.warning,
    disabled: Colors.secondary,
    searchBg: Colors.light
  },
  darkColors: {
    primary: Colors.primary,
    secondary: Colors.secondary,
    tertiary: Colors.tertiary,
    success: Colors.success,
    error: Colors.danger,
    warning: Colors.warning,
    disabled: Colors.secondary,
    searchBg: Colors.dark
  },
  components: {
    Button: () => ({
      titleStyle: { ...Typography.bold, ...fontSizes.button }
    }),

    Icon: props => ({
      type: props.type || props.font
    }),

    Input: (props, currentTheme) => ({
      containerStyle: { paddingHorizontal: 0 },
      inputContainerStyle: {
        borderColor: currentTheme.colors.black
      },
      labelStyle: {
        ...Typography.regular,
        ...fontSizes.inputLabel
      },
      inputStyle: {
        ...Typography.regular,
        padding: 0,
        ...fontSizes.input
      },
      placeholderTextColor: Colors.muted,
      errorStyle: {
        ...Typography.regular,
        ...fontSizes.inputError
      },
      cursorColor: Colors.primary,
      leftIconContainerStyle: {
        marginRight: moderateScale(6),
        marginVertical: 0
      },
      rightIconContainerStyle: {
        marginLeft: moderateScale(6),
        marginVertical: 0
      }
    }),

    Text: props => getTextStyles(props),

    ListItemTitle: props => getTextStyles(props)
  }
});
