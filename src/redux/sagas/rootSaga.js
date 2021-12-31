import { takeEvery, put, call } from "redux-saga/effects";
import animeApi from "../../utils/AnimeApi";
import { hideLoader, showLoader } from "../actions";
import { REQUEST_ANIME, SET_ANIME } from "../types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_ANIME, sagaWorker);
}

function* sagaWorker() {
  const payload = yield call(getAnimeCards);
  yield put({
    type: SET_ANIME,
    payload,
  });
}

const getAnimeCards = () => {
  showLoader();
  return animeApi
    .getTenQuotes()
    .catch((err) => console.log(err))
    .finally(hideLoader());
};
