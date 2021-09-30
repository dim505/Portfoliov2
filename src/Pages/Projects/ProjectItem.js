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
import { observer } from "mobx-react"
import Context from "../../context"
import CryptoTracker from "./Pages/CryptoTracker"
import CovidTracker from "./Pages/CovidTracker"
import Tweeder from "./Pages/Tweeder"
import Productshowcasing from "./Pages/3DProductShowcasing"
import CameraAngle from "./Pages/3DSphereCameraAngle"
import Donut from "./Pages/3DDonut"
import Carousel from "./Pages/3DCarousel"
import Portfolio from "./Pages/3dPortfolio"
import NewsAggregator  from "./Pages/NewsAggregator";
import Youtube from "./Pages/Youtube"

//renders each indivual project page depending on what project a user is visiting
function ProjectItem(props) {
  //sets header for the page
  const [Header, SetHeader] = useState("");
  //gets the app global state
  const appState = useContext(Context)
  console.log("appState")
  console.log(appState)
  // const [Images, SetImages] = useState([{ original: "" }]);

  //Makes API call to get all the photo urls for the project
  useEffect(() => {
    window.CurrentIndex = 0;
    //gets image links
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
    } else if (props.match.params.id === "CryptoTracker") {
      SetHeader("Cryptocurrency Tracker")
    }
    else if (props.match.params.id === "CovidTracker") {
      SetHeader("Covid Tracker")
    } else if (props.match.params.id === "3DProductShowcasing") {
      SetHeader("3D Product Showcasing")
    } else if (props.match.params.id === "3D Sphere Camera Angle") {
      SetHeader("3D Light Angle")
    } else if (props.match.params.id === "3DDonut") {
      SetHeader("3DDonut")
    } else if (props.match.params.id === "Tweeder") {
      SetHeader("Tweeder")
    }else if (props.match.params.id === "3DCarousel") {
      SetHeader("3D Carousel")
    } else if (props.match.params.id === "3dPortfolio") {
      SetHeader("3d Portfolio")
    }
    else if (props.match.params.id === "3DSphereCameraAngle") {
      SetHeader("Camera Angle")
    }    else if (props.match.params.id === "NewsAggregator") {
      SetHeader("News Aggregator")
    }
     else if (props.match.params.id === "Youtube") {
    SetHeader("Youtube")
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
    } else if (props.match.params.id === "CryptoTracker") {
      return <CryptoTracker />;
    } else if (props.match.params.id === "CovidTracker") {
      return <CovidTracker />;
    } else if (props.match.params.id === "Tweeder") {
      return <Tweeder />
    } else if (props.match.params.id === "3DProductShowcasing") {
      return <Productshowcasing />
    }
    else if (props.match.params.id === "3DSphereCameraAngle") {
      return <CameraAngle />
    }
    else if (props.match.params.id === "3DDonut") {
      return <Donut />
    } else if (props.match.params.id === "3DCarousel") {
      return <Carousel />
    }else if (props.match.params.id === "3dPortfolio") {
      return <Portfolio />
    }else if (props.match.params.id === "NewsAggregator") {
      return <NewsAggregator />
    }
    else if (props.match.params.id === "Youtube") {
      return <Youtube />
    }

    

    
    //
  };

  return (
    <div>
      <Typography classes={{ root: "AboutHeader" }} variant="h4" gutterBottom>
        {Header}
      </Typography>

      <Typography classes={{ root: "AboutHeader" }} variant="h3" gutterBottom>
        {Header}
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
}

export default observer(ProjectItem)