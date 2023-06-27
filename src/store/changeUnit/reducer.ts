import {
  getChangeUnitAction,
  sendChangeUnitAction,
  startLoaderAction,
} from "./action";
import { createReducer } from "@reduxjs/toolkit";
import { TInitialState } from "./types";

const InitialState: TInitialState = {
  unit: null,
  loader:false,
};

export const changeUnitReducer = createReducer<TInitialState>(
  InitialState,
  (builder) => {
    builder.addCase(startLoaderAction.request, (state) => ({
      ...state,
      loader: true,
    }));

    builder.addCase(startLoaderAction.success, (state) => ({
      ...state,
      loader: false,
    }));

    builder.addCase(getChangeUnitAction.success, (state, { payload }) => ({
      ...state,
      unit: payload,
    }));

    builder.addCase(sendChangeUnitAction.success, (state, { payload }) => ({
      ...state,
    }));
  }
);
