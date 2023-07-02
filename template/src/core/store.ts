/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { persistStore } from "redux-persist";

import api from "./api";
import env from "./env.mjs";
import persistedReducer, { IgnoredActions } from "./persisted-reducer";

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: IgnoredActions
      }
    }).concat(api.middleware),
  devTools: env.ENV === "development"
});

const persistedStore = persistStore(store);

setupListeners(store.dispatch);

export { store, persistedStore };
