import {useState} from 'react';
import "./styles/app.scss";
import Player from './components/Player';
import Songs from './components/Songs';
import data from './data';

function App () {
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0]);
return(
  <div className="app"> 
   <Songs currentSong={currentSong} />
   <Player currentSong={currentSong}/>
  </div>
)
}

export default App;

