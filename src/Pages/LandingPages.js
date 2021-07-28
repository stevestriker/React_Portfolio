import React from "react";
import Frenchy from "../Images/frenchie-booting-up.gif";
import "../App.css";

const LandingPages = () => {
  return (
    <div className='lp-main-container'>
      <h1 className='title'>Under Construction</h1>
      <div className='lp-gif-container'>
        <img className='lp-frenchy-gif' src={Frenchy} alt='' />
      </div>
    </div>
  );
};

export default LandingPages;
