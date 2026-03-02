import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import banner from "@/public/about/banner.jpg"
import Cranes from "./Cranes";
import AboutCranes from "./AboutCranes";
import Contact from "@/homepage/Contact";

export default function page() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbImage={banner}
        title="Our Cranes"
        breadcrumbLabel="Our Cranes"
        parentPages={[{ label: "Home", href: "/" }]}
      />
      <Cranes/>
      <AboutCranes/>
      <Contact/>
    </div>
  );
}
