import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider"
//holds information related to apartment management system land lord side
export default function AMS_LL(props) {
  return (
    <div>

      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Non Technical information:
      </Typography>

      <p>1) It has a dashboard for analytics.</p>
      <ol>
        <li>
          At the top there are a series of quick facts. It outlines some quick
          statistics including: total number of tenants, total number of
          properties, total property taxes paid for the year, and total expenses
          for the year (Receipts).
        </li>

        <li>
          In the second tier of windows, there are series of graphs that further
          analyze the data. The first graph analyzes your expenses occurred for
          each month, 2nd graph shows how many tenants you add each month, and
          the 3rd graph shows how many properties you add each year.
        </li>
        <li>
          Lastly, the Google Maps at the bottom displays all your properties on
          the map. If you click on the marker it shows the street address.
        </li>
      </ol>

      <p>
        2) You can upload/edit/delete tenants, properties, receipts, news
        related to those properties, account information, and pictures.
      </p>

      <p>
        3) It also has a messenger page. It pulls all the tenants that where
        added and the Landlord can hold a conversation individually with each
        tenant without having to resort to email.
      </p>

      <p>
        {" "}
        ** Please note you need to be added as a tenant to a property if you
        want to log in as a tenant to see the relevant information **
      </p>
	  
	  <Divider/>
	         <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technical information:
      </Typography>

      <p>
        1) It has a React JS front end, an ASP.Net API for the back-end and it
        is connected to a SQL database hosted in Azure. Currently, it features
        various aspects from the Material UI Framework and BootStrap.
      </p>

      <p>2) It is integrated with Auth0 for authentication.</p>
      <p>
        3) It auto suggests addresses when filling out or updating the property
        form using the HERE api.
      </p>
      <p>
        4) It has automated task scheduling using Hangfire. Once a day it checks
        if there are any leases that are about to expire and it will send a text
        message via Twillo or an email via Azure.
      </p>


<Divider />
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technology Stack
      </Typography>
      <ol>
        <li>React JS (Material UI, Bootstrap)</li>
        <li>ASP .Net Core API (Drapper ORM)</li>
        <li>Microsoft SQL Server</li>
        <li>Auth0 for authenication</li>
        <li> HERE Geocoder Autocomplete API </li>
        <li> Google Maps</li>
        <li>Twillio</li>
        <ol>
          <li>Programmable Chat </li>
          <li>SMS Messenging </li>
        </ol>
        <li> Azure </li>
        <ol>
          <li> App Hosting </li>
          <li> SQL DB</li>
          <li> Send Grid for Emailing</li>
        </ol>
      </ol>
	  
    </div>
  );
}
