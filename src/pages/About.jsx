import React from 'react';
import '../css/About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About CineVerse</h1>
      
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          CineVerse is designed to help movie enthusiasts discover, explore, and organize their 
          favorite films. Our platform provides an intuitive interface to search for movies,
          view detailed information, and save your favorites for future reference.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Current Features</h2>
        <ul className="features-list">
          <li>
            <span className="feature-name">Movie Discovery:</span> 
            Browse popular movies or search for specific titles
          </li>
          <li>
            <span className="feature-name">Detailed Information:</span> 
            View comprehensive details about movies including cast, trailers, and similar recommendations
          </li>
          <li>
            <span className="feature-name">Favorites Collection:</span> 
            Save your favorite movies to a personal collection for easy access
          </li>
          <li>
            <span className="feature-name">Responsive Design:</span> 
            Enjoy a seamless experience across all devices
          </li>
        </ul>
      </section>
      
      <section className="about-section">
        <h2>Future Plans</h2>
        <p>We're constantly working to improve CineVerse. Here's what we're planning to add:</p>
        <ul className="features-list">
          <li>User accounts and profiles</li>
          <li>Movie ratings and reviews</li>
          <li>Advanced filtering by genres, years, and ratings</li>
          <li>TV show information and tracking</li>
          <li>Watchlist functionality for planning your viewing</li>
          <li>Personalized recommendations based on your preferences</li>
        </ul>
      </section>
      
      <section className="about-section attribution">
        <h2>Data Attribution</h2>
        <p>
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
        <div className="tmdb-attribution">
          <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
              alt="TMDB Logo" 
              className="tmdb-logo" 
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;