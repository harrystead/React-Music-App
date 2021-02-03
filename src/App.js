import {useState} from 'react';
import "./styles/app.scss";
import Player from './components/Player';
import Songs from './components/Songs';
import data from './data';
import Library from './components/Library';

function App () {
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);
return(
  <div className="app"> 
   <Songs currentSong={currentSong} />
   <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
   <Library songs={songs} setCurrentSong={setCurrentSong}/>
  </div>
)
}

export default App;

