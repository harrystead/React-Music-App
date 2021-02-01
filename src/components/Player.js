import React, {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong }) => {
    const audioRef = useRef(null);
    const audioPlay = () => {
        console.log(audioRef.current)
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range"/>
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skipBack" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={audioPlay} className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="skipForward" size="2x" icon={faAngleRight}/>
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;