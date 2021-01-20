import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider"

export default function weatherapp(props) {
  return (
    <div>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Non technical information:
      </Typography>

      <p>
        1) Currently, it gets the current weather and the 5 day hourly forcast
        of a city using the city name and ISO code (country code).
      </p>

      <p>
        2) It also supports geolocation. When first visiting the site for the
        first time, please click allow when it requests your location for
        geolocation to work correctly.{" "}
      </p>
	  
	  <p>3) It has a tour mode giving the run down on how to use the application </p>

<Divider />
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technical information:
      </Typography>

      <p>
        {" "}
        My weather app connects with Open Weather Maps API to get the weather
        information and Google Maps API to get the map and displays the users geocoordinates on the map.{" "}
      </p>
      <Divider />
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technology Stack
      </Typography>
      <ol>
        <li>HTML </li>
        <li>CSS </li>
        <li>React JS (Bootstrap)</li>

        <li>Google Maps </li>
        <li> OpenWeather API</li>
      </ol>
	  
    </div>
  );
}
