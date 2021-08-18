import React, { useEffect, useState, useContext } from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";


export default function Productshowcasing(props) {
    return (
        <div>
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
                Summary
            </Typography>

            <p>
                This 3D Product Show casing page is just a experiment with the integration of THREE JS into a regular website. It includes a 3D IPOD which the user can interact with.
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