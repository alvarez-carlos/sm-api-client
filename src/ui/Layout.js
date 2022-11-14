import React, { Fragment } from "react";

import Header from "../navigation/Header";
import Footer from "../navigation/Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
