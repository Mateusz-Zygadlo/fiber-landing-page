import React from 'react'
import {  
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { 
  Home,
  SignUp 
} from './pages'

export const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}