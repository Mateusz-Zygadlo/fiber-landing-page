import { Images } from "./assets"

export const MAIN_CONTENT = {
  rating: {
    stars: [
      Images.Star,
      Images.Star,
      Images.Star,
      Images.Star,
      Images.Star
    ],
    p: 'Rated 4.8/5 (243 reviews)'
  },
  h1: 'Create your portfolio in minutes.',
  p: 'With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.',
  under_p: {
    button_text: 'Start Free Trial',
    a_text: 'View Examples'
  },
  benefits: [
    { 
      img: Images.Checkmark,
      p: 'No Credit Card Reguired'
    },
    {
      img: Images.Checkmark,
      p: '10 Free Templates'
    }
  ],
  main_img: Images.HeroIllustration
}

export const WHY_CONTENT = {
  why_p: 'Why Fiber?',
  h1: 'A good portfolio means good employability.',
  reasons: [
    {
      icon: Images.Time,
      h2: 'Build in minutes',
      p: 'With a selection of premade templates, you can build out a portfolio in less than 10 minutes.'
    },
    {
      icon: Images.Code,
      h2: 'Add custom CSS',
      p: 'Customize your personal portfolio even more with the ability to add your own custom CSS styles.'
    },
    {
      icon: Images.AllSizes,
      h2: 'Responsive',
      p: 'All Fiber templates are fully responsive to ensure the experience is seemless across all devices'
    }
  ],
  under_reasons: {
    h1: 'Diversify your portfolio.',
    p: 'Create an even more impressive portfolio by creating case studies for tour projects. Simply follow our step-by-step guide.',
    button_text: 'Start Free Trial',
    main_img: Images.PageImage
  },
  reviews: [
    {
      img: Images.UserAvatar,
      fullName: 'Sarah Andrews',
      revenue: '$100k in revenue',
      p: 'Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.',
      button_text: "View Sarah's Portfolio"
    },
    {
      img: Images.UserAvatar2,
      fullName: 'Mathew Higgins',
      revenue: '$20k in revenue',
      p: "I have been getting A LOT of leads ever since O used Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go!",
      button_text: "View Mathew's Portfolio"
    },
    {
      img: Images.UserAvatar32,
      fullName: 'Janice Dave',
      revenue: '$30k in revenue',
      p: "I only just started freelancing this year and I have already made more than I ever made in my full-time job. The templates are just so amazing.",
      button_text: "View Janice's Portfolio"
    }
  ]
}