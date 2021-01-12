import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
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
