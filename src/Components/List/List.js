import React from "react";
import classes from "./List.module.css";
import ListItem from "./ListItem";
import { useContext } from "react";
import SongsContext from "../../store/song-context";

const List = function (props) {
  const ctx = useContext(SongsContext);
  const { currentListSongs, currnetSongIndex } = ctx;

  const songsList = currentListSongs.map((song) => {
    return (
      <ListItem
        key={song.id}
        artist={song.artist}
        title={song.title}
        img={song.imgSrc}
        id={song.id}
      />
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <span>Current playlist</span>
      </div>
      <ul className={classes.list}>{songsList}</ul>
    </div>
  );
};
export default List;
