/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { StyleSheet } from "react-native";

import { scale } from "react-native-size-matters";

export { default as Colors } from "./colors";
export { default as Typography } from "./typography";
export * from "./theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: { flexGrow: 1 },
  loadingContainer: { flex: 1, flexGrow: 1, justifyContent: "center" },
  content: { paddingHorizontal: scale(12), paddingVertical: scale(12) },
  contentHorizontal: {
    paddingHorizontal: scale(12)
  },
  contentVertical: {
    paddingVertical: scale(12)
  }
});
