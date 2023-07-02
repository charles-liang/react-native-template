/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Linking, Platform } from "react-native";

import constants from "@core/constants";
import env from "@core/env.mjs";
import { useLifecycleLogger } from "@core/hooks";
import baseLogger from "@core/logger";
import {
  linking,
  RootStackNavigator,
  RootStackParamList
} from "@core/navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  InitialState,
  NavigationContainer,
  NavigationState,
  useNavigationContainerRef
} from "@react-navigation/native";
import { useTheme } from "@rneui/themed";

const LOGGER_NAME = "NAVIGATION";

type Props = {
  initialRouteName?: keyof RootStackParamList;
};

function Navigation({ initialRouteName }: Props) {
  useLifecycleLogger(Navigation.name);

  const logger = baseLogger.extend(LOGGER_NAME);

  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string | undefined>();

  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = React.useState<
    InitialState | undefined
  >(undefined);

  const { theme } = useTheme();

  const restoreState = useCallback(async () => {
    try {
      logger.debug("Restoring navigation state.");

      const initialUrl = await Linking.getInitialURL();

      if (
        initialUrl === null &&
        initialRouteName === undefined &&
        Platform.OS !== "web"
      ) {
        const savedState = await AsyncStorage.getItem(constants.NAVIGATION_KEY);
        const state = savedState ? JSON.parse(savedState) : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }

        logger.debug("Restoring navigation state completed.");
      } else {
        logger.debug("Restoring navigation state aborted.");
      }
    } finally {
      setIsReady(true);
    }
  }, [initialRouteName, logger]);

  useEffect(() => {
    if (!isReady) {
      restoreState();
    }
  }, [isReady, restoreState]);

  const logScreenView = (name: string | undefined) => {
    if (env.ANALYTICS) {
      logger.debug(`Current screen: ${name}`);
    }
  };

  const onReady = () => {
    const currentRouteName = navigationRef?.getCurrentRoute()?.name;
    routeNameRef.current = currentRouteName;

    logScreenView(currentRouteName);
    setIsReady(true);
  };

  const onStateChanged = async (state: NavigationState | undefined) => {
    await AsyncStorage.setItem(constants.NAVIGATION_KEY, JSON.stringify(state));

    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef?.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName) {
      routeNameRef.current = currentRouteName;

      logScreenView(currentRouteName);
    }
  };

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      linking={linking}
      initialState={initialState}
      onReady={onReady}
      onStateChange={onStateChanged}
      theme={{
        colors: {
          primary: theme.colors.primary,
          background: theme.colors.background,
          card: theme.colors.white,
          text: theme.colors.black,
          border: theme.colors.greyOutline,
          notification: theme.colors.error
        },
        dark: theme.mode === "dark"
      }}>
      <RootStackNavigator initialRouteName={initialRouteName} />
    </NavigationContainer>
  );
}

export default Navigation;
