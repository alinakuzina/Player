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

  const ApiCurrentSongsHandler = (url) => {
    let songs = [];
    if (currentAudio) {
      currentAudio.pause();
    }
    setIsPlaying(false);
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
        console.log(response);
        for (let i = 0; i < response.tracks.data.length; i++) {
          if (response.tracks.data[i].preview) {
            songs.push({
              playlist: response.title,
              id: number,
              title: response.tracks.data[i].title,
              artist: response.tracks.data[i].artist.name,
              musicSrc: response.tracks.data[i].preview,
              imgSrc: response.tracks.data[i].album.cover_big,
            });
            number += 1;
          }
        }
        setCurrentSongs(songs);
        setCurrnetSongIndex(0);
      })
      .catch(console.log("Please reload the page. Server don`t answer. "));
  };

  const ApiSearchhandler = (url, searchText) => {
    let songs = [];
    // if (currentAudio) {
    //   currentAudio.pause();
    // }
    // setIsPlaying(false);
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "bf55e94a67mshb9ff325d6bed36cp1524a0jsn2c8815085b6e",
    //     "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    //   },
    // };

    // fetch(url, options)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     let number = 0;
    //     console.log(response);

    //     console.log("playlist");
    //     for (let i = 0; i < response.tracks.data.length; i++) {
    //       if (response.tracks.data[i].preview) {
    //         songs.push({
    //           playlist: searchText,
    //           id: number,
    //           title: response.tracks.data[i].title,
    //           artist: response.tracks.data[i].artist.name,
    //           musicSrc: response.tracks.data[i].preview,
    //           imgSrc: response.tracks.data[i].album.cover_big,
    //         });
    //         number += 1;
    //       }
    //     }
    //     setCurrentSongs(songs);
    //     setCurrnetSongIndex(0);
    //   })
    //   .catch(console.log("Please reload the page. Server don`t answer. "));
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
    if (currnetSongIndex === currentSongs.length - 1) {
      setCurrnetSongIndex(0);
    } else {
      setCurrnetSongIndex(currnetSongIndex + 1);
    }
    setIsPlaying(false);
  };

  const prevSongHandler = () => {
    if (currnetSongIndex === 0) {
      setCurrnetSongIndex(currentSongs.length - 1);
    } else {
      setCurrnetSongIndex(currnetSongIndex - 1);
    }
    setIsPlaying(false);
  };

  const changeIndexHandler = (index) => {
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
        apiSearch: ApiSearchhandler,
      }}
    >
      {props.children}
    </SongsContext.Provider>
  );
};

export default SongsContext;
