import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
export default function AMS_TS(props) {
  return (
    <div>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Tenant front end features:
      </Typography>

      <p>
        This contains a dashboard that will allow the users to do the following:
        <p>
          {" "}
          1) Pay their rent (This shows when rent is due and how much. It is
          dynamically calculated based on when the lease date expired and when
          the tenant is added to the system){" "}
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
          related their apartments such as potential outages or planned
          upgrades)
        </p>
        <p>
          {" "}
          4) Edit their account information (They can enter their edit their
          name, phone number, and add a profile picture)
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
        . This application is integrated with Stripe for payment processing and
        Auth0 for authentication. It uses the Twillo Chat API for the backend of
        the chat application.
      </p>
    </div>
  );
}
