import React from "react";
import { Link } from "react-router-dom";
import "../API.css";
import BB from "../Images/BreakingBad.jpg";
import Coin from "../Images/Bitcoin.png";
import T2 from "../Images/Terminator.jpg";
import Nasa from "../Images/Stars-api.jpg";
//import { Parallax } from "react-parallax";
//import backGround from "../../images/API-back.png";

function API() {
  return (
    <>
      <section className='card'>
        <div className='content'>
          <h2>
            Breaking Bad <span>Character Search</span>
          </h2>
          <div className='plot'>
            <img className='api-img' src={BB} alt='' />
            <p>
              Webpage that diplays all characters from the show. Gives simple
              details, D-O-B, name, living status. Uses Axios to make an API
              promise-based request.
            </p>
          </div>
          <Link to='/BreakingBad'>
            <button className='close'>View Project</button>
          </Link>
        </div>
        {/* end offirst section*/}
        <div className='content'>
          <h2>
            Crypto Currency <span> Tracker</span>
          </h2>
          <div className='plot'>
            <img className='api-img' src={Coin} alt='' />
            <p>
              Displays a large list of different crypto currencies. Gives
              several key values in realtime. An Axios API request to Coin
              Gecko.
            </p>
          </div>
          <Link to='/CryptoCoinSearch'>
            <button className='close'>View Project</button>
          </Link>
        </div>
        {/* end of second section*/}
        <div className='content'>
          <h2>
            Movie Search <span>Query a database for any movie</span>
          </h2>
          <div className='plot'>
            <img className='api-img' src={T2} alt='' />
            <p>
              Uses a search field to query an extensive db to display movies
              matching the search term. A popup displays several attributes
              about the movie.
            </p>
          </div>
          <Link to='/MovieSearch'>
            <button className='close'>View Project</button>
          </Link>
        </div>
        {/* end of third section*/}
        <div className='content'>
          <h2>
            Picture of the Day <span>Its Science</span>
          </h2>
          <div className='plot'>
            <img className='api-img' src={Nasa} alt='' />
            <p>
              Nasa puts out a "Picture of the Day" and also has an API that can
              call to it and its library. Cool stuff.
            </p>
          </div>
          <Link to='/NasaPhoto'>
            <button className='close'>View Project</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default API;
