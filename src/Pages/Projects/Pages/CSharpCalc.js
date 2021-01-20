import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
//holds information related to my CSharp Calc

export default function CSharpCalc(props) {
  return (
    <div>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Summary
      </Typography>

      
      <p>
          I wrote a server side calculator. All calculations are done on the server.
      </p>
      <Divider />
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technology stack
      </Typography>


      <ul>
        <li> HTML</li>
        <li> CSS</li>
        <li> C#</li>
        <li> ASP.NET Core Razor Pages</li>
        
      </ul>

    </div>
  );
}
