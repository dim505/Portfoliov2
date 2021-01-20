import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider"

export default function webstore(props) {
  return (
    <div>

      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Non-Technical information:
      </Typography>
      <p> My webstore has the following features: </p>
      <p> 1) View items and add items to your cart </p>
      <p> 2) View your shopping cart and head to the checkout </p>
      <p>
        {" "}
        3) Insert all your Billing, Delivery and credit card information before
        you check out{" "}
      </p>
      <p>
        {" "}
        4) Check out and your payment information is sent to Stripe for billing
      </p>
      <p> 5) Create an account and log in </p>
      <p> 6) Once logged in, you can view your order history </p>
      <p>
        {" "}
        6) Once logged in, you can set your default account information. Once
        this is set, that information can be used to prepopulate the checkout
        forms with your default checkout information{" "}
      </p>
      <p>
        If you would like to do a simulated checkout, please use 4242 4242 4242
        4242 4242 42/42 424 as a test credit card in order to complete the
        checkout.
      </p>
      <p>
        {" "}
        *** If the application does not load after 10 seconds, please refresh
        the page *******{" "}
      </p>
	  <Divider />
	          <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technical information:
      </Typography>
 
      <p>
        1) It is integrated with Stripe which is a 3rd party payment processor.
        Stripe can take a customer's credit card information and bill it with
        the order total without ever needing to touch confidential credit card
        information.
      </p>
      <p>
        2) Also, it uses Auth0 for authentication as a service. Auth0 helps me
        handle the complexity of authentication and authorization for my
        webstore. It helps me determine who is a valid user and who can access
        restricted parts of the website.
      </p>
      3) It makes various API calls to my API controllers to update, delete and
      insert records into the database. 
      
      <ol>
          <li>In terms of the back end, it keeps track of the items in the shopping cart by having a Shopping Cart header table to keep track of information regarding the session.  </li>  
          <li>Each item is
      entered in as its own separate row in the Shopping Cart line items table.  </li>       
          <li>The session ID is stored in the browser. This is used to match the right
      user to the cart when the user checks out.  </li>

          <li> It collects information such as
      the name, email, billing information, delivery information and a token
      summarizing the credit card information.   </li>

          <li> The token information is sent to
      Stripe for billing and then again the back end pre-populates the order
      header table with the customer's information and the order line table with
      the item ordered. </li>
      </ol>  
      
      <p>
        5) In terms of authentication. 
        
        <ol> 
            <li>Auth0 uses JSON web tokens for the underlying mechanism to create access tokens.   </li>
            <li>          If the user does not
        provide a valid token in the header of the request, it will be denied
        access to the Order history page and Account details page even with the
        correct HTTP Post data. </li>
 
        <li>  Once a user logs in, he is able to view all
        orders he has placed under that account including the order date,
        billing/delivery information associated with the order and products tied
        to that order. </li>

        <li>  The logged-in user can view his account details
        page. Upon visiting this page, he can set his default information
        including his name and billing/delivery information. When he does checks
        out, that information can be pre-populated at check out if desired.</li>
        
        <li> This
        information will be stored in 3 tables.
        <ol>
         <li>One table includes the name,
        email and flag needed to determine if the information should be
        pre-populated at check out.</li>
            <li> The 2nd table contains the billing
        information. </li>
        <li>The 3rd table contains the delivery information.  </li>


           </ol>
        
          </li>
        
        </ol>

      </p>
	  
    <Divider />
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technology Stack
      </Typography>
      <ol>
        <li>React JS (Material UI, Bootstrap)</li>
        <li>ASP .Net Core API (Entity Framework)</li>
        <li>Microsoft SQL Server</li>
        <li>Auth0 for authenication</li>
        <li> Stripe for Payment Processing </li>

        <li> Azure </li>
        <ol>
          <li> App Hosting </li>
          <li> SQL DB</li>
        </ol>
      </ol>
    </div>
  );
}
