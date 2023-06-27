import { createActionTypes, createApiActions } from "../rootActions";

import { AxiosError } from "axios";

import {
  getSendIdUnitResponse,
  unitPayload,
  unitSend,
} from "./types";
import { Empty } from "../types";

export const startLoaderAction = createApiActions(createActionTypes("START/LOADCHANGE"));

export const stopLoaderAction = createApiActions(createActionTypes("STOP/LOADCHANGE"));

export const getChangeUnitAction = createApiActions<
  getSendIdUnitResponse,
  unitPayload,
  Empty
>(createActionTypes("UNIT/ONCECHANGE"));

export const sendChangeUnitAction = createApiActions<
  unitSend,
  Empty,
  Empty
>(createActionTypes("UNIT/SENDCHANGE"));