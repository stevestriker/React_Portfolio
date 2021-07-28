import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./NasaPhoto.css";

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(0);
  const [query, setQuery] = useState(0);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=tiZU0gHwDXngQlrGd4me8BczqKWCdfugIU7CJ3Le`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div> Whoops </div>;

  return (
    <div className='nasa-container'>
      <div className='frenchy-link'>
        <Link to='/Frenchy'> CLICK FOR FRENCHY HEAVEN</Link>
      </div>

      <article className='nasa-header'>
        <h2>This photo taken by NASA is titled</h2>
        <p> {photoData.title} </p>
        <p>...Taken -{photoData.date}</p>
      </article>
      <div className='img-container'>
        <FaArrowCircleLeft className='icon' />
        <img className='nasa-photo' src={photoData.url} alt={photoData.title} />
        <FaArrowCircleRight className='icon' />
      </div>
      <p className='description'>{photoData.explanation}...</p>
    </div>
  );
};

export default NasaPhoto;
