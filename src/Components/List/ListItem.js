import React from "react";
import classes from "./ListItem.module.css";
import { useContext, useRef, useState } from "react";
import SongsContext from "../../store/song-context";

const ListItem = (props) => {
  const ctx = useContext(SongsContext);
  const scrollEl = useRef();
  const notScrollEl = useRef();
  //   const [active, setAcrive] = useState();

  let rufOfEl = ctx.currnetSongIndex === props.id ? scrollEl : notScrollEl;

  if (scrollEl.current) {
    scrollEl.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div
      className={
        ctx.currnetSongIndex === props.id ? classes.playing : classes.container
      }
      id={props.id}
      ref={rufOfEl}
      onClick={props.setNewTrack}
    >
      <img src={props.img} className={classes.img} id={props.id} />
      <div className={classes.details} id={props.id}>
        <div className={classes.title} id={props.id}>
          {props.title}
        </div>
        <div className={classes.artist} id={props.id}>
          {props.artist}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
