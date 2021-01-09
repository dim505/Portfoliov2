import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";

export default function AMS_LL(props) {
  return (
    <div>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Land Lord front end features:
      </Typography>

      <p>
        1) You can upload/edit/delete tenants, properties, receipts, news
        related to those properties, account information, and pictures.
      </p>
      <p>2) It is integrated with Auth0 for authentication.</p>
      <p>
        3) It auto suggests addresses when filling out or updating the property
        form using the HERE api.
      </p>
      <p>
        4) It also has automated task scheduling using Hangfire. Once a day it
        checks if there are any leases that are about to expire and it will send
        a text message via Twillo or an email via Azure.
      </p>
      <p>5) It has a dashboard for analytics.</p>
      <p>
        5A) At the top there are a series of quick facts. It outlines some quick
        statistics including: total number of tenants, total number of
        properties, total property taxes paid for the year, and total expenses
        for the year (Receipts).
      </p>
      <p>
        5B) In the second tier of windows, there are series of graphs that
        further analyze the data. The first graph analyzes your expenses
        occurred for each month, 2nd graph shows how many tenants you add each
        month, and the 3rd graph shows how many properties you add each year.
      </p>
      <p>
        5C) Lastly, the Google Maps at the bottom displays all your properties
        on the map. If you click on the marker it shows the street address.
      </p>

      <p>
        6) It also has a messenger page. It pulls all the tenants that where
        added and the Landlord can hold a conversation individually with each
        tenant without having to resort to email.
      </p>

      <p>
        {" "}
        ** Please note you need to be added as a tenant to a property if you
        want to log in as a tenant to see the relevant information **
      </p>
    </div>
  );
}
