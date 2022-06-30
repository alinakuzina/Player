import React from "react";
import classes from "./List.module.css";
import ListItem from "./ListItem";
import { useContext, useRef, useState, useEffect } from "react";
import SongsContext from "../../store/song-context";

const List = function (props) {
  const ctx = useContext(SongsContext);
  const { currentListSongs, currnetSongIndex } = ctx;

  const setNewTrack = (e) => {
    ctx.isPousedHandler();
    ctx.changeIndex(Number(e.target.id));
  };

  const songsList = currentListSongs.map((song) => {
    return (
      <ListItem
        setNewTrack={setNewTrack}
        key={song.id}
        artist={song.artist}
        title={song.title}
        img={song.imgSrc}
        id={song.id}
      />
    );
  });

  return (
    <div className={classes.grid}>
      {" "}
      <div className={classes.title}>
        <span>{currentListSongs[0].playlist}</span>
      </div>
      <div className={classes.container}>
        <ul className={classes.list}>{songsList}</ul>
      </div>
    </div>
  );
};
export default List;
