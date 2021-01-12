import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";


const IntroductionSection = () => {
  return (
    <div className="introduction-section">
      <div className="intro-cont">
        <Typography display="block" variant="h2">
          Dmitriy Komerzan
        </Typography>

        <Typography display="block" variant="h5" gutterBottom>
          Aspiring Software Developer
        </Typography>
        <Typography variant="body2" gutterBottom>
          "They don't make bugs like Bunny anymore" -Anonymous
        </Typography>
        <Typography variant="body1" gutterBottom>
          Based in Massachetts
        </Typography>
      </div>
    </div>
  );
};

export default IntroductionSection;
