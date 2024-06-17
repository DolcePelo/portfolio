import React from "react";
import Navbar from "./components/Navbar/navbar.js";
import Banner from "./components/Banner/Banner.js";
import Video from "./assets/bg-video.mp4";
import MusicPlayer from "./components/Music/MusicPlayer.js";

function App() {
  return (
    <div className="App">
      <div className="video-container">
        <video autoPlay muted loop id="video-bg">
          <source src={Video} type="video/mp4"/>
        </video>
      </div>
      <Navbar />
      <Banner />
      <MusicPlayer />
    </div>
  );
}

export default App;
