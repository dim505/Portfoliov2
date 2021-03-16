import React, {useEffect, useRef} from "react";
import "./Global.scss";
import NavBar from "./Pages/NavBar/Navbar";
import { Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe/AboutMe";
import HomePage from "./Pages/Home/HomePage";
import ParticlesBg from "particles-bg";
import Projects from "./Pages/Projects/Projects";
import ProjectItem from "./Pages/Projects/ProjectItem";
import ContactSection from "./Pages/SharedPages/Contact/ContactSection";
import Context from "./context"
import AppState from "./AppState"
 
//parent component that holds the website subcompoents
export default function App() {
 
 


  return (

    <Context.Provider value={ new AppState()} >  
    
    <>
    
 
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
          <Projects 
          
          />
        </Route>

        <Route path="/Contact">
          <ContactSection />
        </Route>
     
        <Route path="/Projects/:id" component={(props) => {
                return (
                <ProjectItem
               
                {...props}
                /> )
        }}/> 



        
        <ParticlesBg color="#808080" num={50} type="cobweb" bg={true} />
     
      </div>
    </div>
     
    </>
    </Context.Provider>
  );




}
