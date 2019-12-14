import React, { memo } from 'react'
import PropTypes from 'prop-types'
import VerticalText from './../VertialText'
import { Images } from './../../../../themes'
import { Wrapper, Image } from './styles/ComplimentItemStyled'

const ComplimentItem = memo(props => {
  const { title, text, photo } = props
  return (
    <Wrapper>
      <Image src={photo || Images.yingKengNg} alt="yingKengNg" />
      <VerticalText
        title={title}
        text={text}
      />
    </Wrapper>
  )
})

ComplimentItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  photo: PropTypes.string
}

ComplimentItem.defaultProps = {
  title: '',
  text: '',
  photo: ''
}

export default ComplimentItem
