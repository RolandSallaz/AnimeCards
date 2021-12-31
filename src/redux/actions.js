import { REQUEST_ANIME, HIDE_LOADING, SHOW_LOADING } from "./types";

export function fetchAnime() {
  return {
    type: REQUEST_ANIME,
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
