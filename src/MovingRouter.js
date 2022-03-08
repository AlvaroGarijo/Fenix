import React from 'react'
import { FreePageBar } from './FreePage/FreepageBar';
import NavBar from './components/HomePage/NavBar';
import LineaDeRuta from './components/AppRouter';
import { Footer } from './components/HomePage/Footer'

export const MovingRouter = () => {
  return (
    <div>
      <FreePageBar />
      <NavBar />
      <LineaDeRuta />
      <Footer />
    </div>
  )
}
