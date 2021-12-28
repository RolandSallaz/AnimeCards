import { combineReducers } from "redux";
import { animeReducer } from "./animeReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  cards: animeReducer,
  app: appReducer,
});
