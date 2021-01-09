import React from "react";
import "./styles.css";
import BigBangStarField from "react-big-bang-star-field";
import NavBar from "./Navbar";
import { Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import ParticlesBg from "particles-bg";
import Projects from "./Projects";
import ProjectItem from "./ProjectItem";
import ContactSection from "./ContactSection";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home-layout">
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/About">
          <AboutMe />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>

        <Route path="/Contact">
          <ContactSection />
        </Route>

        <Route path="/Projects/:id" component={ProjectItem}></Route>
        <ParticlesBg color="#808080" num={50} type="cobweb" bg={true} />
      </div>
    </div>
  );
}
