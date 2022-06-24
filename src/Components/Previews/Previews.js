import React from "react";
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

const Preview = function (props) {
  return (
    <div className={classes.container}>
      <button className={classes.left}>
        <FontAwesomeIcon icon={faAnglesLeft} className={classes.icon} />
      </button>
      <div className={classes.imgs}>
        <img src={deepHous} className={classes.img} />
        <img src={feelGood} className={classes.img} />
        <img src={futureTrance} className={classes.img} />
        <img src={happyHit1} className={classes.img} />
        <img src={happyHit2} className={classes.img} />
        <img src={lofiradio} className={classes.img} />
        <img src={loFiChill} className={classes.img} />
        <img src={newDance} className={classes.img} />
        <img src={piano} className={classes.img} />
        <img src={pop} className={classes.img} />
        <img src={popRock} className={classes.img} />
        <img src={tiktok} className={classes.img} />
      </div>
      <button className={classes.right}>
        <FontAwesomeIcon icon={faAnglesRight} className={classes.icon} />
      </button>
    </div>
  );
};
export default Preview;
