import styled from 'styled-components';

const GroupContent = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    display: block
  }

`

const GroupMain = styled.div`
  flex: 3;
  margin-right: 15px;

  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }
`

const GroupRightSide = styled.div`
  flex: 2;
`

export {
  GroupContent,
  GroupMain,
  GroupRightSide
}
