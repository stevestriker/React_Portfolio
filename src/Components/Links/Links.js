import React from "react";
import "./Links.css";
import LinksItem from "./LinksItem";

function Links() {
  return (
    <div className="links">
      <h1 className='links-title'>Adventures in Linux</h1>
      <div className="links__container">
        <div className="links__wrapper">
          <ul className="links__items">
            <LinksItem
              src="https://img.wonderhowto.com/img/64/52/63745625742011/0/perform-keystroke-injection-attacks-over-wi-fi-with-your-smartphone.1280x600.jpg"
              text="Perform keystroke injection attacks with your smartphone"
              label="Rubber Ducky"
              path="/RubberDucky"
            />
            <LinksItem
              src="https://img.wonderhowto.com/img/35/89/63681201940198/0/automate-wi-fi-hacking-with-wifite2.1280x600.jpg"
              text="Automate Wi-Fi hacking with Wifite2"
              label="Wifite2"
              path="/Wifite"
              />
          </ul>
          <ul className="links__items">
            <LinksItem
              src="https://img.wonderhowto.com/img/67/05/63681214493034/0/intercept-images-from-security-camera-using-wireshark.1280x600.jpg"
              text="Intercept images from a security camera using Wireshark"
              label="Intercepting CCTV Traffic"
              path="/CCTV"
            />
            <LinksItem
              src="https://img.wonderhowto.com/img/33/51/63658241268910/0/hack-wi-fi-stealing-wi-fi-passwords-with-evil-twin-attack.1280x600.jpg"
              text="Grabbing Wi-Fi passwords with an Evil Twin attack"
              label="Wi-Fi Passwords"
              path="/EvilTwin"
            />
            <LinksItem
              src="https://img.wonderhowto.com/img/76/63/63700458867768/0/hunt-down-wi-fi-devices-with-directional-antenna.1280x600.jpg"
              text="Hunt down Wi-Fi devices with a directional antenna"
              label="RF Detecting"
              path="/DirectionalDetection"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Links;
