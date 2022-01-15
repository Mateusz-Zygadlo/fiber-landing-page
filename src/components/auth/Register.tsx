import React from 'react'
import { useWindowSize } from '../../hooks' 
import { TABLET_SIZE } from '../../constants'
import { Form } from './Form'
import { Banner } from './Banner'

export const Register = () => {
  const { width } = useWindowSize()

  return (
    <div className="px-5 md:px-16 lg:px-24 flex justify-center lg:justify-between items-center lg:absolute lg:top-0 lg:left-0 py-5 lg:pt-20">
      <Form />
      {width > TABLET_SIZE ? (
        <Banner />
      ) : null}
    </div>
  )
}
