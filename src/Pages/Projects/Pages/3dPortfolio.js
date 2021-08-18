import React, { useEffect, useState, useContext } from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

export default function Portfolio(props) {
    return (
        <div>
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
                Summary
            </Typography>

            <p>
            This is just an experiment of what my new portfolio website could be designed as.
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