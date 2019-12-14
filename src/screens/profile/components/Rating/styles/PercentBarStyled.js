import styled from 'styled-components';
import { Colors } from './../../../../../themes'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2px;
  color: ${Colors.textGray}
`

const WrapperBar = styled.div`
  width:  100%;
`

const Number = styled.p`
  margin: 0;
  padding: 0;
  margin-right: 10px;
`

const FullBar = styled.div`
  display: flex;
  height: 12px;
  overflow: hidden;
  background-color: #e9ecef;
  border-radius: 5px;
`

const ProgressBar = styled.div`
  width: ${props => props.percent || 0}%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: ${props => props.color || Colors.progressBar};
  -webkit-transition: width .6s ease;
  transition: width .6s ease;
`

export {
  WrapperBar,
  Number,
  Wrapper,
  FullBar,
  ProgressBar
}
