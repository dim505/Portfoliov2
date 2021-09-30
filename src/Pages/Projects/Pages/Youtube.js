import React, { useEffect, useState, useContext } from "react";
 
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

//holds information regarding my javascript calculator
export default function Youtube(props) {
  return (
    <div>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Summary
      </Typography>

      <p>
        This is a youtube lite clone exploring the Youtube API. This project is currently being developed.
      </p>
            <Divider />
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technology stack
      </Typography>



      <ul>
<li>React JS</li>
<li>Material UI</li>
<li>Youtube API</li>
      </ul>

    </div>
  );
}
