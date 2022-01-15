import React from 'react'

interface ButtonProps {
  mobileFontSize?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, mobileFontSize }) => {
  return(
    <button className={`px-5 py-2 ${mobileFontSize ? 'text-xl' : null} font-semibold flex justify-center items-center bg-violet rounded-lg border-violet border-2 text-white hover:text-violet hover:bg-white transition-colors duration-500`}>
      <a href='/register'>{children}</a>
    </button>
  )
}