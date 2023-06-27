import { RootState } from "../types";
import {
  getChangeUnitAction,
  sendChangeUnitAction,
  startLoaderAction,
} from "./action";
import { takeLatest, select, put } from "@redux-saga/core/effects";
import {
  getSendIdUnitResponse,
  unitPayload,
  unitSend,
} from "./types";
import axios, { AxiosError } from "axios";
import { default_api } from "../../constants";

import { TInitialState } from "../auth/types";

function* takeUnitWorker({
  payload: { id },
}: ReturnType<typeof getChangeUnitAction["request"]>) {
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
    yield put(getChangeUnitAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }finally{
    put(startLoaderAction.success({}));
  }
}

function* sendUnitWorker({
  payload: {
    id,
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
}: ReturnType<typeof sendChangeUnitAction["request"]>) {
  const url = `${default_api.api}/unit/change`;
  console.log(url);
  const token: TInitialState["accesToken"] = yield select(
    (state: RootState) => state.auth.accesToken
  );
  try {
    put(startLoaderAction.request({}));
    const response: { data: unitSend } = yield axios.post(url,{
      id,
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
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Reg: ", response);
    yield put(sendChangeUnitAction.success(response.data));
  } catch (e: any) {
    console.log({ ...e });
  }finally{
    put(startLoaderAction.success({}));
  }
}

export function* changeUnitWatcher() {
  //yield takeLatest(signinAction.request, signinWorker);
  yield takeLatest(getChangeUnitAction.request, takeUnitWorker);
  yield takeLatest(sendChangeUnitAction.request, sendUnitWorker);
}
