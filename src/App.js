import React from "react";
import Navbar from "./components/Navbar/navbar.js";
import Banner from "./components/Banner/Banner.js";
import Video from "./assets/bg-video.mp4";
import MusicPlayer from "./components/Music/MusicPlayer.js";
import Skills from "./components/Skills/Skills.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";

function App() {
  return (
    <div className="App">
      <div className="video-container">
        <video autoPlay muted loop id="video-bg">
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <Navbar />
      <section id="home">
        <Banner />
      </section>
      <MusicPlayer />
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
