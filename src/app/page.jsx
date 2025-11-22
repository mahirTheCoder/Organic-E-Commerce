import React from "react";
import Banner from "./Components/Banner";
import Hero from "./Components/Hero";
import Introducing from "./Components/Introducing";
import Clients from "./Components/Clients";
import Latest from "./Components/Latest";

const page = () => {
  return (
    <>
   <Banner/>
   <Hero/>
   <Introducing/>
   < Clients/>
   <Latest/>
    </>
  );
};

export default page;
