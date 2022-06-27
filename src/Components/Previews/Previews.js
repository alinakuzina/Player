import React from "react";
import { useContext, useState } from "react";
import classes from "./Previews.module.css";
import deepHous from "./images/deepHouse.jpeg";
import feelGood from "./images/FeelGood.jpeg";
import futureTrance from "./images/futuretranse.jpeg";
import happyHit1 from "./images/HappyHits.jpeg";
import happyHit2 from "./images/happyHits10.jpeg";
import loFiChill from "./images/loFiAndChill.jpeg";
import lofiradio from "./images/LofiRadio.jpeg";
import newDance from "./images/NewDance.jpeg";
import piano from "./images/Piano.jpeg";
import pop from "./images/pop.jpeg";
import popRock from "./images/popRocks.jpeg";
import tiktok from "./images/tiktok.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import SongsContext from "../../store/song-context";

const Preview = function (props) {
  const ctx = useContext(SongsContext);

  const playlistHandler = (e) => {
    ctx.currentAudio.pause();
    ctx.isPousedHandler();
    ctx.setCurrentSongs(
      `https://deezerdevs-deezer.p.rapidapi.com/playlist/${e.target.id}`
    );
  };

  return (
    <div className={classes.container}>
      <button className={classes.left}>
        <FontAwesomeIcon icon={faAnglesLeft} className={classes.icon} />
      </button>
      <div className={classes.imgs}>
        <img
          src={deepHous}
          className={classes.img}
          id={7973829562}
          onClick={playlistHandler}
        />
        <img
          src={feelGood}
          className={classes.img}
          id={4485213484}
          onClick={playlistHandler}
        />
        <img
          src={futureTrance}
          className={classes.img}
          id={9388812982}
          onClick={playlistHandler}
        />
        <img
          src={happyHit1}
          className={classes.img}
          id={1479458365}
          onClick={playlistHandler}
        />
        <img
          src={happyHit2}
          className={classes.img}
          id={8873748882}
          onClick={playlistHandler}
        />
        <img
          src={lofiradio}
          className={classes.img}
          id={6399367984}
          onClick={playlistHandler}
        />
        <img
          src={loFiChill}
          className={classes.img}
          id={3338949242}
          onClick={playlistHandler}
        />
        <img
          src={newDance}
          className={classes.img}
          id={2249258602}
          onClick={playlistHandler}
        />
        <img
          src={piano}
          className={classes.img}
          id={1787912442}
          onClick={playlistHandler}
        />
        <img
          src={pop}
          className={classes.img}
          id={1282483245}
          onClick={playlistHandler}
        />
        <img
          src={popRock}
          className={classes.img}
          id={8074581462}
          onClick={playlistHandler}
        />
        <img
          src={tiktok}
          className={classes.img}
          id={4403076402}
          onClick={playlistHandler}
        />
      </div>
      <button className={classes.right}>
        <FontAwesomeIcon icon={faAnglesRight} className={classes.icon} />
      </button>
    </div>
  );
};
export default Preview;
