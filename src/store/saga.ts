import { all } from "redux-saga/effects";
import { authWatcher } from "./auth";
import { changeUnitWatcher } from "./changeUnit";
import { profileWatcher } from "./profile";
import { unitWatcher } from "./unit";

function* rootSaga() {
  yield all([authWatcher(), unitWatcher(), profileWatcher(), changeUnitWatcher()]);
}

export default rootSaga;
