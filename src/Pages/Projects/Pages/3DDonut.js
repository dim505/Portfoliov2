import React, { useEffect, useState, useContext } from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";


export default function Donut(props) {
    return (
        <div>
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
                Summary
            </Typography>

            <p>
                I made this one for fun. This is just a 3D donut floating in space that expands when you click on it.
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