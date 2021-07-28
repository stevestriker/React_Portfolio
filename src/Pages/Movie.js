import React, { useState } from "react";
import axios from "axios";
import "../Projects/MovieDB/index.css";
import Search from "../Projects/MovieDB/Components/Search";
import Results from "../Projects/MovieDB/Components/Results";
import Popup from "../Projects/MovieDB/Components/Popup.js";

function Movie() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const API_URL = "http://www.omdbapi.com/?apikey=dfe6d885";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(API_URL + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(API_URL + "&i=" + id).then(({ data }) => {
      console.log(id);
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className='App'>
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default Movie;
