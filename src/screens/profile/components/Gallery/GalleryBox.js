import React, { memo } from 'react'
import Box from './../Box'
import Photo from './Photo'

const NUM_OF_IMGS_DISPLAYED = 4
const GalleryBox = memo(props => {
  const { listImgs } = props
  const renderGallery = () => {
    const numOfImgs = listImgs.length
    const numOfImgsRendered = numOfImgs > NUM_OF_IMGS_DISPLAYED ? 4 : numOfImgs
    const numOfViewsMore = numOfImgs > NUM_OF_IMGS_DISPLAYED ? numOfImgs - NUM_OF_IMGS_DISPLAYED : 0
    const photos = []
    for (let i = 0; i < numOfImgsRendered; i++) {
      if (numOfViewsMore > 0 && i === NUM_OF_IMGS_DISPLAYED - 1) {
        photos.push(<Photo key={i} imgUrl={listImgs[i]} isLastImg numOfViewsMore={numOfViewsMore} />)
      } else {
        photos.push(<Photo key={i} imgUrl={listImgs[i]} isLastImg={i === NUM_OF_IMGS_DISPLAYED - 1} />)
      }
    }
    return photos
  }
  return (
    <Box>
      <h3>Gallery</h3>
      <div className="flex flex-space-between">
        {renderGallery()}
      </div>
    </Box>
  )
})

export default GalleryBox
