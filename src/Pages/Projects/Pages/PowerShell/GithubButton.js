import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
export default function GithubButton(props) {
  return (

   <div className="Center">  
    <a href={props.website} target="_blank" rel="noreferrer">
      <Button variant="outlined">
        <GitHubIcon />

        <Typography variant="h4">Github Link</Typography>
      </Button>
    </a>
    </div>  
  );
}
