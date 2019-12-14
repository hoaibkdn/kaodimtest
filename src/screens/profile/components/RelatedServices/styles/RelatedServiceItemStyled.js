import styled from 'styled-components';
import { Colors } from './../../../../../themes'

const Wrapper = styled.div`
  display: flex;
  padding: 10px 10px 0px 10px;
  background-color: white;
  color: ${Colors.textGray}
`

const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px
  border: 1px solid ${Colors.borderGray};
  object-fit: cover
`

export {
  Wrapper,
  Image
}
