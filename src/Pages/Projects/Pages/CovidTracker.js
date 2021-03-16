import React, { useEffect, useState, useContext } from "react"; 
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";


export default function CryptoTracker(props) { 
        return (
            <div>
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
              Summary
            </Typography>
      
            <p>
                My Covid tracker displays a list of countries on a map with various current Covid statistics related to that country.
            </p>

            <p>  It has 2 modes which you can toggle between from:</p>

            <ol>
          <li>Current Mode: gives you the current infected, recovered, and death count per selected country at the moment</li>
          <li>Historical Mode: gives you a visual representation of the total infected, recovered, and dead cases since Covid started. Sliding the date slider will count the days and give you the total count on that day. </li>

            </ol>
                  <Divider />
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
              Technology stack
            </Typography>
      
      
      
            <ul>
              <li> React JS</li>
              <li> Material UI</li>
              <li> disease SH API</li>
              <li> John Hopkins Whiting School of Engineering Github Covid Repository </li>

           
 
            </ul>
      
          </div>



        )

}