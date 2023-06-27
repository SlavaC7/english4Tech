import { createActionTypes, createApiActions } from "../rootActions";

import { AxiosError } from "axios";

import {
  getProfileResponse,
  sendGroupResponse,
  sendTokenRequest,
} from "./types";

import { Empty } from "../types";
import { createAction } from "@reduxjs/toolkit";

export const getProfileAction = createApiActions<
  Empty,
  getProfileResponse,
  Empty
>(createActionTypes("PROFILE/GET"));

export const sendGroupAction = createApiActions<
  sendGroupResponse,
  Empty,
  Empty
>(createActionTypes("PROFILE/GROUP"));

export const LogOutAction = createAction<
  void,
  'LOGOUT/PROFILE'
>('LOGOUT/PROFILE');


export const logOutAction = createApiActions(createActionTypes("AUTH/LOGOUT"));
