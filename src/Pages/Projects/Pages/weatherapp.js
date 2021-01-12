import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
export default function weatherapp(props) {
  return (
    <div>
      <p>
        My weather app connects with Open Weather Maps API to get the weather
        information and Google Maps API to get the map. Currently, it gets the
        current weather and the 5 day hourly forcast of a city using the city
        name and ISO code (country code). It also supports geolocation. When
        first visiting the site for the first time, please click allow when it
        requests your location for geolocation to work correctly. Please click
        on the GITHUB picture below to see my code or the LIVE picture to see my
        app live!
      </p>
    </div>
  );
}
