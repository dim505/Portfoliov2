import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
export default function JavascriptCalc(props) {
  return (
    <div>
      <p>
        This is written in Javascript, HTML, and CSS with elements of JQuery and
        Popper JS. This is a client-side calculator that is draggable (Please
        note, the draggable option does not work on mobile devices). It also
        remembers the drag location even after a page refresh. All calculations
        are done on the client's browser.
      </p>
    </div>
  );
}
