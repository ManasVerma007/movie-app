const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://your-deployed-server.com";
const PROXY_URL = "https://api.allorigins.win/raw?url=";

// Helper to build URLs
const buildUrl = (endpoint) => {
  const baseUrl = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
  
  // Always use the proxy for HTTP URLs
  if (baseUrl.startsWith('http://')) {
    return `${PROXY_URL}${encodeURIComponent(`${baseUrl}${endpoint}`)}`;
  }
  
  return `${baseUrl}${endpoint}`;
};

export const getPopularMovies = async () => {
  try {
    const url = buildUrl('/api/movies/popular');
    console.log('Fetching popular movies from:', url);
    
    const response = await fetch(url);
    
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
    const url = buildUrl(`/api/movies/search?query=${encodeURIComponent(query)}`);
    console.log('Searching movies from:', url);
    
    const response = await fetch(url);
    
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
    const url = buildUrl(`/api/movies/${movieId}`);
    console.log('Fetching movie details from:', url);
    
    const response = await fetch(url);
    
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
    const url = buildUrl(`/api/movies/${movieId}/credits`);
    console.log('Fetching movie credits from:', url);
    
    const response = await fetch(url);
    
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
    const url = buildUrl(`/api/movies/${movieId}/videos`);
    console.log('Fetching movie videos from:', url);
    
    const response = await fetch(url);
    
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
    const url = buildUrl(`/api/movies/${movieId}/similar`);
    console.log('Fetching similar movies from:', url);
    
    const response = await fetch(url);
    
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