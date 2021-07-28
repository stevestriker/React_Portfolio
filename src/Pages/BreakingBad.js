import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Projects/BreakingBad/Components/UI/Header";
import "../Projects/BreakingBad/Breaking.css";
import CharacterGrid from "../Projects/BreakingBad/Components/Characters/CharacterGrid";
import Search from "../Projects/BreakingBad/Components/UI/Search";
import "../Projects/BreakingBad/Breaking.css";

const BreakingBad = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(query);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className='bb-panel'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default BreakingBad;
