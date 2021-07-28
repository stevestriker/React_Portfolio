import React from "react";
import HeroComponent from "../Components/Hero/HeroComponent.js";
import Links from "../Components/Links/Links.js";
import Footer from '../Components/Footer/Footer.js'
import "../App.css";



function Home() {
  return (
    <>
      <HeroComponent />
      <Links />
      <Footer />
    </>
  );
}

export default Home;
