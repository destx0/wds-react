import React from "react";
import { useEffect } from "react";
import "./App.css";
import searchIcon from "./Search.svg";

// eac00bba

const API_URL = "https://www.omdbapi.com?apikey=eac00bba";

export const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>movieLAnd</h1>
      <div className="class">
        <input
          placeholder="Search For Movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src="{searchIcon}" alt="search"   />
      </div>
    </div>
  );
};
export default App;
