import { sendAuthAction, sendCodeAction, sendRegAction } from "./action";
import { createReducer } from "@reduxjs/toolkit";
import { TInitialState } from "./types";
import { emit } from "process";

const InitialState: TInitialState = {
  accesToken: null,
  isAdmin: null,
  email: null,
  password: null,
  verification: null,
  result: null,
};

export const authReducer = createReducer<TInitialState>(
  InitialState,
  (builder) => {
    builder.addCase(sendAuthAction.request, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(sendAuthAction.success, (state, { payload }) => ({
      ...state,
      accesToken: payload.access_token,
      isAdmin: payload.isAdmin,
      email: payload.email,
      password: payload.password,
    }));
    builder.addCase(sendRegAction.success, (state, { payload }) => ({
      ...state,
      accesToken: payload.access_token,
      isAdmin: payload.isAdmin,
      verification: payload.verification,
    }));
    builder.addCase(sendCodeAction.success, (state, { payload }) => ({
      ...state,
      result: payload.result,
    }));
  }
);
