import styled from 'styled-components';
import { Colors } from './../../../themes'

const VerticalTextWrapper = styled.div`
  border-right: ${props => props.hasBorder ? '1px' : '0'} solid ${Colors.borderGray};
  border-left: ${props => props.hasBorder ? '1px' : '0'} solid ${Colors.borderGray};
  padding: 0 10px;
  display: inline-block;
  text-align: ${props => props.textRight ? 'right' : 'left'};
  padding: 5px 10px;
  color: ${Colors.textGray}
`

const Title = styled.h3`
  margin: 0;
  padding: 0;
`

const Text = styled.p`
  margin: 0;
  padding: 10px 0;
`

export {
  VerticalTextWrapper,
  Title,
  Text
}
