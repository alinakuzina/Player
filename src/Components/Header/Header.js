import React from "react";
import classes from "./Header.module.css";
import Search from "../Search/Search";
import logo from "./logo.png";

const Header = function (props) {
  return (
    <div className={classes.container}>
      <img src={logo} className={classes.logo} />
      <Search />
    </div>
  );
};
export default Header;
