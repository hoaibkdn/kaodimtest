import React, { memo } from 'react'
import VerticalText from './VertialText'

import { Images } from './../../../themes'

import {
  HeaderWrapper,
  CoverImg,
  ProfileInfo,
  Avatar,
  GroupInfo,
  FullName,
  Designation,
  Dot,
  GroupExtraInfo
} from "./../styles/ProfileHeaderStyled"

const ProfileHeader = memo(props => {
  return (
    <div>
      <HeaderWrapper>
        <CoverImg />
        <ProfileInfo>
          <Avatar src={Images.hoaiAvatar} />
          <GroupInfo>
            <div>
              <FullName>Multi Indah Teknik</FullName>
              <Designation>Serving since March 2017<Dot />Verified</Designation>
            </div>
            <GroupExtraInfo>
              <VerticalText
                title='23423'
                text="job completed"
                textRight
              />
              <VerticalText
                hasBorder
                hasIcon
                title='23423'
                text="job completed"
                textRight
              />
              <VerticalText
                title='23423'
                text="job completed"
                textRight
              />
            </GroupExtraInfo>
          </GroupInfo>
        </ProfileInfo>
      </HeaderWrapper>
    </div>

  )
})

export default ProfileHeader
