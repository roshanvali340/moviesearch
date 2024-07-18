import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList query={query} />
    </div>
  );
};

export default App;
