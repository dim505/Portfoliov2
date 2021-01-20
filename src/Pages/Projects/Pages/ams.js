import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
//holds information related to academic management system
export default function AMS(props) {
  return (
    <div>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
      Summary
      </Typography>

      <p>
       The various functionalities of this
        application are 
        
        <ol>
            <li>the ability to add application users, teachers, students, and courses</li>
            <li>update the users, teachers, students, and courses information/delete them as well</li>
            <li>register students with their respective classes</li>
            <li>run predefined reports</li>
            <li>access control (giving system users predefined roles such as Admin/Regular user thus controlling access to certain system functions)</li>
            <li>Looking up a student’s grades</li>

        </ol>
        
     This application also implements salting and hashing
        of passwords behind the scenes.
      </p>


      <Divider />
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technology stack
      </Typography>

      <ul>
        <li> VB .NET</li>
        <li> SQL</li>
        <li> SQL Server</li>
      </ul>

    </div>
  );
}
