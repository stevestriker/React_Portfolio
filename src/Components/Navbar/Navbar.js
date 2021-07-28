import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiSaberAndPistol } from "react-icons/gi";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            STRIKER <GiSaberAndPistol />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/API' className='nav-links' onClick={closeMobileMenu}>
                RESTful APIs
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/LandingPages'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Landing Pages
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/AirTraffic'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Listen to AirTraffic
              </Link>
            </li>
          </ul>
          <Link to='/AirTraffic'>
            {button && (
              <button className='navbar-btn'>
                <i class='fas fa-headset' /> AirTraffic{" "}
                <i class='fas fa-fighter-jet' />
              </button>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
