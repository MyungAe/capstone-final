import styled from 'styled-components';
import { ReactComponent as Logo } from '../asset/logo.svg';
import { Link } from 'react-router-dom';

const Header = styled.header`
  position: fixed;
  background-color: #405ffd;
  color: white;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 36px;
  padding-bottom: 5px;
  margin-left: 15px;
`;

const FlexWrap = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
`;

const Button = styled.button`
  margin-right: 40px;
  font-size: 24px;
  padding: 0 10px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

function HeaderNav() {
  return (
    <Header>
      <FlexWrap>
        <Logo width="70px" height="70px" />
        <Link to="/">
          <Title>스터디셀러</Title>
        </Link>
      </FlexWrap>
      <div>
        <Link to="/study">
          <Button>스터디 목록</Button>
        </Link>
        <Link to="/sign/signin">
          <Button>로그인</Button>
        </Link>
        <Link to="/sign/signup">
          <Button>회원가입</Button>
        </Link>
      </div>
    </Header>
  );
}

export default HeaderNav;
