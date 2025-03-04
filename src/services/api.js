const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error; 
  }
};


export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    throw error;
  }
};

export const getMovieVideos = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movie videos:", error);
    throw error;
  }
};

export const getSimilarMovies = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching similar movies:", error);
    throw error;
  }
};