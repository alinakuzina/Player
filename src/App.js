import "./App.css";
import React from "react";
import { useState, useEffect, useContext } from "react";
import Header from "./Components/Header/Header";
import Preview from "./Components/Previews/Previews";
import List from "./Components/List/List";
import Player from "./Components/Player/Player";
import SongsContext from "./store/song-context";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";

function App() {
  let SongsCtx = useContext(SongsContext);
  useEffect(() => {
    SongsCtx.setCurrentSongs(
      "https://deezerdevs-deezer.p.rapidapi.com/playlist/4403076402"
    );
  }, []);

  return (
    <div className="App">
      {!SongsCtx.currentListSongs[0] && (
        <div className="error">
          Please reload the page in 2 minutes. The number of requests to the
          site has been exceeded.
        </div>
      )}
      {SongsCtx.currentListSongs[0] && <Header />}
      {SongsCtx.currentListSongs[0] && <Preview />}
      {SongsCtx.currentListSongs[0] && <List />}
      {SongsCtx.currentListSongs[0] && <Player />}
    </div>
  );
}

export default App;
