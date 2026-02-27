import About from "@/homepage/About";
import About2 from "@/homepage/About2";
import Advantages from "@/homepage/Advantages";
import CTA from "@/homepage/CTA";
import FAQ from "@/homepage/FAQ";
import Hero from "@/homepage/Hero";
import HeroCrane from "@/homepage/Hero2";
import HeroSlider from "@/homepage/Hero3";
import OurClients from "@/homepage/OurClients";
import Projects from "@/homepage/Projects";
import Services from "@/homepage/Services";
import WhatWeOffer from "@/homepage/WhatWeOffer";
import WhoWeAre from "@/homepage/WhoWeAre";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSlider />
      <HeroCrane />
      <Hero />
      <WhoWeAre />
      <About />
      <About2/>
      <WhatWeOffer />
      <Services />
      <Advantages />
      <Projects />
      <OurClients />
      <FAQ />
      <CTA />
    </div>
  );
}
