import React from "react";
import { useState } from "react";
import { useMemo } from "react";

const SongsContext = React.createContext({
  currentListSongs: [],
  PlaylistsArr: [],
  currnetSongIndex: 0,
  setCurrentSongs: () => {},
  setPlayList: () => {},
  nextSong: () => {},
  prevSong: () => {},
  isPlaying: false,
});

export const SongsContentProvider = (props) => {
  const [currentSongs, setCurrentSongs] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [currnetSongIndex, setCurrnetSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState();

  const ApiCurrentSongsHandler = (url, setArr) => {
    let songs = [];

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bf55e94a67mshb9ff325d6bed36cp1524a0jsn2c8815085b6e",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        let number = 0;
        for (let i = 0; i < response.tracks.data.length; i++) {
          if (response.tracks.data[i].preview) {
            songs.push({
              id: number,
              title: response.tracks.data[i].title,
              artist: response.tracks.data[i].artist.name,
              musicSrc: response.tracks.data[i].preview,
              imgSrc: response.tracks.data[i].album.cover_big,
            });
            number += 1;
          }
        }
        setArr(songs);
      })
      .catch(console.log("Please reload the page. Server don`t answer. "));
  };

  const audioHandler = (audio) => {
    setCurrentAudio(audio);
  };

  const currentSongsHandler = (url) => {
    ApiCurrentSongsHandler(url, setCurrentSongs);
  };

  const playListHandler = (url) => {
    ApiCurrentSongsHandler(url, setPlayList);
  };

  const isPlayingHandler = () => {
    setIsPlaying(true);
  };

  const isPousedHandler = () => {
    setIsPlaying(false);
  };

  const nextSongHandler = () => {
    console.log(currnetSongIndex);
    if (currnetSongIndex === currentSongs.lenth - 1) {
      setCurrnetSongIndex(0);
    } else {
      setCurrnetSongIndex(Number(currnetSongIndex) + 1);
    }
    setIsPlaying(false);
  };

  const prevSongHandler = () => {
    if (currnetSongIndex === 0) {
      setCurrnetSongIndex(currentSongs.length - 1);
    } else {
      setCurrnetSongIndex(Number(currnetSongIndex) - 1);
    }
    setIsPlaying(false);
  };

  const changeIndexHandler = (index) => {
    console.log(index);
    currentAudio.pause();
    setCurrnetSongIndex(index);
  };

  return (
    <SongsContext.Provider
      value={{
        currentListSongs: currentSongs,
        PlaylistsArr: playList,
        setCurrentSongs: currentSongsHandler,
        setPlayList: playListHandler,
        currnetSongIndex: currnetSongIndex,
        nextSong: nextSongHandler,
        prevSong: prevSongHandler,
        isPlaying: isPlaying,
        isPlayingHandler: isPlayingHandler,
        isPousedHandler: isPousedHandler,
        changeIndex: changeIndexHandler,
        currentAudio: currentAudio,
        newAudioHandler: audioHandler,
      }}
    >
      {props.children}
    </SongsContext.Provider>
  );
};

export default SongsContext;
