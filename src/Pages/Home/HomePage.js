import React from "react";
import IntroductionSection from "./IntroductionSection";
import FullCollection from "../SharedPages/FullCollection/FullCollection";
import FeaturedCollection from "./FeatureProject/FeaturedCollection";
import ContactSection from "../SharedPages/Contact/ContactSection";
import Specialties from "./Specialties/Specialties";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import "./home.css"

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
