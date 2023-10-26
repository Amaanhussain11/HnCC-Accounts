import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import OverviewAndSteps from "./OverviewAndSteps";
import FooterHero from "./FooterHero";
import Alumni from "./Alumni";
import Footer from "./Footer";

const Combined = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <OverviewAndSteps />
      <Alumni />
      <FooterHero />
      <Footer />
    </>
  );
};

export default Combined;
