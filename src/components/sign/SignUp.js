import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderNav from '../HeaderNav';
import FooterNav from '../FooterNav';
import axios from 'axios';

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
  padding: 15px;
`;

const Label = styled.label`
  color: black;
  font-size: 18px;
  height: 30px;
`;

const Input = styled.input`
  border: 0;
  font-size: 18px;
  height: 30px;
  margin-left: 20px;
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

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let body = {
      email: email,
      password: password,
    };

    axios({
      method: 'post',
      url: 'http://localhost:9000/signup',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <HeaderNav />
      <SigninWrap>
        <Signin>
          <Title>??????????????? ????????????</Title>
          <form method="post" onSubmit={submitHandler}>
            <FlexWrap>
              <Label>????????? : </Label>
              <Input
                type="email"
                onChange={emailHandler}
                placeholder="???????????? ????????? ?????????."
              />
            </FlexWrap>
            <FlexWrap>
              <Label>???????????? : </Label>
              <Input
                type="password"
                onChange={passwordHandler}
                placeholder="??????????????? ????????? ?????????."
              />
            </FlexWrap>
            <Submit type="submit" value="????????????" />
          </form>
        </Signin>
      </SigninWrap>
      <FooterNav />
    </>
  );
}

export default SignIn;
