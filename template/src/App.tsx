/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import React from "react";
import { StatusBar } from "react-native";

import { useLifecycleLogger } from "@core/hooks";
import logger from "@core/logger";
import ErrorBoundary from "react-native-error-boundary";

import Navigation from "./Navigation";
import Providers from "./Providers";

function errorHandler(error: Error, stackTrace: string) {
  logger.extend("SYSTEM").error(error, stackTrace);
}

/**
 * App
 */
function App(): JSX.Element {
  useLifecycleLogger(App.name);

  return (
    <Providers>
      <ErrorBoundary onError={errorHandler}>
        <StatusBar />
        <Navigation />
      </ErrorBoundary>
    </Providers>
  );
}

export default App;
