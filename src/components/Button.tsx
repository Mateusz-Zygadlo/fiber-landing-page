import React from 'react'

interface ButtonProps {
  mobileFontSize?: boolean;
  wSmFull?: boolean;
  reverseColor?: boolean;
  wFull?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, mobileFontSize, wSmFull, wFull, reverseColor }) => {
  return(
    <button className={`px-5 py-2 ${mobileFontSize ? 'text-xl' : null} ${wSmFull ? 'w-full sm:w-auto' : wFull ? 'w-full' : null} font-semibold flex justify-center items-center ${reverseColor ? 'bg-white border-white text-violet hover:text-white hover:bg-violet' : 'bg-violet border-violet text-white hover:text-violet hover:bg-white'} rounded-lg border-2 transition-colors duration-500`}>
      <a href='/register'>{children}</a>
    </button>
  )
}