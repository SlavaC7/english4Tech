import { getProfileAction, LogOutAction } from "./action";
import { createReducer } from "@reduxjs/toolkit";
import { TInitialState } from "./types";
import { emit } from "process";

const InitialState: TInitialState = {
  profile: null,
};

export const profileReducer = createReducer<TInitialState>(
  InitialState,
  (builder) => {
    builder.addCase(getProfileAction.success, (state, { payload }) => ({
      ...state,
      profile: payload,
    }));

    builder.addCase(LogOutAction, (state, { payload }) => ({
      ...state,
      profile: null,
    }));
    
  }
);
