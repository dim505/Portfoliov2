import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider"
//holds information related to apartment management system tenant side
export default function AMS_TS(props) {
  return (
    <div>

      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Non Technical Information:
      </Typography>
      This contains a dashboard that will allow the users to do the following:
      <p>
        {" "}
        1) Pay their rent (This shows when rent is due and how much. It is
        dynamically calculated based on when the lease date expired and when the
        tenant is added to the system){" "}
      </p>
      <p>
        {" "}
        2) View payment history (This shows some quick facts of how much rent
        they paid each month and they can see each individual transaction that
        has occurred){" "}
      </p>
      <p>
        {" "}
        3) See news related to their apartment (Landlords can push out news
        related their apartments such as potential outages or planned upgrades)
      </p>
      <p>
        {" "}
        4) Edit their account information (They can enter their edit their name,
        phone number, and add a profile picture)
      </p>
      <p>
        {" "}
        5) Contact their land lord (That info. card contains the land lords
        name, email and phone number. When the user tries to contact the
        Landlord, it will send an email to the Land Lord and the Tenant and
        Landlord can continue with conversation over email.)
      </p>
      <p>
        6) Lastly, it contains a chat widget that enables you to talk to the
        land lord in real time. Its a chat application. It is located in the
        lower right hand of the page.
      </p>
            <Divider />
	        <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technical information:
      </Typography>
      <p>
        {" "}
        1) It has a React JS front end, an ASP.Net API for the back-end and it
        is connected to a SQL database hosted in Azure. Currently, it features
        various aspects from the Material UI Framework.
      </p>
      <p>
        2) This application is integrated with Stripe for payment processing and
        Auth0 for authentication. It uses the Twillo Chat API for the backend of
        the chat application.
      </p>
            <Divider/>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technology Stack
      </Typography>
      <ol>
        <li>React JS (Material UI)</li>
        <li>ASP .Net Core API (Drapper ORM)</li>
        <li>Microsoft SQL Server</li>
        <li>Auth0 for authenication</li>
        <li> Stripe for Payment Processing </li>
        <li>Twillio</li>
        <ol>
          <li>Programmable Chat </li>
        </ol>
        <li> Azure </li>
        <ol>
          <li> App Hosting </li>
          <li> SQL DB</li>
        </ol>
      </ol>
	  
    </div>
  );
}
