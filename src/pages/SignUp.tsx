import React from 'react'
import { Navbar } from '../components'
import { Register } from '../components/auth'

export const SignUp = () => {
  return (
    <div className="w-full max-w-screen-2xl 2xl:mx-auto relative">
      <Navbar auth />
      <Register />
    </div>
  )
}
