import styled from 'styled-components';
import { Colors } from './../../../../../themes'

const PHOTO_SIZE = 120
const PhotoWrapper = styled.div`
  width: ${PHOTO_SIZE}px;
  height: ${PHOTO_SIZE}px;
  position: relative;
  margin-right: ${props => props.isLastImg ? '0' : '5px'}
`

const Image = styled.img`
  width: ${PHOTO_SIZE}px;
  height: ${PHOTO_SIZE}px;
  object-fit: cover
`

const OverlapWrapper = styled.button`
  position: absolute;
  background-color: ${Colors.textGray};
  opacity: 0.5;
  border: none;
  left: 0;
  top: 0;
  width: ${PHOTO_SIZE}px;
  height: ${PHOTO_SIZE}px;
  cursor: pointer
`

const NumberMore = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 20px;
  color: white
`

const Text = styled(NumberMore)`
  font-weight: 100;
  font-size: 16px
`

export {
  PhotoWrapper,
  Image,
  OverlapWrapper,
  NumberMore,
  Text
}
