import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import PowerShell from "./PowerShell";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SocialMedia from "./SocialMedia";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AMS_TS from "./AMS_TS";
import AMS_LL from "./AMS_LL";
import Webstore from "./webstore";
import TicTacToe from "./TicTacToe";
import Weatherapp from "./weatherapp";
import PythonWikiCrawler from "./PythonWikiCrawler";
import AMS from "./ams";
import Dms from "./dms";
import CSharpCalc from "./CSharpCalc";
import JavascriptCalc from "./JavascriptCalc";
import { ApiCall } from "./ApiCall";
import { Link } from "react-router-dom";
import PortfolioV1 from "./PortfolioV1";

export default function ProjectItem(props) {
  const [header, SetHeader] = useState("");
  const [Images, SetImages] = useState([{ original: "" }]);

  useEffect(() => {
    window.CurrentIndex = 0;
    ApiCall(
      "Get",
      `${process.env.REACT_APP_BackEndUrl}/api/PortfolioV2/GetPageInfo/${props.match.params.id}`
    ).then((results) => {
      console.log(props.match.params.id);
      SetImages(results);
    });

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
    } else if (props.match.params.id === "PythonWikiCrawler") {
      SetHeader("Academic Management System");
    } else if (props.match.params.id === "PythonWikiCrawler") {
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

  const RenderPage = () => {
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

      {Images[0].original !== null && Images[0].original !== undefined ? (
        <Fade delay={1000}>
          <ImageGallery showPlayButton={false} lazyLoad={true} items={Images} />
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

        {Images[0].ProjectGithubLink ? (
          <a
            href={Images[0].ProjectGithubLink}
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

        {Images[0].ProjectLiveLink ? (
          <a href={Images[0].ProjectLiveLink} target="_blank" rel="noreferrer">
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
}
