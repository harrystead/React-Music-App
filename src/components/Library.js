import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import LibrarySong from "./LibrarySongs";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ""} `}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
