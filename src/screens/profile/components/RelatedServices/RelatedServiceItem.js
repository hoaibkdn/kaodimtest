import React, { memo } from 'react'
import VerticalText from './../VertialText'
import { Images } from './../../../../themes'
import { Wrapper, Image } from './styles/RelatedServiceItemStyled'

const RelatedServiceItem = memo(props => {
  const { title, text, photo } = props
  return (
    <Wrapper>
      <Image src={photo || Images.yingKengNg} alt="services" />
      <VerticalText
        title={title}
        text={text}
      />
    </Wrapper>
  )
})

export default RelatedServiceItem
