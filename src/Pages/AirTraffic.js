import React from "react";
import { Link } from "react-router-dom";
import "../AirTraffic.css";

const AirTraffic = () => {
  return (
    <div className='main'>
      <div className='air-container'>
        <h1 className='title'> Air Traffic Control</h1>
        <h3 className='temp-notice'>
          Sometimes it's nice to have background noise going while working.
        </h3>
        <section className='cities-list-container'>
          <h3 className='city-items'>
            Tokyo [HND]{" "}
            <audio
              src='https://s1-bos.liveatc.net/rjtt_app_dep?nocache=2021071412095125605'
              controls
              autoplay
            />
          </h3>

          <h3 className='city-items'>
            {" "}
            Moscow [SVO]{" "}
            <audio
              src='https://s1-fmt2.liveatc.net/uuee3?nocache=2021071412370832544'
              controls
              autoplay
            />
          </h3>
          <h3 className='city-items'>
            {" "}
            Mexico City [MEX]
            <audio
              src='https://s1-bos.liveatc.net/mmmx2?nocache=2021031715012718408'
              controls
              autoplay
            />
          </h3>
          <h3 className='city-items'>
            {" "}
            Dublin [DUB]
            <audio
              src='https://s1-bos.liveatc.net/eidw3?nocache=2021071412542961801'
              controls
              autoplay
            />
          </h3>
          <h3 className='city-items'>
            {" "}
            Paris [CDG]
            <audio
              src='https://s1-fmt2.liveatc.net/lfpg3_dep?nocache=2021071413112233601'
              controls
              autoplay
            />
          </h3>
        </section>
      </div>
    </div>
  );
};

export default AirTraffic;
