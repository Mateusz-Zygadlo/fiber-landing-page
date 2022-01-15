import React from 'react'
import { WHY_CONTENT } from '../../content'
import { Button } from '../Button'

export const Why = () => {
  const { why_p, h1, reasons, under_reasons, reviews } = WHY_CONTENT
  
  return (
    <div className="py-10 px-5 md:px-16 lg:px-24">
      <p className="text-violet font-bold">{why_p}</p>
      <h1 className="text-3xl lg:text-4xl font-extrabold w-full max-w-xl">{h1}</h1>
      <div className="mt-10 reasons-grid gap-4">
        {reasons.map((reason, index: number) => (
          <div 
            key={index}
            className="mb-5"
          >
            <img 
              src={reason.icon}
              alt="icon"
              className="h-10"
            />
            <h2 className="font-bold my-1">{reason.h2}</h2>
            <p className="text-gray-600">{reason.p}</p>
          </div>
        ))}
      </div>
      <div className="w-full bg-violet text-white flex flex-col md:flex-row justify-center md:justify-between items-center px-10 pt-10 mt-10 rounded-lg">
        <div className="w-full md:max-w-[30rem] md:mr-10 pb-10">
          <h1 className="text-3xl lg:text-4xl font-bold">{under_reasons.h1}</h1>
          <p className="mt-2 my-5 text-gray-300">{under_reasons.p}</p>
          <Button reverseColor wSmFull>{under_reasons.button_text}</Button>
        </div>
        <div>
          <img 
            src={under_reasons.main_img}
            alt="preview page"
            className="w-full max-w-[50rem]"
          />
        </div>
      </div>
      <div className="mt-10 reviews-grid gap-4">
        {reviews.map((review, index: number) => (
          <div 
            key={index}
            className="border-2 p-3 mb-5"
          >
            <div className="flex mb-3">
              <img 
                src={review.img}
                alt="user profile"
              />
              <div className="ml-3 flex flex-col justify-center">
                <h1 className="text-violet font-semibold">{review.fullName}</h1>
                <p className="text-gray-600 -mt-1">{review.revenue}</p>
              </div>
            </div>
            <p className="text-gray-800 mb-5">{review.p}</p>
            <Button wFull>{review.button_text}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
