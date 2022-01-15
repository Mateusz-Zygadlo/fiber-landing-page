import React from 'react'
import { 
  Navbar,
  Footer
} from '../components'
import {
  Main,
  Why
} from '../components/home'

export const Home = () => {
  return (
    <div className="w-full max-w-screen-2xl 2xl:mx-auto">
      <Navbar />
      <Main />
      <Why />
      <Footer />
    </div>
  )
}
