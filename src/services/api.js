const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://your-deployed-server.com";

// Array of CORS proxies to try in order
const CORS_PROXIES = [
  "https://corsproxy.org/?",
  "https://cors.bridged.cc/",
  "https://api.allorigins.win/raw?url="
];

let currentProxyIndex = 0;

// Helper function to build API URLs with CORS proxy fallback
const buildUrl = (endpoint) => {
  const baseUrl = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
  const fullUrl = `${baseUrl}${endpoint}`;
  
  // If HTTP and the app is served over HTTPS, use the proxy
  if (fullUrl.startsWith('http://') && window.location.protocol === 'https:') {
    const proxy = CORS_PROXIES[currentProxyIndex];
    return `${proxy}${encodeURIComponent(fullUrl)}`;
  }
  
  return fullUrl;
};

// Fetch with better error handling and caching
const fetchWithCache = async (url, retryCount = 0) => {
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
    
    // Get response as text first to check for valid JSON
    const text = await response.text();
    let data;
    
    try {
      data = JSON.parse(text);
    } catch (parseError) {
      console.error("Invalid JSON response:", parseError);
      
      // If this is a CORS proxy issue, try the next proxy
      if (url.includes(CORS_PROXIES[currentProxyIndex]) && retryCount < CORS_PROXIES.length) {
        console.log(`Trying next CORS proxy (${retryCount + 1}/${CORS_PROXIES.length})...`);
        currentProxyIndex = (currentProxyIndex + 1) % CORS_PROXIES.length;
        
        // Rebuild the URL with the new proxy
        const originalUrl = decodeURIComponent(url.split(CORS_PROXIES[currentProxyIndex - 1])[1]);
        const newUrl = `${CORS_PROXIES[currentProxyIndex]}${encodeURIComponent(originalUrl)}`;
        
        return fetchWithCache(newUrl, retryCount + 1);
      }
      
      throw parseError;
    }
    
    // Save to cache
    cache[cacheKey] = {
      timestamp: now,
      data
    };
    
    return data;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    
    // If this is a CORS proxy issue, try the next proxy
    if (url.includes(CORS_PROXIES[currentProxyIndex]) && retryCount < CORS_PROXIES.length) {
      console.log(`Trying next CORS proxy (${retryCount + 1}/${CORS_PROXIES.length})...`);
      currentProxyIndex = (currentProxyIndex + 1) % CORS_PROXIES.length;
      
      // Try to extract the original URL from the CORS proxy URL
      let originalUrl;
      try {
        originalUrl = decodeURIComponent(url.split(CORS_PROXIES[currentProxyIndex - 1])[1]);
      } catch {
        // If we can't extract it, use the endpoint directly
        const baseUrl = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
        const endpointMatch = url.match(/\/api\/movies\/.*$/);
        originalUrl = endpointMatch ? `${baseUrl}${endpointMatch[0]}` : url;
      }
      
      const newUrl = `${CORS_PROXIES[currentProxyIndex]}${encodeURIComponent(originalUrl)}`;
      return fetchWithCache(newUrl, retryCount + 1);
    }
    
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