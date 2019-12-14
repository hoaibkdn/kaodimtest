import React, { memo } from 'react'
import PercentBar from './PercentBar'
import RatingAverage from './RatingAverage'

const RatingGroup = memo(props => {
  const { percentageList, ratingAverageValue, totalRatings } = props
  const renderRating = () => {
    const bars = []
    for (let i = 5; i > 0; i--) {
      bars.push(<PercentBar key={i} percent={percentageList[i]} number={i} />)
    }
    return bars
  }
  return (
    <>
      <h3>{'Ratings & Reviews'}</h3>
      <div className="flex">
        <div className="w-100">
          {renderRating()}
        </div>
        <RatingAverage number={ratingAverageValue} totalRatings={totalRatings} />
      </div>
    </>
  )
})

export default RatingGroup
