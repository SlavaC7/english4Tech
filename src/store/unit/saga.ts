import { RootState } from "../types";
import {
  registerAction,
  getUnitListAction,
  getUnitAction,
  addUnitAction,
  changeListAction,
  changeInfoAction,
  getChangeUnitAction,
  deleteUnitAction,
  startLoaderAction,
} from "./action";
import { takeLatest, select, put } from "@redux-saga/core/effects";
import {
  addUnit,
  changeUnit,
  changeUnitList,
  deleteUnitResponse,
  getSendIdUnitResponse,
  RegisterActionResponse,
  RegisterType,
  SigninActionResponse,
  unitListPayload,
  unitPayload,
  сhangeUnitInfo,
} from "./types";
import axios, { AxiosError } from "axios";
import { default_api } from "../../constants";

import { TInitialState } from "./../auth/types";

// function* signinWorker({
//   payload: {},
// }: ReturnType<typeof signinAction['request']>) {
//   const url = `${default_api.api}/unit/list`;
//   console.log(url);
//   try {
//     const response: SigninActionResponse = yield axios.get(url, {});
//     console.log(
//       'Sign in: ',
//       //@ts-ignore
//       response,
//     );

//     yield put(
//       signinAction.success(
//         //@ts-ignore
//         response.data,
//       ),
//     );
//   } catch (e:any) {
//     console.log({...e});
//   }
// }
function* registerWorker({
  payload: {},
}: ReturnType<typeof getUnitListAction["request"]>) {
  const url = `${default_api.api}/unit/list`;
  console.log(url);
  const token: TInitialState["accesToken"] = yield select(
    (state: RootState) => state.auth.accesToken
  );
  try {
    put(startLoaderAction.request({}));
    const response: { data: unitListPayload } = yield axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Reg: ", response);
    yield put(getUnitListAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }finally{
    put(startLoaderAction.success({}));
  }
}

function* takeUnitWorker({
  payload: { id },
}: ReturnType<typeof getUnitAction["request"]>) {
  const url = `${default_api.api}/unit/get/${id}`;
  console.log(url);
  const token: TInitialState["accesToken"] = yield select(
    (state: RootState) => state.auth.accesToken
  );
  try {
    put(startLoaderAction.request({}));
    const response: { data: unitPayload } = yield axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Reg: ", response);
    yield put(getUnitAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }finally{
    put(startLoaderAction.success({}));
  }
}

function* addUnitWorker({
  payload: {
    title,
    vocabularyText,
    vocabularyLinks,
    vocabularyFile,
    grammarText,
    grammarImage,
    pronunciationText,
    pronunciationVideo,
    pronunciationAudio,
    speakingText,
    speakingImage,
    revisionLinks,
  },
}: ReturnType<typeof addUnitAction["request"]>) {
  const url = `${default_api.api}/unit/add`;
  console.log(url);
  const token: TInitialState["accesToken"] = yield select(
    (state: RootState) => state.auth.accesToken
  );
  try {
    yield put(startLoaderAction.request({}));
    const response: { data: addUnit } = yield axios.post(
      url,
      {
        title,
        vocabularyText,
        vocabularyLinks,
        vocabularyFile,
        grammarText,
        grammarImage,
        pronunciationText,
        pronunciationVideo,
        pronunciationAudio,
        speakingText,
        speakingImage,
        revisionLinks,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Reg: ", response);
    yield put(addUnitAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }finally{
    yield put(startLoaderAction.success({}));
  }
}

function* takeChangeListWorker({
  payload: {},
}: ReturnType<typeof changeListAction["request"]>) {
  const url = `${default_api.api}/unit/change/list`;
  console.log(url);
  const token: TInitialState["accesToken"] = yield select(
    (state: RootState) => state.auth.accesToken
  );
  try {
    const response: { data: changeUnitList } = yield axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Reg: ", response);
    yield put(changeListAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }
}

function* takeChangeInfoWorker({
  payload: {},
}: ReturnType<typeof changeInfoAction["request"]>) {
  const url = `${default_api.api}/unit/change/info`;
  console.log(url);
  const token: TInitialState["accesToken"] = yield select(
    (state: RootState) => state.auth.accesToken
  );
  try {
    const response: { data: сhangeUnitInfo } = yield axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Reg: ", response);
    yield put(changeInfoAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }
}

function* takeChangeUnitWorker({
  payload: { id },
}: ReturnType<typeof getChangeUnitAction["request"]>) {
  const url = `${default_api.api}/unit/change`;
  console.log(url);
  const token: TInitialState["accesToken"] = yield select(
    (state: RootState) => state.auth.accesToken
  );
  try {
    const response: { data: changeUnit } = yield axios.post(url, { id },{
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Reg: ", response);
    yield put(getChangeUnitAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }
}

function* deleteUnitWorker({
  payload: { id },
}: ReturnType<typeof deleteUnitAction["request"]>) {
  const url = `${default_api.api}/unit/${id}`;
  console.log(url);
  const token: TInitialState["accesToken"] = yield select(
    (state: RootState) => state.auth.accesToken
  );
  try {
    const response: { data: deleteUnitResponse } = yield axios.delete(url,{
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Reg: ", response);
    yield put(deleteUnitAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }
}

export function* unitWatcher() {
  //yield takeLatest(signinAction.request, signinWorker);
  yield takeLatest(getUnitListAction.request, registerWorker);
  yield takeLatest(getUnitAction.request, takeUnitWorker);
  yield takeLatest(addUnitAction.request, addUnitWorker);
  yield takeLatest(changeListAction.request, takeChangeListWorker);
  yield takeLatest(changeInfoAction.request, takeChangeInfoWorker);
  yield takeLatest(getChangeUnitAction.request, takeChangeUnitWorker);
  yield takeLatest(deleteUnitAction.request, deleteUnitWorker);
}
