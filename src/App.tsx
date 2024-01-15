import React from "react";
import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store";
import { darkMode } from "./reducers/themeReducer";
import Theme from "./theme";
import { GlobalStyle } from "./genStyles";
import Layouts from "./components/Layouts";

interface Color {
  backgroundColor?: string;
}

function App() {
  const color = useSelector((state: RootState) => state.themeReducer);
  const dispatch = useAppDispatch();
  const changeBackgroundColor = () => {
    dispatch(darkMode());
  };
  const theme = Theme(color.hueColor);
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layouts />} />
        <Route
          path="log"
          element={
            <div>
              <h1>Hello</h1>
            </div>
          }
        ></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
