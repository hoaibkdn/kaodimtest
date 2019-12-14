import React, { memo } from 'react'
import { Images } from './../../../../themes'
import {
  PhotoWrapper,
  Image,
  OverlapWrapper,
  NumberMore,
  Text
} from './styles/PhotoStyled'

const Photo = memo(props => {
  const { imgUrl, numOfViewsMore, isLastImg } = props
  return (
    <PhotoWrapper isLastImg={isLastImg}>
      <Image src={imgUrl || Images.gallery1} alt="gallery" />
      {
        !!numOfViewsMore && <OverlapWrapper>
          <NumberMore>+ {numOfViewsMore}</NumberMore>
          <Text>view all</Text>
        </OverlapWrapper>
      }
    </PhotoWrapper>
  )
})

export default Photo
