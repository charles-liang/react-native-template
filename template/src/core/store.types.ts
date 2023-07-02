/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { Action, ThunkAction } from "@reduxjs/toolkit";

import { store } from "./store";

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type RootState = ReturnType<typeof store.getState>;
