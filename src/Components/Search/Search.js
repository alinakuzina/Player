import React from "react";
import classes from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = function (props) {
  return (
    <div className={classes.container}>
      <input
        type="text"
        className={classes.input}
        placeholder="Eminem ..."
      ></input>
      <button className={classes.searchButton}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.icon} />
      </button>
    </div>
  );
};

export default Search;
