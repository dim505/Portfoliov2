import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProjectTileComp from "./ProjectTile";
import { ApiCall } from "./ApiCall";
import Fade from "react-reveal/Fade";
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

//look up on mouse over on div
export default function FullCollection() {
  const [ProjectTiles, SetProjectTiles] = useState([]);

  useEffect(() => {
    ApiCall(
      "Get",
      `${process.env.REACT_APP_BackEndUrl}/api/PortfolioV2/GetProgInfo`
    ).then((results) => {
      console.log(results);
      SetProjectTiles(results);
    });
  }, []);

  return (
    <Fade delay={500}>
      <div className="FullCollection SectionPadding">
        <Typography variant="h4" gutterBottom>
          Full Collection
        </Typography>
        <Grid container spacing={2} justify="center">
          {ProjectTiles.map((ProjectTile) => (
            <ProjectTileComp info={ProjectTile} />
          ))}
        </Grid>

        <div className="FullCollectionButtonContainer"> 


        <Button  variant="outlined">
            <ArrowUpwardIcon /> 
      </Button>

      <Button  variant="outlined">
            <ArrowDownwardIcon /> 
      </Button>


        </div>
      </div>
    </Fade>
  );
}
