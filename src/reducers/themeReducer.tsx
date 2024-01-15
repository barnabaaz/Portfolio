import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface Colors {
  hueColor: string;
}

const initialState = {
  hueColor: "250",
} as Colors;
export const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    darkMode: (state) => {
      state.hueColor = "40";
    },
    nightMode: (state) => {
      state.hueColor = "120";
    },
  },
});

export const { darkMode, nightMode } = ThemeSlice.actions;

export default ThemeSlice.reducer;
