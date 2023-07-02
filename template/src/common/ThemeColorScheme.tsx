/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import React, { PropsWithChildren, useEffect } from "react";
import { useColorScheme } from "react-native";

import { ThemeMode, useThemeMode } from "@rneui/themed";

type Props = PropsWithChildren & {};

/**
 * Function component wrapper for theme color scheme (light or dark mode).
 */
function ThemeColorScheme({ children }: Props) {
  const colorScheme = useColorScheme();

  const { setMode } = useThemeMode();

  useEffect(() => {
    setMode(colorScheme as ThemeMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorScheme]);

  return <>{children}</>;
}

export default ThemeColorScheme;
