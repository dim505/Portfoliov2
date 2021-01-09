import React from "react";
import IntroductionSection from "./IntroductionSection";
import FullCollection from "./FullCollection";
import FeaturedCollection from "./FeaturedCollection";
import ContactSection from "./ContactSection";
import Specialties from "./Specialties";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";

export default function HomePage() {
  return (
    <>
      <Fade>
        <IntroductionSection />
      </Fade>
      <Pulse>
        <Specialties />
        <FeaturedCollection />
        <FullCollection />
      </Pulse>
      <ContactSection />
    </>
  );
}
