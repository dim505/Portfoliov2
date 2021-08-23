import React, { useEffect, useState, useContext } from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

export default function NewsAggregator(props) {
    return (
        <div>
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
                Summary
            </Typography>

            <p>
            A quick project utilizing the Bing News API to aggregate news articles together based on search keywords
            </p>
            <Divider />
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
                Technology stack
            </Typography>



            <ul>
                <li> React JS</li>
                <li> Material UI</li>
                <li> Bing News API</li>

            </ul>

        </div>



    )

}