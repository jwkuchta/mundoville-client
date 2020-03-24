import React from 'react'
import Img from 'react-image'

import { housePlaceholder } from 'assets'
import { Loader } from './components/Loader'

function Image(props) {
  const { alt, image } = props
  return (
    <Img alt={alt} src={image ? image : housePlaceholder} loader={<Loader />} />
  )
}

export default Image