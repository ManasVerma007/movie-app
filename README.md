# CineVerse Ultra - Your Movie Universe

A responsive React application for discovering, exploring, and organizing your favorite movies using The Movie Database (TMDB) API.

## ✨ Features

- **Movie Discovery**: Browse popular movies and search for titles
- **Detailed Information**: View movie synopsis, cast, trailers, and similar recommendations
- **Personal Collection**: Save and organize your favorite movies
- **Responsive Design**: Seamless experience across all devices

## 🛠️ Tech Stack

- **Frontend**: 
  - React (Hooks, Context API)
  - React Router
  - CSS3 (Custom styling)
  - Vite (Build Tool)
  - Vercel (Deployment)

- **Backend**:
  - Node.js
  - Express
  - AWS EC2 (Deployment)
  - HTTPS (via Let's Encrypt)

## 🏗️ Architecture

This application uses a distributed architecture to solve regional API access issues:

1. **Frontend** - React application deployed on Vercel with HTTPS enabled
2. **Backend Proxy** - Node.js server deployed on AWS EC2 (US-East Virginia) that:
   - Handles API calls to TMDB
   - Provides a consistent API regardless of client location
   - Uses HTTPS with Let's Encrypt certificates
   - Uses DuckDNS for domain management

### Why This Architecture?

TMDB API has access issues in certain regions including India, particularly on mobile networks. By deploying the backend in US-East (Virginia), we ensure consistent API access regardless of the end user's location or network type. This solves the "request timed out" errors that occur when calling TMDB directly from within these regions.

### CORS and HTTPS Configuration

To address Mixed Content security issues when connecting a HTTPS frontend (Vercel) to a backend server:

1. Created a free subdomain using DuckDNS
2. Set up Nginx as a reverse proxy on the EC2 instance
3. Implemented HTTPS using free Let's Encrypt SSL certificates
4. Configured automatic certificate renewal

This setup eliminates the need for unreliable CORS proxy services and provides a secure, direct connection between frontend and backend.

## 🚀 Deployment

- **Frontend**: Deployed on Vercel at [https://movie-app-lake-six.vercel.app](https://movie-app-lake-six.vercel.app)
- **Backend**: Deployed on AWS EC2 with HTTPS at [https://cineverse-ultra.duckdns.org](https://cineverse-ultra.duckdns.org)

## 🔮 Future Plans

- User accounts and profiles
- Advanced filtering by genres, years, and ratings
- TV show information
- Personalized recommendations

## 🙏 Acknowledgements

This product uses the TMDB API but is not endorsed or certified by TMDB.

<div align="center">
  <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB Logo" width="150"/>
</div>

## 📝 Technical Notes

### Regional API Access Solution
TMDB API has access limitations in certain regions (including India) when called directly from browsers, especially on mobile networks. Our architecture solves this by:

1. Routing all API requests through a US-based server
2. Maintaining a consistent connection regardless of client location
3. Implementing proper caching to reduce latency

### HTTPS Implementation
The mixed content issues (HTTP backend with HTTPS frontend) were solved by:

1. Using DuckDNS for a free subdomain
2. Setting up Nginx reverse proxy on EC2
3. Installing Let's Encrypt SSL certificates
4. Configuring automatic certificate renewal 

This approach provides secure end-to-end communication without relying on third-party CORS proxies.