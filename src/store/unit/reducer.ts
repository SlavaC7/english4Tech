import {
  changeInfoAction,
  changeListAction,
  clearDeleteUnitAction,
  deleteUnitAction,
  getChangeUnitAction,
  getUnitAction,
  getUnitListAction,
  logOutAction,
  registerAction,
  startLoaderAction,
  verifyDoneAction,
} from "./action";
import { createReducer } from "@reduxjs/toolkit";
import { TInitialState } from "./types";

const InitialState: TInitialState = {
  unitList: [],
  unit: {
    title:"",
    vocabulary:{
        text:"",
        links:[],
        file:"",
    },
    grammar:{
        text:[],
        image:""
    },
    pronunciation:{
        video:"",
        audio:"",
        text:"",
    },
    speaking:{
        image:"",
        text:"",
    },
    revision:[]
  },
  changeUnit: null,
  changeList: [],
  changeUnitInfo: null,
  deleteUnitResult: null,
  loader:false,
};

export const unitReducer = createReducer<TInitialState>(
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

    builder.addCase(getUnitListAction.success, (state, { payload }) => ({
      ...state,
      unitList: payload,
    }));

    builder.addCase(getUnitAction.success, (state, { payload }) => ({
      ...state,
      unit: payload,
    }));

    builder.addCase(registerAction.success, (state, { payload }) => ({
      ...state,
      token: payload.access_token,
      id: payload.id,
      verification: payload.verification,
    }));

    builder.addCase(logOutAction.request, (state, { payload }) => ({
      ...state,
      token: null,
      id: null,
    }));

    builder.addCase(verifyDoneAction.request, (state, { payload }) => ({
      ...state,
      verification: null,
    }));

    builder.addCase(changeListAction.success, (state, { payload }) => ({
      ...state,
      changeList: payload,
    }));
    builder.addCase(changeInfoAction.success, (state, { payload }) => ({
      ...state,
      changeUnitInfo: payload,
    }));
    builder.addCase(getChangeUnitAction.success, (state, { payload }) => ({
      ...state,
      changeUnit: payload,
    }));
    builder.addCase(deleteUnitAction.success, (state, { payload }) => ({
      ...state,
      deleteUnitResult: payload,
    }));
    builder.addCase(clearDeleteUnitAction.success, (state, { payload }) => ({
      ...state,
      deleteUnitResult: null,
    }));
  }
);
