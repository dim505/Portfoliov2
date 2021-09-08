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
                This app demonstrates the different lighting you can have in a THREE JS Scene. 
                
                I made the project in order to get a better idea on how lighting works in a scene.
                 I have 3 different lights with different colors pointing at the dice so you can
                  differentiate the lights from one and other. The lights are labeled accordingly in the scene. You can also change the color of the lights using the color palette in the top right corner.

                  <ol>

                       Types of Lights: 
                      <li>Key Light - This is the main light that points toward the object of focus and generates strong shadows </li>
                      <li>Fill Light - This is a dimmer light oppsite of the key light used to dampen the strong shadows created by the keylight </li>
                      <li>Rim Light - A light behind the object of focus to help the subject pop out of the background</li>
                 </ol>
                    
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