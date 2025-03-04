
import './css/App.css'
import React from 'react'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import Favourites from './pages/Favourites'
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
      </Routes>

    </main>
    </MovieProvider>
  )
}


export default App
