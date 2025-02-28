import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "Shawshank Redemption", release_date: 1994 },
    { id: 2, title: "The Godfather", release_date: 1972 },
    { id: 3, title: "The Dark Knight", release_date: 2008 },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
            movie.title.toLowerCase().startsWith(searchQuery) && (
          <MovieCard key={movie.id} movie={movie} />
        )))}
      </div>
    </div>
  );
}

export default Home;
