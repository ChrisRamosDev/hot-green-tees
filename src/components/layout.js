/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import logo from "../assets/logo.png";

const Layout = ({ children }) => (
  <Fragment>
    <header sx={{ mx: "auto", mt: "10vw", maxWidth: "90vw" }}>
      <img src={logo} alt='Green Tees Logo' />
    </header>
    <main>{children}</main>
    <footer>© 2020 Chris Ramos dev</footer>
  </Fragment>
);

export default Layout;
