import React, { useEffect, useState, useContext } from "react"; 
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";


export default function CryptoTracker(props) { 
        return (
            <div>

<Typography classes={{ root: "AboutSection" }} variant="h6" gutterBottom>
              ***Please note, the Coincap API is severely throttling use of its public API causing problems with the CryptoTracker. You might experience issues when using this app ***
            </Typography>
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
              Summary
            </Typography>
      
            <p>
            My Cryptocurreny tracker tracks over 1000 coin values. It displays the price proggession over a year, month, week and day. You can search for different coins and you have a list of currencies you can select from. Lastly, It has Day/Night mode. Depending on what time of day you are viewing the app, you can darken or lighten the background.
            </p>
                  <Divider />
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
              Technology stack
            </Typography>
      
      
      
            <ul>
              <li> React JS</li>
              <li> Material UI</li>
              <li> Coincap API</li>
 
            </ul>
      
          </div>



        )

}