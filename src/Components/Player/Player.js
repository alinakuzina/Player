import React, { useEffect } from "react";
import { useContext, useState, useMemo, useRef } from "react";
import classes from "./player.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import SongsContext from "../../store/song-context";

const Player = function (props) {
  const ctx = useContext(SongsContext);
  const [autoplay, setAutoplay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  let audioPlayer = useRef();
  let { title, artist, musicSrc, imgSrc } =
    ctx.currentListSongs[ctx.currnetSongIndex];
  let audio = useMemo(() => new Audio(musicSrc), [musicSrc]);

  const onLoadedMetadata = () => {
    if (audioPlayer.current) {
      const minutes = Math.floor(audioPlayer.current.duration / 60);
      const seconds = Math.floor(audioPlayer.current.duration - minutes * 60);
      setDuration(`${minutes}:${seconds}`);
      if (autoplay) {
        audio.play();
        ctx.isPlayingHandler();
      }

      audio.addEventListener("timeupdate", (e) => {
        if (audio.currentTime < 60) {
          audio.currentTime < 10
            ? setCurrentTime(`0:0${Math.floor(audio.currentTime)}`)
            : setCurrentTime(`0:${Math.floor(audio.currentTime)}`);
        } else {
          const min = Math.floor(audio.currentTime / 60);
          const sec = Math.floor(audio.currentTime - minutes * 60);
          sec < 10
            ? setCurrentTime(`${min}:0${sec}`)
            : setCurrentTime(`${min}:${sec}`);
        }
      });

      audio.addEventListener("ended", () => {
        nextSongHandler();
      });
    }
  };

  const playHandler = function () {
    audio.play();
    ctx.isPlayingHandler();
  };

  const pauseHandler = function () {
    audio.pause();
    ctx.isPlayingHandler();
  };

  const prevSongHandler = () => {
    audio.pause();
    ctx.prevSong();
    setAutoplay(true);
  };

  const nextSongHandler = () => {
    audio.pause();
    ctx.nextSong(audio);
    setAutoplay(true);
  };

  const changeCurrentTimeHandler = () => {
    console.log(audio.currentTime);
  };

  const clickProgress = () => {
    console.log(audio.currentTime);
  };

  return (
    <div className={classes.container}>
      <div className={classes.player}>
        {/* <!-- Song --> */}
        <div className={classes.imgContainer}>
          <img src={imgSrc} alt="Album Art" className={classes.img} />
        </div>
        <div className={classes.text}>
          <h2 className={classes.title}>{title}</h2>
          <h3 className={classes.artist}>{artist}</h3>
        </div>

        <audio
          src={musicSrc}
          className={classes.audio}
          ref={audioPlayer}
          onLoadedMetadata={onLoadedMetadata}
          onTimeUpdate={changeCurrentTimeHandler}
        ></audio>
        {/* <!-- Progress --> */}
        <div className={classes.progress} onClick={clickProgress}>
          <div className={classes.progressLine}></div>
          <div className={classes.durationContainer}>
            <span className={classes.current}>{currentTime}</span>
            <span className={classes.duration}>{duration}</span>
          </div>
        </div>
        {/* <!-- Controls --> */}
        <div className={classes.controls}>
          <FontAwesomeIcon
            icon={faBackwardStep}
            className={classes.icon}
            onClick={prevSongHandler}
          />
          {!ctx.isPlaying && (
            <FontAwesomeIcon
              icon={faPlay}
              className={classes.iconMain}
              onClick={playHandler}
            />
          )}
          {ctx.isPlaying && (
            <FontAwesomeIcon
              icon={faPause}
              className={classes.iconMain}
              onClick={pauseHandler}
            />
          )}

          <FontAwesomeIcon
            icon={faForwardStep}
            className={classes.icon}
            onClick={nextSongHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default Player;
