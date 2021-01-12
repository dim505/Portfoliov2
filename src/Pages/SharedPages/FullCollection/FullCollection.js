import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProjectTileComp from "./ProjectTile";
import { ApiCall } from "../../../SharedFunctions/ApiCall";
import Fade from "react-reveal/Fade";
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import "../SharedPages.css"
//look up on mouse over on div
export default function FullCollection() {
  const [ProjectTiles, SetProjectTiles] = useState([]);
  const [Index, SetIndex] = useState(3);

  useEffect(() => {



    ApiCall(
      "Get",
      `${process.env.REACT_APP_BackEndUrl}/api/PortfolioV2/GetProgInfo`
    ).then((results) => {
      console.log(results);
      if (window.location.pathname === "/Projects") {
        SetIndex(13)
      }
       
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
                        {ProjectTiles.slice(0,Index).map((ProjectTile) => (
          
          
          <ProjectTileComp info={ProjectTile} />
          ))}

        </Grid>


          {window.location.pathname === "/Projects" ? <div/> :
                        <div className="FullCollectionButtonContainer"> 


                        <Button onClick={() => {if (Index > 3) {SetIndex(Index - 3)}} } variant="outlined">
                            <ArrowUpwardIcon /> 
                      </Button>
                
                      <Button onClick={
                        
                      
                        () => {if (Index < ProjectTiles.length) {SetIndex(Index + 3)}}}  variant="outlined">
                            <ArrowDownwardIcon /> 
                      </Button>
                
                
                        </div>          
          }

      </div>
    </Fade>
  );
}
