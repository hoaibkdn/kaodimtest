import React, { memo } from 'react'
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

export default ReviewItem
