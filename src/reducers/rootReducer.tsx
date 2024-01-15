import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
const rootReducer = combineReducers({
  themeReducer,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
