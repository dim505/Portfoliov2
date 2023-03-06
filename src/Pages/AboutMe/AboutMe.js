import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import ContactSection from "../SharedPages/Contact/ContactSection";
import Fade from "react-reveal/Fade";
import Context from "../../context"
import {observer} from "mobx-react"

/* contains info for the about page*/
 function AboutMe() {

  return (
    <Fade>
      <div className="AboutPage">
        <Typography classes={{ root: "AboutHeader" }} variant="h3" gutterBottom>
          A little Introduction
        </Typography>
        
        <Typography
          classes={{ root: "AboutSection" }}
          variant="h5"
          gutterBottom
        >
          Background:
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Hello, My name is Dmitriy. I'm a motivated technology enthusiast that
            graduated with a
            bachelor's of Science in Computer Information Systems. Professional
          experience includes providing software and hardware support, website
          management, PowerShell automation, software development, and SQL report writing.
        </Typography>

        <Typography
          classes={{ root: "AboutSection" }}
          variant="h5"
          gutterBottom
        >
          Education:
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          <ul>
            <li>
              <p> Bachelor's of Science in Computer Information Systems </p>
              <p> Deans List, 3.7 GPA</p>
            </li>
          </ul>
        </Typography>

        <Typography
          classes={{ root: "AboutSection" }}
          variant="h5"
          gutterBottom
        >
          Experience:
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          <ul>
            <li>
              <p> 4 years: </p>
              <ol>
                <li>
                  <p>
                    Expanding my web portfolio mainly consisting of web
                    applications (React JS, .Net Core, SQL){" "}
                  </p>
                </li>
                <li>
                  <p>
                    Professional Experience: SQL report writing, resolving
                    application database issues, database maintenance, Powershell automation, and full stack development{" "}
                  </p>
                </li>
              </ol>
            </li>
          </ul>
        </Typography>

        <ContactSection />
      </div>
    </Fade>
  );
}

export default observer(AboutMe)