import React , { useState } from 'react'
import { useWindowSize } from '../hooks'
import { TABLET_SIZE } from '../constants'
import { Button } from './Button'
import { Images } from '../assets'

interface NavbarProps {
  login?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ login }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { width } = useWindowSize()

  return (
    <div className="sticky -top-1 px-5 md:px-16 lg:px-24 py-4 bg-beige z-50">
      <div className="flex items-center justify-between relative">
        <h1 className="text-2xl font-extrabold">Fiber</h1>
        <>
          {login ? null : (
            <>
              {width > TABLET_SIZE ? (
                <>
                  <ul className="flex items-center text-gray-800">
                    <li className="text-xl mx-3 cursor-pointer border-b hover:border-black transition-colors duration-300">Community</li>
                    <li className="text-xl mx-3 cursor-pointer border-b hover:border-black transition-colors duration-300">Pricing</li>
                    <li className="text-xl mx-3 cursor-pointer border-b hover:border-black transition-colors duration-300">Features</li>
                  </ul>
                  <div className="flex items-center">
                    <a href="/register" className="mr-5 text-xl font-extrabold">Sign In</a>
                    <Button>Sign Up</Button>
                  </div>
                </>
              ) : isOpen ? (
                <div className="flex flex-col items-center absolute top-0 -right-1 w-full py-10 px-10 bg-white border-2 border-black z-50">
                  <img 
                    src={Images.Close}
                    alt="close"
                    className="scale-150 absolute top-2 right-2"
                    onClick={() => setIsOpen(false)}
                  />
                  <ul className="w-full flex flex-col items-center text-gray-800 pb-5 border-b-2">
                    <li className="text-4xl sm:text-5xl my-3 cursor-pointer border-b hover:border-black transition-colors duration-300" onClick={() => setIsOpen(false)}>Community</li>
                    <li className="text-4xl sm:text-5xl my-3 cursor-pointer border-b hover:border-black transition-colors duration-300" onClick={() => setIsOpen(false)}>Pricing</li>
                    <li className="text-4xl sm:text-5xl my-3 cursor-pointer border-b hover:border-black transition-colors duration-300" onClick={() => setIsOpen(false)}>Features</li>
                  </ul>
                  <div className="flex flex-col items-center mt-5">
                    <a href="/login" className="text-4xl font-extrabold mb-5">Sign In</a>
                    <Button mobileFontSize>Sign Up</Button>
                  </div>
                </div>
              ) : (
                <img 
                  src={Images.HamburgerMenu}
                  alt="Hamburger menu"
                  onClick={() => setIsOpen(true)}
                />
              )}
            </>
          )}
        </>
      </div>
    </div>
  )
}