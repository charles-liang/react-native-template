/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { combineReducers } from "@reduxjs/toolkit";

import api from "./api";

export default combineReducers({
  [api.reducerPath]: api.reducer
});
