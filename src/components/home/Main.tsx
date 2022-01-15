import React, {
  useState,
  useEffect,
} from 'react'
import { MAIN_CONTENT } from '../../content'
import { Button } from '../Button'
import { MOBILE_WIDTH } from '../../constants'
import { useWindowSize } from '../../hooks'

export const Main = () => {
  const { rating, h1, p, under_p, benefits, main_img } = MAIN_CONTENT
  const { width } = useWindowSize()

  return (
    <div className="bg-beige flex flex-col-reverse md:flex-row items-center justify-between pb-10 px-5 md:px-16 lg:px-24">
      <div className="w-full max-w-[40rem] md:pr-3 mt-10">
        {width > MOBILE_WIDTH ? (
          <div className="flex flex-col lg:flex-row mb-3">
            <div className="flex items-center mr-5">
              {rating.stars.map((star, index: number) => (
                <img 
                  key={index}
                  src={star} 
                  alt="star"
                  className="pr-1 h-5"
                />
              ))}
            </div>
            <p className="font-semibold mt-1 lg:mt-0">{rating.p}</p>
          </div>
        ) : null }
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold">{h1}</h1>
        <p className="text-md lg:text-lg text-gray-700 mt-3">{p}</p>
        <div className="my-5 flex flex-col sm:flex-row items-center">
          <Button wSmFull>{under_p.button_text}</Button>
          <a href='/' className="mt-2 ml-4 md:mt-0 md:ml-8 text-lg text-violet border-b-2 border-violet hover:border-black hover:text-black transition-colors duration-500">{under_p.a_text}</a>
        </div>
        <ul className="flex flex-col lg:flex-row">
          {benefits.map((item, index: number) => (
            <li 
              key={index}
              className="flex my-1 lg:my-0 lg:mx-2"
            >
              <img 
                src={item.img}
                alt="checkmark"
                className="w-6"
              />
              <p className="ml-3">{item.p}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img 
          src={main_img}
          alt="Hero Illustration"
          className="w-full max-w-[45rem]"
        />
      </div>
    </div>
  )
}