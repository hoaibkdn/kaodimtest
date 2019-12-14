import styled from 'styled-components';
import { Colors } from './../../../themes'

const BoxWrapper = styled.div`
  background-color: white;
  padding: ${props => props.padding ? props.padding : 10}px;
  margin: 10px 0;
  border: ${props => props.noBorder ? 0 : 1}px solid ${Colors.borderGray};
  color: ${Colors.textGray}
`

export { BoxWrapper }
