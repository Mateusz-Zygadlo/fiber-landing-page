import React from 'react'
import { 
  Navbar,
  Main,
  Why,
  Footer
} from '../components'

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
