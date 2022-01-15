import React, { useState } from 'react'
import { Button } from '../Button'
import { Images } from '../../assets'

export const Form = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(false)
  
  return (
    <form className="w-full max-w-[40rem] lg:max-w-[30rem] p-10 bg-white lg:mr-10">
      <h1 className="text-2xl font-bold">Create your Fiver Account</h1>
      <div className="my-5">
        <label htmlFor="name" className="font-bold">Your Name</label>
        <input 
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          className="block py-2 px-5 border-2 w-full rounded-md"
          required
        />
      </div>
      <div className="my-5">
        <label htmlFor="email" className="font-bold">E-mail</label>
        <input 
          type="email"
          name="email"
          id="email"
          placeholder="john@example.com"
          className="block py-2 px-5 border-2 w-full rounded-md"
          required
        />
      </div>
      <div className="my-5">
        <label htmlFor="password" className="font-bold">Password</label>
        <div className="flex relative">
          <input 
            type={hidePassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="At least 8 characters"
            className="block py-2 px-5 border-2 w-full rounded-md"
            minLength={8}
            required
          />
          <img 
            src={Images.HidePassword}
            alt="hide password"
            className="w-7 absolute right-5 top-2 cursor-pointer"
            onClick={() => setHidePassword(!hidePassword)}
          />
        </div>
      </div>
      <div className="mt-3 mb-5 flex">
        <input 
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="mt-1"
        />
        <label htmlFor="checkbox" className="ml-2">By creating an account on IndieBrew, you agree to the <span className="text-violet font-bold border-b border-violet hover:border-black hover:text-black transition-colors duration-300 cursor-pointer">Terms & Conditions</span></label>
      </div>
      <Button wFull>Create Fiber Account</Button>
      <a href='/' className="w-full flex justify-center mt-5">Already have an account? <span className='text-violet font-bold border-b border-violet hover:border-black hover:text-black transition-colors duration-300 cursor-pointer ml-2'>Sign In</span></a>
    </form>
  )
}
