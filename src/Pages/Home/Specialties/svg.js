import React, { useEffect, useState, useContext } from "react";
//component holds SVG icon data
export default function svg(props) {
  return (
    <p>
    <svg viewBox="0 0 32 32">
      <path d={props.PathUrl}></path>
    </svg>

    </p>
  );
}
