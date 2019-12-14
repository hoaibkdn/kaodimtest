import React, { memo } from 'react'
import Box from './../Box'
import RatingGroup from './../Rating/RatingGroup'
import ComplimentGroup from './../Compliments/ComplimentGroup'
import ReviewsGroup from './../Reviews/ReviewsGroup'

import { Images } from './../../../../themes'

const RatingAndReviewsBox = memo(props => {
  return (
    <Box>
      <RatingGroup
        percentageList={{ 1: 20, 2: 50, 3: 10, 4: 90, 5: 95 }}
        ratingAverageValue={4.3}
        totalRatings={128}
      />
      <ComplimentGroup
        complimentList={[{
          title: 'Resonable price',
          photo: Images.yingKengNg
        }, {
          title: 'Excellence service',
          text: '78 compliments',
          photo: Images.shellaStephanie
        }, {
          title: 'Fast ans Efficient',
          text: '92 compliments',
          photo: Images.yingKengNg
        }, {
          title: 'Value for money',
          text: '60 compliments',
          photo: Images.yingKengNg
        }]}
      />
      <ReviewsGroup
        reviewList={[{
          totalRating: 5,
          name: 'Alex Tenorio',
          time: '2 months ago',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute irure dolor in ',
          photo: Images.yingKengNg
        }, {
          totalRating: 3,
          name: 'Erika Mento',
          time: '5 months ago',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute irure dolor in ',
          photo: Images.yingKengNg
        }, {
          totalRating: 4,
          name: 'Alex Tenorio',
          time: '5 months ago',
          text: '+2 Compliments',
          photo: Images.yingKengNg
        }]}
      />
    </Box>
  )
})

export default RatingAndReviewsBox
