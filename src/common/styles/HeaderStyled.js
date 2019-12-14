import styled from 'styled-components';
import { Link } from 'react-router-dom'


const HeaderWrapper = styled.header`
  background: #fff;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.06);
  margin-bottom: 0;
  height: 60px;
  padding: 0 20px;
  position: sticky;
  display: flex;
  justify-content: space-between;
  top: 0;
  z-index:99
`

const Logo = styled.img`
  width: 120px;
  height: auto
`

const Nav = styled.ul`
  margin: 10px;
  list-style: none;
  display: flex
`

const NavItem = styled(Link)`
  padding: 12px;
  color: #262626;
  font-size: 15px;
  display: flex;
  text-decoration: none;
`

export {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem
}
