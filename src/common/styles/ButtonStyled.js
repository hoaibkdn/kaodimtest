import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Colors } from './../../themes'

const BtnWrapper = styled.button`
  padding: 0.75em 2em;
  display: inline-block;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: 0;
  color: #fff;
  background-color: ${Colors.kaodim};
  ${props => props.disabled && ({
    cursor: 'not-allowed',
    opacity: 0.4
  })}
`

const BtnLink = styled(Link)`
  text-align: center;
  padding: 0.75em 2em;
  display: block;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: 0;
  color: #fff;
  background-color: ${Colors.kaodim};
  text-decoration: none
`

export { BtnWrapper, BtnLink }
