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
      "https://deezerdevs-deezer.p.rapidapi.com/playlist/1629677515",
      "playlist"
    );
  }, []);

  return (
    <div className="App">
      {/* {!SongsCtx.currentListSongs[0] && (
        <div className="error">
          Please reload the page in 2 minutes. The number of requests to the
          site has been exceeded.
        </div>
      )} */}

      {SongsCtx.currentListSongs[0] && <Header />}
      {SongsCtx.currentListSongs[0] && <Preview />}
      {SongsCtx.ifError && (
        <div className="small-error">
          <div className="error-text">
            Please try one more time. The number of requests to the site has
            been exceeded.
          </div>
        </div>
      )}
      {SongsCtx.currentListSongs[0] && !SongsCtx.ifError && <List />}
      {SongsCtx.currentListSongs[0] && !SongsCtx.ifError && <Player />}
    </div>
  );
}

export default App;
