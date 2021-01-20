import React, { useEffect, useState, useContext } from "react";
 
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";


export default function JavascriptCalc(props) {
  return (
    <div>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Summary
      </Typography>

      <p>
        This is a client-side calculator that is draggable (Please
        note, the draggable option does not work on mobile devices). It also
        remembers the drag location even after a page refresh. All calculations
        are done on the client's browser.
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
        <li> Popper JS</li>
      </ul>

    </div>
  );
}
