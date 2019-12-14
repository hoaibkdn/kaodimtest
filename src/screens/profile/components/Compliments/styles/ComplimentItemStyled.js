import styled from 'styled-components';
import { Colors } from './../../../../../themes'

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${Colors.borderGray};
  border-radius: 3px;
  padding: 10px 10px 0px 10px;
  background-color: white;
  color: ${Colors.textGray}
  flex: 1;
  margin-right: 5px;
  margin-bottom: 5px
`

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px
`

export {
  Wrapper,
  Image
}
