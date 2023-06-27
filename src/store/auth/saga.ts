import { RootState } from "../types";
import { sendAuthAction, sendCodeAction, sendRegAction } from "./action";
import { takeLatest, select, put } from "@redux-saga/core/effects";
import {
  getCodeResponse,
  sendAuthRequest,
  takeTokenAuthResponse,
  takeTokenRegResponse,
  TInitialState,
} from "./types";
import axios, { AxiosError } from "axios";
import { default_api } from "../../constants";

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
// function* registerWorker({
//   payload:{}
// }: ReturnType<typeof getUnitListAction['request']>){
//   const url = `${default_api.api}/unit/list`;
//   console.log(url);
//   try{
//     const response: {data:unitListPayload} = yield axios.get(url, {});
//     console.log('Reg: ', response);
//     yield put(getUnitListAction.success(response.data));
//   }
//   catch (e:any) {
//     console.log({...e});
//   }
// }

function* authWorker({
  payload: { email, password },
}: ReturnType<typeof sendAuthAction["request"]>) {
  const url = `${default_api.api}/auth/login`;
  console.log(url);
  try {
    const response: { data: takeTokenAuthResponse } = yield axios.post(url, {
      email,
      password,
    });
    console.log("Reg: ", response);
    yield put(sendAuthAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }
}

function* regWorker({
  payload: { email, password, userName, gender },
}: ReturnType<typeof sendRegAction["request"]>) {
  const url = `${default_api.api}/auth/register`;
  console.log(url);
  try {
    const response: { data: takeTokenRegResponse } = yield axios.post(url, {
      email,
      password,
      userName,
      gender,
    });
    console.log("Reg: ", response);
    yield put(sendRegAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }
}

function* sendCodeWorker({
  payload: { code },
}: ReturnType<typeof sendCodeAction["request"]>) {
  const url = `${default_api.api}/verification/verifyEmail`;
  console.log(url);
  const token: TInitialState["accesToken"] = yield select(
    (state: RootState) => state.auth.accesToken
  );
  try {
    const response: { data: getCodeResponse } = yield axios.post(
      url,
      {
        code,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("Reg: ", response);
    yield put(sendCodeAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }
}

export function* authWatcher() {
  //yield takeLatest(signinAction.request, signinWorker);
  //yield takeLatest(getUnitListAction.request, registerWorker);
  yield takeLatest(sendCodeAction.request, sendCodeWorker);
  yield takeLatest(sendAuthAction.request, authWorker);
  yield takeLatest(sendRegAction.request, regWorker);
}
