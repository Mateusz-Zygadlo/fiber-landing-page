import React from 'react'

export const Footer = () => {
  return (
    <div className="md:px-16 lg:px-24 px-5 pt-16 pb-5 flex flex-col md:flex-row justify-between bg-beige">
      <div className="w-full md:max-w-[20rem] mr-10 mb-5">
        <h1 className="font-bold text-lg">Fiber</h1>
        <p>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>
        <p className="mt-5">{`Made with ${'<3'} in the Netherlands.`}</p>
      </div>
      <div className="flex justify-around flex-wrap">
        <ul className="mx-5 mb-3">
          <li className="font-bold mb-2">Sitemap</li>
          <li>Homepage</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Features</li>
        </ul>
        <ul className="mx-5 mb-3">
          <li className="font-bold mb-2">Resources</li>
          <li>Support</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
        <ul className="mx-5 mb-3">
          <li className="font-bold mb-2">Company</li>
          <li>About</li>
          <li>Customers</li>
          <li>Blog</li>
        </ul>
        <ul className="mx-5 mb-3">
          <li className="font-bold mb-2">Portfolios</li>
          <li>Sarah Andrews</li>
          <li>Mathew Higgins</li>
          <li>Janice Dave</li>
        </ul>
      </div>
    </div>
  )
}
