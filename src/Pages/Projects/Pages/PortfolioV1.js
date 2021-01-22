import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";


//holds information regarding my first portfolio
export default function PortfolioV1(props) {
  return (
    <div>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Summary
      </Typography>
      <p>
        This is my first website that I made. It acts as a central point
        explaining all my projects.
      </p>
      <Divider />
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technology stack
      </Typography>
      <ul>
        <li> HTML</li>
        <li> CSS</li>
        <li> JavaScript</li>
        <li> Bootstrap</li>
        <li> JQuery</li>
      </ul>
    </div>
  );
}
