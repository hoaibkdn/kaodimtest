import React, { memo } from 'react'
import PropTypes from 'prop-types'
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

RelatedServiceItem.propTypes = {
  title: PropTypes.string,
  photo: PropTypes.string,
  text: PropTypes.string
}

RelatedServiceItem.defaultProps = {
  title: '',
  photo: '',
  type: ''
}

export default RelatedServiceItem
