/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import React, { PropsWithChildren } from "react";

import { ThemeColorScheme } from "@common";
import { persistedStore, store } from "@core/store";
import { theme } from "@core/ui";
import { ThemeProvider } from "@rneui/themed";
import {
  initialWindowMetrics,
  SafeAreaProvider
} from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

type Props = PropsWithChildren & {};

/**
 * Providers
 */
function Providers({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeColorScheme>
        <Provider store={store}>
          <PersistGate persistor={persistedStore}>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              {children}
            </SafeAreaProvider>
          </PersistGate>
        </Provider>
      </ThemeColorScheme>
    </ThemeProvider>
  );
}

export default Providers;
