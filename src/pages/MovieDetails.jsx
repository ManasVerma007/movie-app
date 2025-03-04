import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  getMovieDetails, 
  getMovieCredits, 
  getMovieVideos,
  getSimilarMovies
} from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [videos, setVideos] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      setLoading(true);
      try {
        const [movieData, creditsData, videosData, similarData] = await Promise.all([
          getMovieDetails(id),
          getMovieCredits(id),
          getMovieVideos(id),
          getSimilarMovies(id)
        ]);
        
        setMovie(movieData);
        setCredits(creditsData);
        setVideos(videosData);
        setSimilarMovies(similarData);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load movie details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading movie details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!movie) {
    return <div className="error-message">Movie not found</div>;
  }

  const trailer = videos.find(video => video.type === "Trailer" && video.site === "YouTube");

  return (
    <div className="movie-details-container">
      {/* Backdrop */}
      <div 
        className="backdrop" 
        style={{ 
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` 
        }}
      >
        <div className="backdrop-overlay">
          <div className="movie-details-content">
            <div className="poster-container">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster-large"
              />
            </div>
            <div className="movie-info-container">
              <h1>{movie.title} <span className="release-year">({movie.release_date?.split("-")[0]})</span></h1>
              
              <div className="movie-meta">
                <span className="rating">★ {movie.vote_average?.toFixed(1)}</span>
                <span className="runtime">{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
              </div>
              
              <div className="genres">
                {movie.genres?.map(genre => (
                  <span key={genre.id} className="genre-tag">{genre.name}</span>
                ))}
              </div>
              
              <div className="tagline">{movie.tagline}</div>
              
              <div className="overview-section">
                <h3>Overview</h3>
                <p className="overview">{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <section className="cast-section">
        <h2>Cast</h2>
        <div className="cast-list">
          {credits?.cast?.slice(0, 6).map(person => (
            <div key={person.id} className="cast-member">
              {person.profile_path ? (
                <img 
                  src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                  alt={person.name}
                />
              ) : (
                <div className="no-profile">
                  <span>{person.name.charAt(0)}</span>
                </div>
              )}
              <div className="cast-info">
                <span className="cast-name">{person.name}</span>
                <span className="cast-character">{person.character}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trailer Section */}
      {trailer && (
        <section className="trailer-section">
          <h2>Trailer</h2>
          <div className="trailer-container">
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* Similar Movies Section */}
      {similarMovies.length > 0 && (
        <section className="similar-movies-section">
          <h2>Similar Movies</h2>
          <div className="similar-movies-grid">
            {similarMovies.slice(0, 6).map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default MovieDetails;