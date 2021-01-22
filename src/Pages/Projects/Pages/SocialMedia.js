import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider"

//holds information regarding my social media app
export default function SocialMedia(props) {
  return (
    <div>


      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Non technical information:
      </Typography>

      <p>
        1) You are able to like/edit/add/delete/share posts, edit/add/delete
        comments, and attach images and videos to the posts. Lastly, you will
        receive notifications of people following you.
      </p>
      <p>
        2) Upload your profile and banner photos. Edit account information, and
        view some quick profile statistics on your account like the number of
        posts you liked, number of followers, and the number of people you are
        following.
      </p>
      <p>
        3) View a list of suggested people to follow, follow people, view
        followers and following and view other peoples profiles/information.
      </p>
      <p>
        4) Search post content and other users. This web app is mobile
        optimized.
      </p>

      <p>
        5) Speech to text is now supported (only on Google Chrome). When you add
        a post/comment, you can now talk out your new post/comment.
      </p>

      <p>
        6) Meessage your followers though the messenger app. You can send
        messages, add attachments and emojis. If you are following a person and
        they follow you, you can message them. You can all search though the
        list of coversations you had, and compose new messages.
      </p>
	  <Divider />
	          <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technical information:
      </Typography>

      <p>
        1) It has a React JS front end, an ASP.Net API for the back-end and it
        is connected to a SQL database hosted in Azure. Currently, it features
        various aspects from the Material UI Framework.
      </p>

      <p>2) It stores the image and videos to Azure Blob storage.</p>

      <p>
        3) Also, it uses Auth0 for authentication as a service. Auth0 helps me
        handle the complexity of authentication and authorization for my social
        media app. It helps me determine who is a valid user and who can access
        restricted parts of the website.
      </p>

      <p>
        4) Using Azure computer vision, I am able to upload photos and have them
        automaticly be tagged in the posts.
      </p>

      <p>
        5) Now you are able to video chat and call other over VOIP through the
        app. You need to be following the desired call participant and they need
        to be following you. Twillio server less functions are handling the back
        end logistics of VOIP calling when responding to TwiML.
      </p>
	  <Divider /> 

      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Technology Stack
      </Typography>
      <ol>
        <li>React JS (Material UI)</li>
        <li>ASP .Net Core API (Drapper ORM)</li>
        <li>Microsoft SQL Server</li>
        <li>Auth0 for authenication</li>
        <li>Twillio</li>
        <ol>
          <li>Voice Api </li>
          <li>Programmable Chat </li>
          <li>Video </li>
        </ol>
        <li> Azure </li>
        <ol>
          <li>Azure Blob Storage </li>
          <li>Azure computer vision </li>
          <li> SQL DB</li>
        </ol>
      </ol>
	  
    </div>
  );
}
