import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FooterNav from '../FooterNav';
import email from '../../asset/email.png';
import lock from '../../asset/lock.png';
import HeaderNav from '../HeaderNav';

const SigninWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
  padding-top: 80px;
`;

const Signin = styled.div`
  position: relative;
  border: 1px solid grey;
  border-radius: 10px;
  min-width: 500px;
  min-height: 500px;
  padding: 30px;
  background-color: #405ffd;
  color: white;
`;

const Title = styled.h1`
  margin: 0 0 60px;
`;

const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  border-radius: 2px;
  margin-bottom: 20px;
  background-color: white;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 20px;
`;

const Input = styled.input`
  padding: 15px;
  border: 0;
  font-size: 18px;
  &:focus-visible {
    outline-offset: 0;
    outline: 0;
  }
`;

const Submit = styled.input`
  position: absolute;
  bottom: 50px;
  width: 500px;
  height: 40px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: 18px;
`;

const Signup = styled.div``;

function SignIn() {
  return (
    <>
      <HeaderNav />
      <SigninWrap>
        <Signin>
          <Title>스터디셀러</Title>
          <form action="" method="post">
            <FlexWrap>
              <Image src={email} alt="email" />
              <Input
                type="email"
                name="id"
                id="email"
                placeholder="이메일을 입력해 주세요."
              />
            </FlexWrap>
            <FlexWrap>
              <Image src={lock} alt="lock" />
              <Input
                type="password"
                name="pw"
                id="password"
                placeholder="비밀번호를 입력해 주세요."
              />
            </FlexWrap>
            <Submit type="submit" value="로그인" />
          </form>
          <Link to="/sign/signup">
            <Signup>스터디셀러 회원가입</Signup>
          </Link>
        </Signin>
      </SigninWrap>
      <FooterNav />
    </>
  );
}

export default SignIn;
