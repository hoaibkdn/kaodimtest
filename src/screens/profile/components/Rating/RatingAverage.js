import React, { memo } from 'react'
import {
  Wrapper,
  Number,
  StarGroup,
  Star,
  Text
} from './styles/RatingAverageStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

import { isInt } from './../../../../helpers/number'
import { Colors } from './../../../../themes'

const RatingAverage = memo(props => {
  const { number, totalRatings } = props
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        stars.push(
          <Star key={i}>
            <FontAwesomeIcon icon={faStar} color={Colors.orange} />
          </Star>
        )
      } else if (isInt(number)) {
        stars.push(
          <Star key={i}>
            <FontAwesomeIcon icon={faStar} color={Colors.borderGray} />
          </Star>
        )
      } else {
        stars.push(
          <Star key={i}>
            <FontAwesomeIcon icon={faStarHalfAlt} color={Colors.orange} />
          </Star>
        )
      }
    }
    return stars
  }
  return (
    <Wrapper>
      <Number>{number}</Number>
      <StarGroup>
        {renderStars()}
      </StarGroup>
      <Text>{totalRatings} ratings</Text>
    </Wrapper>
  )
})

export default RatingAverage
