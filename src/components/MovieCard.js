import React, { useEffect, useState } from "react";

const MovieCard = ({ title, author, publishDate }) => {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message));
  }, []);

  return (
    <div className="movie-card">
      <img src={dogImage} alt="Random Dog" />
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{publishDate}</p>
    </div>
  );
};

export default MovieCard;
