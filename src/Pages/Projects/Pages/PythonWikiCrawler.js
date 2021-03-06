import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
//holds information about my python crawler script
export default function PythonWikiCrawler(props) {
  return (
    <div id="PythonWikiCrawler">
      <p>
        <a
          href="https://www.huffpost.com/entry/wikipedia-philosophy_n_1093460"
          target="_blank"
        >
          {" "}
          Legend has it that{" "}
        </a>{" "}
        95% of all pages are linked to the{" "}
        <a href="https://en.wikipedia.org/wiki/Philosophy"
        target="_blank"
        >
          wikipedia Philosophy Page
        </a>
        . If you click on the first link of a wikipedia page it will lead to an
        ever broadening subject and reaching general subjects like Mathematics,
        Science, Language, and Philosophy.
      </p>

      <p>
        I made a Python script to test that!
        </p> 

        <ol>
                  <li>   It accepts start and end links.  </li> 
                  <li>         It
        would try to get to the destination link starting from the starting
        link.</li>

        <li>  From there, it will traverse various pages by following the theory
        of extracting the first non-parenthesized, non-italicized link that does
        not have any external links or links to the current page. </li>

        <li>It will also
        show you the path it takes trying to get to the destination page
  </li>

        </ol>
        

      

      <p>
        If you would like to test my theory,{" "}
        <a href="https://www.xefer.com/wikipedia" target="_blank">
          {" "}
          please visit here{" "}
        </a>{" "}
        to confirm my findings.
      </p>

      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Here are an animation showing my application:
      </Typography>

      <div id="iframeContainer">
        <iframe
          id="youtube"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/rXGZ4QRBmpg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
