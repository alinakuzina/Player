import React from "react";
import classes from "./ListItem.module.css";
import { useContext } from "react";
import SongsContext from "../../store/song-context";

const ListItem = (props) => {
  const ctx = useContext(SongsContext);
  console.log(ctx.currnetSongIndex);
  return (
    <div
      className={
        ctx.currnetSongIndex === props.id ? classes.playing : classes.container
      }
      id={props.id}
    >
      <img src={props.img} className={classes.img} />
      <div className={classes.details}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.artist}>{props.artist}</div>
      </div>
    </div>
  );
};

export default ListItem;
