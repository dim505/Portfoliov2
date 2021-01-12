import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
export default function dms(props) {
  return (
    <div>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Document Management System (DMS)
      </Typography>

      <p>
        My Document Management System is coded in Java. It has a client/server
        architecture. The server acts as a gate keeper for files to be checked
        in/out of the server directory. The server keep tracks of who checks out
        the files, who checks them in and who is the owner. Clients can connect
        to the server and check files in and out as needed.
      </p>

      <p>
        The server is always listening in the background for a connection. There
        can be up to 10 connections at once. Once a client connects via IP
        address, they have 4 options that they can enter in the terminal:
      </p>

      <ol>
        <li>Checkout "file name": You download a files from the server </li>
        <li>Check in "file name" : You upload a file to the server</li>
        <li>Refresh : gets a list of files and their checkout status/owners</li>
        <li>Get latest version : downloads all files related to owner</li>
      </ol>
    </div>
  );
}
