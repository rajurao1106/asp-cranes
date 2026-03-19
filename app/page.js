import About from "@/homepage/About";
import Advantages from "@/homepage/Advantages";
import CTA from "@/homepage/CTA";
import FAQ from "@/homepage/FAQ";
import Hero from "@/Backup/Hero";
import HeroCrane from "@/Backup/Hero2";
import HeroSlider from "@/homepage/Hero";
import OurClients from "@/homepage/Clients";
import Projects from "@/homepage/Projects";
import Services from "@/homepage/Services";
import OurProducts from "@/homepage/Products";
import WhoWeAre from "@/homepage/WhoWeAre";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSlider />
      <About />
      <WhoWeAre />
      <OurProducts />
      <Services />
      <Projects />
      <Advantages />
      <OurClients />
      <FAQ />
      <CTA />
    </div>
  );
}
