/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import env from "@core/env.mjs";
import { createApi } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";

import axiosBaseQuery from "./axios-base-query";

const REDUCER_NAME = "api";

const DATA_CACHE_TIMEOUT_IN_SECONDS = 60;

export default createApi({
  baseQuery: axiosBaseQuery(env.API_URL),
  reducerPath: REDUCER_NAME,
  keepUnusedDataFor: DATA_CACHE_TIMEOUT_IN_SECONDS,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      if (action.payload) {
        return action.payload[reducerPath];
      }

      return action.payload;
    }
  },
  endpoints: () => ({})
});
