import { RootState } from "../types";
import { getProfileAction, sendGroupAction } from "./action";
import { takeLatest, select, put } from "@redux-saga/core/effects";
import {
  getProfileResponse,
  sendGroupResponse,
  sendTokenRequest,
} from "./types";
import { TInitialState } from "./../auth/types";
import axios, { AxiosError } from "axios";
import { default_api } from "../../constants";

function* getProfileWorker({
  payload: {},
}: ReturnType<typeof getProfileAction["request"]>) {
  const url = `${default_api.api}/profile/my`;
  console.log(url);
  const token: TInitialState["accesToken"] = yield select(
    (state: RootState) => state.auth.accesToken
  );
  try {
    const response: { data: getProfileResponse } = yield axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Reg: ", response);
    yield put(getProfileAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }
}

function* sendProfileWorker({
  payload: { group },
}: ReturnType<typeof sendGroupAction["request"]>) {
  const url = `${default_api.api} /profile/group`;
  console.log(url);
  const token: TInitialState["accesToken"] = yield select(
    (state: RootState) => state.auth.accesToken
  );
  try {
    const response: { data: sendGroupResponse } = yield axios.post(
      url,
      { group },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Reg: ", response);
    yield put(sendGroupAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }
}

export function* profileWatcher() {
  yield takeLatest(getProfileAction.request, getProfileWorker);
  yield takeLatest(sendGroupAction.request, sendProfileWorker);
}
