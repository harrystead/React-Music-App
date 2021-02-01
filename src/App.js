import {useState} from 'react';
import "./styles/app.scss";
import Player from './components/Player';
import Songs from './components/Songs';
import data from './data';

function App () {
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);
return(
  <div className="app"> 
   <Songs currentSong={currentSong} />
   <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
  </div>
)
}

export default App;

