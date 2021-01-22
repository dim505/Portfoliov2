import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FeaturedProjectomp from "./FeaturedProject";
import Pulse from "react-reveal/Pulse";
import context from "../../../context"
//parent component of the featured projects collection  in the home page
export default function FeaturedCollection() {
  const appState = useContext(context);

  return (
    <div className="SectionPadding">
      <Typography variant="h4" gutterBottom>
        Featured Collection
      </Typography>

      {appState.FeaturedProjects.map((FeaturedProject) => (
        <Pulse>
          <FeaturedProjectomp info={FeaturedProject} />
        </Pulse>
      ))}

      <Grid container justify="center"></Grid>
    </div>
  );
}
