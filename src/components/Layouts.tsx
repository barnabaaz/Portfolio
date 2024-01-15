import React from "react";

import styled from "styled-components";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Qualification from "./Qualifications";
import Services from "./Services";
import Portfolio from "./Portfolio";

const Layouts = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
    </>
  );
};

export default Layouts;
