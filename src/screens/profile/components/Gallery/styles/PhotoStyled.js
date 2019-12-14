import styled from 'styled-components';
import { Colors } from './../../../../../themes'

const PHOTO_SIZE = 120
const PHOTO_MEDIUM_SIZE = 100
const PHOTO_SMALL_SIZE = 60
const PhotoWrapper = styled.div`
  position: relative;
  margin-right: ${props => props.isLastImg ? '0' : '5px'};

  @media only screen and (min-width: 320px) {
    width: ${PHOTO_SMALL_SIZE}px;
    height: ${PHOTO_SMALL_SIZE}px;
  }

  @media only screen and (min-width: 400px) {
    width: ${PHOTO_MEDIUM_SIZE}px;
    height: ${PHOTO_MEDIUM_SIZE}px;
  }

  @media only screen and (min-width: 768px) {
    width: ${PHOTO_SIZE}px;
    height: ${PHOTO_SIZE}px;
  }
`

const Image = styled.img`
  object-fit: cover;

  @media only screen and (min-width: 320px) {
    width: ${PHOTO_SMALL_SIZE}px;
    height: ${PHOTO_SMALL_SIZE}px;
  }

  @media only screen and (min-width: 400px) {
    width: ${PHOTO_MEDIUM_SIZE}px;
    height: ${PHOTO_MEDIUM_SIZE}px;
  }

  @media only screen and (min-width: 768px) {
    width: ${PHOTO_SIZE}px;
    height: ${PHOTO_SIZE}px;
  }
`

const OverlapWrapper = styled.button`
  position: absolute;
  background-color: ${Colors.textGray};
  opacity: 0.5;
  border: none;
  left: 0;
  top: 0;
  cursor: pointer;

  @media only screen and (min-width: 320px) {
    width: ${PHOTO_SMALL_SIZE}px;
    height: ${PHOTO_SMALL_SIZE}px;
  }

  @media only screen and (min-width: 400px) {
    width: ${PHOTO_MEDIUM_SIZE}px;
    height: ${PHOTO_MEDIUM_SIZE}px;
  }
  @media only screen and (min-width: 768px) {
    width: ${PHOTO_SIZE}px;
    height: ${PHOTO_SIZE}px;
  }
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
