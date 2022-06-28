import React from "react";
import { useRef, useContext } from "react";
import classes from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SongsContext from "../../store/song-context";

const Search = function (props) {
  const ctx = useContext(SongsContext);
  const query = useRef();

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(query.current.value);
    ctx.currentAudio.pause();
    ctx.isPousedHandler();
    ctx.apiSearch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query.current.value}`,
      query.current.value
    );
    query.current.value = "";
  };
  console.log(ctx.ifError);
  return (
    <React.Fragment>
      <form className={classes.container} onSubmit={searchHandler}>
        <input
          ref={query}
          type="text"
          className={classes.input}
          placeholder="Eminem ..."
        ></input>
        <button className={classes.searchButton} onClick={searchHandler}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.icon} />
        </button>
      </form>
    </React.Fragment>
  );
};

export default Search;
