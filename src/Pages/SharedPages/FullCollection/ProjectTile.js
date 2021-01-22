import React, { useEffect, useState, useContext } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";


//holds code that displays file in the full collection page
export default function ProjectTile(props) {
  const [Hover, IsHovering] = useState(false);

  return (
    <Grid item lg={4} md={4} sm={6} xs={12}>
      <div className="ProjectTile">
        <Link to={`Projects/${props.info.ProjectPage}`}>
          <div
            onMouseEnter={() => {
              IsHovering(true);
            }}
            onMouseLeave={() => {
              IsHovering(false);
            }}
            className="Header"
          >
            {Hover ? <FolderIcon /> : <FolderOpenIcon />}

            <Typography
              classes={{
                root: Hover ? "ProjectTileHeaderHover" : "ProjectTileHeader"
              }}
              variant="h6"
              gutterBottom
            >
              {props.info.ProjectName}
            </Typography>
          </div>
        </Link>
        <Typography variant="body2" gutterBottom>
          {props.info.ProjectShortDesc}
        </Typography>
        <div className="TextRight">
          <a
            href={props.info.ProjectGithubLink}
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip title="Github Link">
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </a>
          {props.info.ProjectLiveLink ? (
            <a
              href={props.info.ProjectLiveLink}
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Live Link">
                <IconButton>
                  <OpenInNewIcon />
                </IconButton>
              </Tooltip>
            </a>
          ) : (
            <div />
          )}
        </div>{" "}
      </div>
    </Grid>
  );
}
