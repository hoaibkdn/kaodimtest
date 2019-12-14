import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  Image,
  StarGroup,
  Star,
  Name,
  Time,
  Text,
  Content,
  GroupInfo
} from './styles/ReviewItemStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { Colors, Images } from './../../../../themes'

const ReviewItem = memo(props => {
  const { totalRating, name, time, text, photo, isLastItem } = props
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < totalRating; i++) {
      stars.push(
        <Star key={`star${i}`}>
          <FontAwesomeIcon size="xs" icon={faStar} color={Colors.orange} />
        </Star>
      )
    }
    return stars
  }
  return (
    <Wrapper isLastItem={isLastItem}>
      <div>
        <Image src={photo || Images.shellaStephanie} alt="reviews" />
      </div>
      <Content>
        <GroupInfo>
          <StarGroup>{renderStars()}</StarGroup>
          <Name>{name}</Name>
          <Time>{time}</Time>
        </GroupInfo>
        <Text>{text}</Text>
      </Content>
    </Wrapper>
  )
})

ReviewItem.propTypes = {
  totalRating: PropTypes.number,
  time: PropTypes.string, 
  text: PropTypes.string, 
  photo: PropTypes.string, 
  isLastItem: PropTypes.bool,
  name: PropTypes.string
}

ReviewItem.defaultProps = {
  totalRating: 0,
  time: '', 
  text: '', 
  photo: '', 
  isLastItem: false,
  name: ''
}

export default ReviewItem
