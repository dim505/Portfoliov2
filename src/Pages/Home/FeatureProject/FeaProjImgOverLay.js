import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
//image overlay for the featured projects section on the home page
export default function FeaProjImgOverLay(props) {
  return (
    <Link to={`Projects/${props.info.ProjectInfoUrl}`}>
      <div className="PicContainer">
        <img src={props.info.ProjectImageURL} />

        <div className="OverLay"></div>
      </div>
    </Link>
  );
}
