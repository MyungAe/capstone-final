import styled from 'styled-components';

const GitUrl = 'https://github.com/UneducatedCoders-2022-capstone/docs';

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 30px;
  background-color: black;
  color: white;
  text-align: center;
`;

function FooterNav() {
  return (
    <Footer>
      Copyright &copy; 2022 all rights reserved by{' '}
      <a href={GitUrl}> UneducatedPeople</a>.
    </Footer>
  );
}

export default FooterNav;
