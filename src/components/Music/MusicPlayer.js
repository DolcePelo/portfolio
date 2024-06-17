import React, { useState } from "react";
import { AiTwotoneSound , AiOutlineAudioMuted  } from "react-icons/ai";
import musicFile from "../../assets/music.mp3";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef(null);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player">
            {isPlaying ? (
                <AiTwotoneSound className="music-icon"
                    onClick={toggleMusic}
                    style={{ cursor: "pointer", fontSize: "2rem" }}
                />
            ) : (
                <AiOutlineAudioMuted className="music-icon"
                    onClick={toggleMusic}
                    style={{ cursor: "pointer", fontSize: "2rem" }}
                />
            )}
            <audio ref={audioRef} src={musicFile} loop />
        </div>
    );
};

export default MusicPlayer;
