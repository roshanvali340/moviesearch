import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetch(`https://openlibrary.org/search.json?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.docs);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch movies");
        setLoading(false);
      });
  }, [query]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.key}
          title={movie.title}
          author={movie.author_name ? movie.author_name.join(", ") : "Unknown"}
          publishDate={movie.first_publish_year}
        />
      ))}
    </div>
  );
};

export default MovieList;
