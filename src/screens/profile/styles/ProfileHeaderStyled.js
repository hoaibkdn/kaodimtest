import styled from 'styled-components';
import { Colors, Images } from './../../../themes'

const HeaderWrapper = styled.header`
  transition: box-shadow 83ms;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  border: 1px solid ${Colors.borderGray};
`

const CoverImg = styled.div`
  width: 100%;
  height: auto;
  background: url(${Images.cover}) 50%;
  background-size: cover;
  padding-bottom: 25%
`

const ProfileInfo = styled.div`
  padding: 24px;
  color: ${Colors.textGray}
`

const Avatar = styled.img`
  width: 152px;
  height: 152px;
  border-radius: 50%;
  margin-top: -104px;
  border: 3px solid white;
`

const GroupInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

const FullName = styled.h2`
  font-size: 30px;
  margin: 0;
  padding: 10px 0
`

const Designation = styled.p`
  margin: 0;
  font-size: 14;
  padding: 0;
`
const Dot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${Colors.borderGray}
  margin: 0 5px;
`

export {
  HeaderWrapper,
  CoverImg,
  ProfileInfo,
  Avatar,
  GroupInfo,
  FullName,
  Designation,
  Dot
}
