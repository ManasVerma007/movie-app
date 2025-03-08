const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://your-deployed-server.com";

// Use a reliable CORS proxy that doesn't require JSONP
const CORS_PROXY = "https://api.allorigins.win/raw?url=";

// Helper function to build API URLs
const buildUrl = (endpoint) => {
  const baseUrl = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
  const fullUrl = `${baseUrl}${endpoint}`;
  
  // If HTTP and the app is served over HTTPS, use the proxy
  if (fullUrl.startsWith('http://') && window.location.protocol === 'https:') {
    return `${CORS_PROXY}${encodeURIComponent(fullUrl)}`;
  }
  
  return fullUrl;
};

// Fetch with better error handling and caching
const fetchWithCache = async (url) => {
  // Simple in-memory cache
  const cache = fetchWithCache.cache || (fetchWithCache.cache = {});
  const cacheKey = url;
  
  // Check cache first (valid for 5 minutes)
  const cached = cache[cacheKey];
  const now = Date.now();
  if (cached && now - cached.timestamp < 5 * 60 * 1000) {
    console.log(`Using cached data for: ${url}`);
    return cached.data;
  }
  
  console.log(`Fetching from: ${url}`);
  
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Save to cache
    cache[cacheKey] = {
      timestamp: now,
      data
    };
    
    return data;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    throw error;
  }
};

export const getPopularMovies = async () => {
  try {
    console.log('Fetching popular movies...');
    const url = buildUrl('/api/movies/popular');
    const data = await fetchWithCache(url);
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    console.log(`Searching for movies: ${query}`);
    const url = buildUrl(`/api/movies/search?query=${encodeURIComponent(query)}`);
    const data = await fetchWithCache(url);
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error; 
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    console.log(`Fetching details for movie ${movieId}`);
    const url = buildUrl(`/api/movies/${movieId}`);
    return await fetchWithCache(url);
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    console.log(`Fetching credits for movie ${movieId}`);
    const url = buildUrl(`/api/movies/${movieId}/credits`);
    return await fetchWithCache(url);
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    throw error;
  }
};

export const getMovieVideos = async (movieId) => {
  try {
    console.log(`Fetching videos for movie ${movieId}`);
    const url = buildUrl(`/api/movies/${movieId}/videos`);
    const data = await fetchWithCache(url);
    return data.results;
  } catch (error) {
    console.error("Error fetching movie videos:", error);
    throw error;
  }
};

export const getSimilarMovies = async (movieId) => {
  try {
    console.log(`Fetching similar movies to ${movieId}`);
    const url = buildUrl(`/api/movies/${movieId}/similar`);
    const data = await fetchWithCache(url);
    return data.results;
  } catch (error) {
    console.error("Error fetching similar movies:", error);
    throw error;
  }
};