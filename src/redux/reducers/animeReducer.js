import { SET_ANIME } from "../types";

const initialState = {
  animes: [],
};

export const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANIME:
      return { ...state, anime: action.payload };
    default:
      return state;
  }
};
