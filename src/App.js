import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home.js";
import API from "./Pages/API.js";
import Air from "./Pages/AirTraffic.js";
import BreakingBad from "./Pages/BreakingBad.js";
import Crypto from "./Pages/Crypto.js";
import Movie from "./Pages/Movie.js";
import NasaPhoto from "./Projects/Nasa/NasaPhoto";
import LandingPages from "./Pages/LandingPages";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          /*Internal Pages*/
          <Route path='/' exact component={Home} />
          <Route path='/API' component={API} />
          <Route path='/AirTraffic' component={Air} />
          <Route path='/BreakingBad' component={BreakingBad} />
          <Route path='/CryptoCoinSearch' component={Crypto} />
          <Route path='/MovieSearch' component={Movie} />
          <Route path='/NasaPhoto' component={NasaPhoto} />
          <Route path='/LandingPages' component={LandingPages} />
          /*Routes for ExternalLinks Section*/
          <Route
            path='/RubberDucky'
            component={() => {
              window.location.href =
                "https://null-byte.wonderhowto.com/how-to/load-use-keystroke-injection-payloads-usb-rubber-ducky-0176829/";
              return null;
            }}
          />
          <Route
            path='/Wifite'
            component={() => {
              window.location.href =
                "https://null-byte.wonderhowto.com/how-to/automate-wi-fi-hacking-with-wifite2-0191739/";
              return null;
            }}
          />
          <Route
            path='/CCTV'
            component={() => {
              window.location.href =
                "https://null-byte.wonderhowto.com/how-to/intercept-images-from-security-camera-using-wireshark-0191735/";
              return null;
            }}
          />
          <Route
            path='/EvilTwin'
            component={() => {
              window.location.href =
                "https://null-byte.wonderhowto.com/how-to/hack-wi-fi-stealing-wi-fi-passwords-with-evil-twin-attack-0183880/";
              return null;
            }}
          />
          <Route
            path='/DirectionalDetection'
            component={() => {
              window.location.href =
                "https://null-byte.wonderhowto.com/how-to/hunt-down-wi-fi-devices-with-directional-antenna-0202696/";
              return null;
            }}
          />
          /*End ExternalLinks section*/
        </Switch>
      </Router>
    </>
  );
}

export default App;
