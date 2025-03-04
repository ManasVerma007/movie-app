import './css/App.css'
import React from 'react'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import Favourites from './pages/Favourites'
import MovieDetails from './pages/MovieDetails'
import About from './pages/About'
import NavBar from './components/Navbar'
import { MovieProvider } from './contexts/MovieContexts'

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App