import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext); // Custom hook to use the MovieContext in functional components

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.log("Initial load - checking localStorage");
    const storedFavs = localStorage.getItem("favorites");
    console.log("Found in localStorage:", storedFavs);

    if (storedFavs) {
      try {
        const parsed = JSON.parse(storedFavs);
        console.log("Parsed favorites:", parsed);
        setFavorites(parsed);
      } catch (e) {
        console.error("Error parsing favorites from localStorage:", e);
      }
    }
  }, []);

  useEffect(() => {
    try {
      console.log("Saving to localStorage:", favorites);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      const saved = localStorage.getItem("favorites");
      console.log("Verification - saved in localStorage:", saved);
    } catch (e) {
      console.error("Error saving favorites to localStorage:", e);
    }
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
