import { createActionTypes, createApiActions } from "../rootActions";

import { AxiosError } from "axios";

import {
  getCodeResponse,
  sendAuthRequest,
  sendCodeRequest,
  sendRegRequest,
  takeTokenAuthResponse,
  takeTokenRegResponse,
} from "./types";

import { Empty } from "../types";

export const sendAuthAction = createApiActions<
  sendAuthRequest,
  takeTokenAuthResponse,
  Empty
>(createActionTypes("AUTH/SEND"));

export const sendRegAction = createApiActions<
  sendRegRequest,
  takeTokenRegResponse,
  Empty
>(createActionTypes("REG/SEND"));

export const sendCodeAction = createApiActions<
  sendCodeRequest,
  getCodeResponse,
  Empty
>(createActionTypes("CODE/SEND"));

export const logOutAction = createApiActions(createActionTypes("AUTH/LOGOUT"));
