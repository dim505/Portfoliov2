import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import PowerShell from "./Pages/PowerShell/PowerShell";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SocialMedia from "./Pages/SocialMedia";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AMS_TS from "./Pages/AMS_TS";
import AMS_LL from "./Pages/AMS_LL";
import Webstore from "./Pages/webstore";
import TicTacToe from "./Pages/TicTacToe";
import Weatherapp from "./Pages/weatherapp";
import PythonWikiCrawler from "./Pages/PythonWikiCrawler";
import AMS from "./Pages/ams";
import Dms from "./Pages/dms";
import CSharpCalc from "./Pages/CSharpCalc";
import JavascriptCalc from "./Pages/JavascriptCalc";
import { ApiCall } from "../../SharedFunctions/ApiCall";
import { Link } from "react-router-dom";
import PortfolioV1 from "./Pages/PortfolioV1";
import "./Project.scss"
import {observer} from "mobx-react"
import Context from "../../context"


 
//https://auth0.com/blog/managing-the-state-of-react-apps-with-mobx/
//https://medium.com/@shoaibbhimani1392/getting-started-with-mobx-82306df92d90
//https://mono.software/2019/04/16/async-webapi-calls-using-react-with-mobx/

//renders each indivual project page depending on what project a user is visiting
var ProjectItem =  observer ((props) => {
  const [header, SetHeader] = useState("");
  const appState = useContext(Context)
  console.log("appState")
  console.log(appState)
  // const [Images, SetImages] = useState([{ original: "" }]);

  //Makes API call to get all the photo urls for the project
  useEffect( () => {
    window.CurrentIndex = 0;
    appState.GetImages(props.match.params.id)
    appState.ModTest(3)
    console.log(appState.test)

      //renders the appropriate header name
    if (props.match.params.id === "SocialMedia") {
      SetHeader("Social Media");
    } else if (props.match.params.id === "AMS_TS") {
      SetHeader("AMS (Tenant Side)");
    } else if (props.match.params.id === "AMS_LL") {
      SetHeader("AMS (Landlord Side)");
    } else if (props.match.params.id === "Webstore") {
      SetHeader("Webstore");
    } else if (props.match.params.id === "ReactJSTicTacToe") {
      SetHeader("Tic Tac Toe");
    } else if (props.match.params.id === "ReactJSWeatherApp") {
      SetHeader("Weather App");
    } else if (props.match.params.id === "PythonWikiCrawler") {
      SetHeader("Wiki Crawler");
    } else if (props.match.params.id === "AcademicManagementSystem") {
      SetHeader("Academic Management System");
    } else if (props.match.params.id === "DocumentManagementSystem") {
      SetHeader("Document Management System");
    } else if (props.match.params.id === "C") {
      SetHeader("C# Calculator");
    } else if (props.match.params.id === "JavascriptCalculator") {
      SetHeader("Javascript Calculator");
    } else if (props.match.params.id === "PowerShell") {
      SetHeader("PowerShell Scripts");
    } else if (props.match.params.id === "PortfolioV1") {
      SetHeader("Portfolio V1");
    }
  }, [props.match.params.id]);

  //renders the appropriate component 
  const RenderPage = () => {
    window.scrollTo(0, 0)

    if (props.match.params.id === "SocialMedia") {
      return <SocialMedia />;
    } else if (props.match.params.id === "AMS_TS") {
      return <AMS_TS />;
    } else if (props.match.params.id === "AMS_LL") {
      return <AMS_LL />;
    } else if (props.match.params.id === "Webstore") {
      return <Webstore />;
    } else if (props.match.params.id === "ReactJSTicTacToe") {
      return <TicTacToe />;
    } else if (props.match.params.id === "ReactJSWeatherApp") {
      return <Weatherapp />;
    } else if (props.match.params.id === "PythonWikiCrawler") {
      return <PythonWikiCrawler />;
    } else if (props.match.params.id === "AcademicManagementSystem") {
      return <AMS />;
    } else if (props.match.params.id === "DocumentManagementSystem") {
      return <Dms />;
    } else if (props.match.params.id === "C") {
      return <CSharpCalc />;
    } else if (props.match.params.id === "JavascriptCalculator") {
      return <JavascriptCalc />;
    } else if (props.match.params.id === "PowerShell") {
      return <PowerShell />;
    } else if (props.match.params.id === "PortfolioV1") {
      return <PortfolioV1 />;
    }

    //
  };

  return (
    <div>
      <Typography classes={{ root: "AboutHeader" }} variant="h3" gutterBottom>
        {header}
      </Typography>
     
      {appState.Images[0].original !== null && appState.Images[0].original !== undefined ? (
        <Fade delay={1000}>
          <ImageGallery showPlayButton={false} lazyLoad={true} items={appState.Images} />
        </Fade>
      ) : (
        <div />
      )}

      <Fade>{RenderPage()}</Fade>
      <div className="ProjectFooter">
        <Link to={`/`}>
          <Button variant="outlined">
            <HomeIcon />
            Home
          </Button>
        </Link>

        {appState.Images[0].ProjectGithubLink ? (
          <a
            href={appState.Images[0].ProjectGithubLink}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outlined">
              <GitHubIcon />
              GitHub
            </Button>
          </a>
        ) : (
          <div />
        )}

        {appState.Images[0].ProjectLiveLink ? (
          <a href={appState.Images[0].ProjectLiveLink} target="_blank" rel="noreferrer">
            <Button variant="outlined">
              <OpenInNewIcon />
              Demo
            </Button>
          </a>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
        })

export default ProjectItem