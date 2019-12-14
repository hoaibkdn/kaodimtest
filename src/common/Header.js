import React, { memo } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem
} from './styles/HeaderStyled'
import { Images } from './../themes'
import { Link } from 'react-router-dom'


const Header = memo(props => (
  <HeaderWrapper>
    <Link to="/">
      <h1>
        <Logo src={Images.kaodimLogo} alt="kaodim" />
      </h1>
    </Link>
    <Nav>
      <NavItem to="/form">Form</NavItem>
      <NavItem to="/profile">Profile</NavItem>
    </Nav>
  </HeaderWrapper>
))

export default Header
