import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
export default function AMS(props) {
  return (
    <div>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        AMS OVERVIEW
      </Typography>

      <p>
        {" "}
        I call my desktop application Academic Management System (AMS). I wrote
        this in VB.NET. This connects to a Microsoft SQL Server database. The
        master branch is version 1.3.1. The various functionalities of this
        application are the ability to add application users, teachers,
        students, and courses into the database, update the entities
        information, delete the entities, register students with their
        respective classes, run predefined reports, access control, and look up
        a student’s grades. This application also implements salting and hashing
        of passwords behind the scenes.
      </p>
    </div>
  );
}
