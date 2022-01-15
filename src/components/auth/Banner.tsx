import React from 'react'
import { Images } from '../../assets'

export const Banner = () => {
  return (
    <div className="p-10 bg-violet w-full h-full flex flex-col items-center justify-center text-center text-white">
      <img 
        src={Images.SignUpImage}
        alt="sign up"
        className="w-full max-w-[30rem]"
      />
      <h1 className="text-3xl font-extrabold mt-5">Unparalleled Templates</h1>
      <p className="text-gray-300 w-2/3 mt-1">Crafted by a team of professional designers, our templates are eunparalleled in the market.</p>
      <div className="mt-3 flex">
        <div className="w-3 h-3 bg-white rounded-full mx-1"></div>
        <div className="w-3 h-3 bg-white rounded-full mx-1 opacity-60"></div>
        <div className="w-3 h-3 bg-white rounded-full mx-1 opacity-60"></div>
        <div className="w-3 h-3 bg-white rounded-full mx-1 opacity-60"></div>
      </div>
    </div>
  )
}
