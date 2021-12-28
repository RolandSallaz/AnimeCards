import { FETCH_ANIME, HIDE_LOADING, SHOW_LOADING } from "./types";
import animeApi from "../utils/AnimeApi";

export function fetchAnime() {
  return async (dispatch) => {
    dispatch(showLoader());
    animeApi
      .getTenQuotes()
      .then((res) =>
        dispatch({
          type: FETCH_ANIME,
          payload: res,
        })
      )
      .catch((err) => console.log(err))
      .finally(()=>dispatch(hideLoader()));
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADING,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADING,
  };
}
