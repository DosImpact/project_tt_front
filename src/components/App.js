import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Theme from "../Styles/Theme";
import Routes from "./Routes";
// import Footer from "./Footer";
import Header from "./Header";

import Footer from "./Footer/index";

import { useSelector } from "react-redux";

export default () => {
  const user = useSelector((state) => state.user);
  const isLoggedIn = user.isLoggedIn;

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <HashRouter>
          <>
            <Header />
            <Routes isLoggedIn={isLoggedIn} />
            <Footer />
          </>
        </HashRouter>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </>
    </ThemeProvider>
  );
};