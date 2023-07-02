/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { StyleSheet } from "react-native";

import { moderateScale } from "react-native-size-matters";

export const fontSizes = StyleSheet.create({
  h1: { fontSize: moderateScale(24), lineHeight: moderateScale(1.2) },
  h2: { fontSize: moderateScale(20), lineHeight: moderateScale(1.2) },
  h3: { fontSize: moderateScale(18), lineHeight: moderateScale(1.2) },
  h4: { fontSize: moderateScale(16), lineHeight: moderateScale(1.2) },
  p1: { fontSize: moderateScale(16) },
  p2: { fontSize: moderateScale(14) },
  button: { fontSize: moderateScale(14) },
  input: { fontSize: moderateScale(14) },
  inputLabel: { fontSize: moderateScale(14) },
  inputError: { fontSize: moderateScale(12) }
});

export default StyleSheet.create({
  bold: {
    fontWeight: "bold"
    /* fontFamily: "FontFamilyName" */
  },
  boldItalic: {
    fontWeight: "bold",
    fontStyle: "italic"
    /* fontFamily: "FontFamilyName" */
  },
  italic: {
    fontStyle: "italic"
    /* fontFamily: "FontFamilyName" */
  },
  medium: {
    fontWeight: "500"
    /* fontFamily: "FontFamilyName" */
  },
  mediumItalic: {
    fontWeight: "500",
    fontStyle: "italic"
    /* fontFamily: "FontFamilyName" */
  },
  regular: {
    fontWeight: "normal"
    /* fontFamily: "FontFamilyName" */
  }
});
