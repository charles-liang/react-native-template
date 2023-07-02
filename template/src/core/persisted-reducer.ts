/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist";

import Constants from "./constants";
import env from "./env.mjs";
import reducer from "./reducer";

const config = {
  key: `${env.ENV}:${Constants.STORE_KEY}`,
  storage: AsyncStorage,
  debug: env.ENV === "development"
};

export const IgnoredActions = [
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
];

export default persistReducer(config, reducer);
