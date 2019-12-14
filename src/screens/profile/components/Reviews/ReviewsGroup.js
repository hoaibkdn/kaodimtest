import React, { memo } from 'react'
import ReviewItem from './ReviewItem'
import Button from './../../../../common/Button'

const ReviewsGroup = memo(props => {
  const { reviewList } = props
  const renderReviews = () => {
    const numOfReviews = reviewList.length
    let i = 0
    let reviews = []
    while (i < numOfReviews) {
      reviews.push(<ReviewItem key={`reviews${i}`} {...reviewList[i]} isLastItem={i === numOfReviews - 1} />)
      i += 1
    }
    return reviews
  }
  return (
    <>
      <h3>Reviews</h3>
      {renderReviews()}
      <div className="m-t-10">
        <Button
          title='Load more reviews'
        />
      </div>
    </>
  )
})

export default ReviewsGroup
