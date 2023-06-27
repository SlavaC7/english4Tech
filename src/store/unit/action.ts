import { createActionTypes, createApiActions } from "../rootActions";

import { AxiosError } from "axios";

import {
  SigninActionResponse,
  unitListPayload,
  RegisterType,
  RegisterActionResponse,
  getSendIdUnitResponse,
  unitPayload,
  addUnit,
  changeUnitList,
  oneChangeUnitList,
  сhangeUnitInfo,
  changeUnit,
  deleteUnitResponse,
} from "./types";
import { Empty } from "../types";

export const getUnitListAction = createApiActions<
  Empty,
  unitListPayload,
  Empty
>(createActionTypes("UNIT/LIST"));

export const startLoaderAction = createApiActions(createActionTypes("START/LOAD"));

export const stopLoaderAction = createApiActions(createActionTypes("STOP/LOAD"));

export const getUnitAction = createApiActions<
  getSendIdUnitResponse,
  unitPayload,
  Empty
>(createActionTypes("UNIT/ONCE"));

export const registerAction = createApiActions<
  RegisterType,
  RegisterActionResponse,
  Empty
>(createActionTypes("AUTH/REGISTER"));

export const verifyDoneAction = createApiActions<Empty, Empty, Empty>(
  createActionTypes("AUTH/DONE")
);

export const addUnitAction = createApiActions<addUnit, Empty, Empty>(
  createActionTypes("UNIT/ADD")
);

export const changeListAction = createApiActions<Empty, changeUnitList, Empty>(
  createActionTypes("AUTH/CHANGELIST")
);

export const changeInfoAction = createApiActions<Empty, сhangeUnitInfo, Empty>(
  createActionTypes("AUTH/CHANGEINFO")
);

export const getChangeUnitAction = createApiActions<
  getSendIdUnitResponse,
  changeUnit,
  Empty
>(createActionTypes("AUTH/GETCHANGEUNIT"));

export const deleteUnitAction = createApiActions<
  getSendIdUnitResponse,
  deleteUnitResponse,
  Empty
>(createActionTypes("AUTH/DELETEUNIT"));

export const clearDeleteUnitAction = createApiActions<Empty, Empty, Empty>(
  createActionTypes("AUTH/CLEARDELETERES")
);

export const logOutAction = createApiActions(createActionTypes("AUTH/LOGOUT"));
