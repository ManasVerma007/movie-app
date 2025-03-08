import React from "react";
import "../css/About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About CineVerse</h1>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          CineVerse is designed to help movie enthusiasts discover, explore, and
          organize their favorite films. Our platform provides an intuitive
          interface to search for movies, view detailed information, and save
          your favorites for future reference.
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
            View comprehensive details about movies including cast, trailers,
            and similar recommendations
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
        <p>
          We're constantly working to improve CineVerse. Here's what we're
          planning to add:
        </p>
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
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
        <div className="tmdb-attribution">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="TMDB Logo"
              className="tmdb-logo"
            />
          </a>
        </div>
      </section>

      <section className="about-section">
        <h2>Meet the Creator</h2>
        <p>
          CineVerse was developed by Manas Verma. Feel free to connect with me
          on professional platforms or check out my other projects.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/ManasVerma007/movie-app"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/manasverhttps://www.linkedin.com/in/manas-verma-0000ba227/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
