import React, { useEffect, useState, useContext } from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";


export default function CameraAngle(props) {
    return (
        <div>
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
                Summary
            </Typography>

            <p>
                This app demonstrates the different lighting you can put in a THREE JS Scene. I made the project in order to get a better idea on how lighting works in a scene. I have various lights with different colors pointing at the dice so you can differentiate the lights from one and other. You can also change the light colors.
            </p>
            <Divider />
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
                Technology stack
            </Typography>



            <ul>
                <li> React JS</li>
                <li> Material UI</li>
                <li> THREE JS</li>

            </ul>

        </div>



    )

}