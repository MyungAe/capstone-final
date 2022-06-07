import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Teamwork } from '../asset/teamwork.svg';

const Main = styled.main`
  background-color: white;
  color: black;
  width: inherit;
  height: 90vh;
  padding-top: 80px;
`;

const FlexWrap = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
`;

const MainSection = styled(FlexWrap)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100vw;
`;

const SubTitle = styled.h2`
  font-size: 64px;
`;

const Paragraph = styled.p`
  font-size: 28px;
  margin-bottom: 8px;
`;

const Button = styled.button`
  margin-right: 40px;
  font-size: 24px;
  padding: 0 10px;
  color: white;
`;

const CustomButton = styled(Button)`
  margin-top: 20px;
  padding: 20px;
  background-color: #405ffd;
  color: white;
  border-radius: 20px;
`;

function MainContent() {
  return (
    <Main>
      <MainSection>
        <Teamwork width="400px" height="400px" />
        <div>
          <SubTitle>스터디셀러</SubTitle>
          <Paragraph>
            더 이상 스터디 모집을 위해 여러 서비스를 분산 이용하지 마세요.
          </Paragraph>
          <Paragraph>
            스터디 모집과 운영을 한 번에 관리하는 스터디셀러를 이용하세요.
          </Paragraph>
          <Link to="study">
            <CustomButton>스터디셀러 이용하기</CustomButton>
          </Link>
        </div>
      </MainSection>
    </Main>
  );
}

export default MainContent;
