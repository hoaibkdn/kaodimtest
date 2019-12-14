import styled from 'styled-components';

const Flex = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    display: block
  }

`

const Center = styled.div`
  margin: auto
`

const SmallBox = styled.div`
  min-width: 150px;
  max-width: 320px;
  margin: auto;
`

const Layout = {
  Flex,
  Center,
  SmallBox
}

export default Layout
