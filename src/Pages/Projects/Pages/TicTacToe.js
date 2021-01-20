import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider"

export default function TicTacToe(props) {
  return (
    <div>

<Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Summary
      </Typography>
      
      <p>
       I have a Tic Tac Toe game that supports single and multiplayer mode. It has a tour mode giving the run down on how to use the application
      </p>

      <Divider />
	  
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technology Stack
      </Typography>
      <ol>
        <li>CSS</li>
        <li>HTML</li>
        <li>React JS (Material UI)</li>
      </ol>
	  

    </div>
  );
}
