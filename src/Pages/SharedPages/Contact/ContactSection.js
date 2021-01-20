import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import React, { useEffect, useState, useContext } from "react";
import ContactModal from "./ContactModal";
import Fade from "react-reveal/Fade";


//this is the contact me footer thats included in several pages
export default function ContactSection() {
  const [OpnModal, SetOpnModal] = useState(false);

  const CloseModal = () => SetOpnModal(false);
  return (
   <Fade> 
    <div className="contact-section SectionPadding">
      <Typography variant="h5" gutterBottom>
        Feel Free to reach out
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Direct Email
      </Typography>

      <Button onClick={() => SetOpnModal(true)} variant="outlined">
        <MailOutlineIcon />
      </Button>
      <Typography variant="subtitle1" gutterBottom>
        Other Platforms
      </Typography>
      <a href="https://github.com/dim505" target="_blank" rel="noreferrer">
        <Button variant="outlined">
          <GitHubIcon />
        </Button>
      </a>

      <a
        href="https://www.linkedin.com/in/dmitriy-komerzan-4538a9b7"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="outlined">
          <LinkedInIcon />
        </Button>
      </a>

      <div className="SectionPadding" id="footer">
        <Typography variant="overline" display="block" gutterBottom>
          Built by Dmitriy K | 2021
        </Typography>
      </div>

      <ContactModal OpnModal={OpnModal} CloseModal={CloseModal} />
    </div>
    </Fade>
  );
}
