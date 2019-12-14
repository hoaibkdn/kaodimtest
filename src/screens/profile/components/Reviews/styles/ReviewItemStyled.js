import styled from 'styled-components';
import { Colors } from './../../../../../themes'

const Wrapper = styled.div`
  border-top: 1px solid ${Colors.borderGray};
  border-bottom: ${props => props.isLastItem ? '1px' : 0} solid ${Colors.borderGray};
  padding: 10px;
  display: flex;
  color: ${Colors.textGray};
  background-color: #fff;
  flex-flow: nowrap
`

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  flex-basis: auto
`

const Content = styled.div`
  padding-left: 10px;
  flex-basis: auto;
  display: inline-block

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

const Name = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  padding-top: 9px
`

const Time = styled(Name)`
  font-size: 10px;
  margin-left: 10px;
  padding-top: 13px;
  font-weight: 100;
`

const Text = styled(Name)`
  font-weight: 100;
  padding: 10px 0
`

const GroupInfo = styled.div`
  display: flex;
`

export {
  Wrapper,
  Image,
  StarGroup,
  Star,
  Name,
  Time,
  Text,
  Content,
  GroupInfo
}
