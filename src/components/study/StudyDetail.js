import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContentWrap from '../ContentWrap';
import FooterNav from '../FooterNav';
import HeaderNav from '../HeaderNav';

const PaddingWrap = styled(ContentWrap)`
  padding: 130px 50px 50px;
  background-color: whitesmoke;
  height: 90vh;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 30px;
`;

const TopicParagraph = styled.p`
  font-size: 28px;
  margin-bottom: 10px;
  color: #405ffd;
`;

const RegionParagraph = styled.p`
  font-size: 28px;
  margin-bottom: 50px;
  color: tomato;
`;

const Contents = styled.p`
  font-size: 24px;
  white-space: pre-wrap;
  text-align: left;
  line-height: 48px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  width: 200px;
  height: 80px;
  font-size: 24px;
  background-color: #405ffd;
  color: white;
  border-radius: 40px;
`;

const StudyDetail = ({ study }) => {
  const sampleDetail = {
    title: '9월 30일까지 자바스크립트 같이 공부 할 사람 구합니다.',
    topic: ['코딩', '자바스크립트', '웹'],
    description: `온라인으로 자바스크립트 같이 공부할 사람 구합니다.\n일정은 6월 8일부터 9월 30일까지, 대략 3달 정도 생각하고 있습니다.\n교재는 자바스크립트 딥다이브 생각하고 있습니다.\n많은 신청 부탁드립니다.`,
    region: '대전',
    isOpened: '모집 중',
    detail: '자세히 보기',
  };

  const onClickJoin = () => {
    const checkJoin = window.confirm('참가 신청을 하시겠습니까?');
    if (checkJoin) {
      let username = prompt('이름을 입력해주세요');
      alert(username + '님 참가 신청이 완료됐습니다.');
    } else {
      alert('취소되었습니다.');
    }
  };

  return (
    <>
      <HeaderNav />
      <PaddingWrap>
        <Title>{'[' + sampleDetail.isOpened + '] ' + sampleDetail.title}</Title>
        <TopicParagraph>
          {sampleDetail.topic.map((element) => `#${element} `)}
        </TopicParagraph>
        <RegionParagraph>{'오프라인, ' + sampleDetail.region}</RegionParagraph>
        <Contents>{sampleDetail.description}</Contents>
        <Button onClick={onClickJoin}>스터디 신청</Button>
      </PaddingWrap>
      <FooterNav />
    </>
  );
};

export default StudyDetail;
