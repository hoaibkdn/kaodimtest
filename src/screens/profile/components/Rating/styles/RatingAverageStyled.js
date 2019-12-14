import styled from 'styled-components';
import { Colors } from './../../../../../themes'

const Wrapper = styled.div`
  padding: 5px;
  text-align: center;
  color: ${Colors.textGray}
`

const Number = styled.h2`
  font-size: 30px;
  margin: 0;
  padding: 5px
`

const StarGroup = styled.ul`
  display: flex;
  padding: 5px;
  color: ${Colors.orange};
  list-style: none;
  justify-content: center;
  margin: 0
`

const Star = styled.li`
  margin-right: 3px;
`

const Text = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0
`

export {
  Wrapper,
  Number,
  StarGroup,
  Star,
  Text
}
