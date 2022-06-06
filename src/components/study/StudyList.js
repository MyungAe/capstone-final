import React from 'react';
import styled from 'styled-components';
import StudyItem from './StudyItem';

const StudyListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const StudyList = () => {
  const sampleStudy = {
    title: '제목',
    topic: '어학, 취업',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
    region: '대전',
    isOpened: '모집 중'
  };

  return (
    <StudyListBlock>
      <StudyItem study={sampleStudy} />
      <StudyItem study={sampleStudy} />
      <StudyItem study={sampleStudy} />
    </StudyListBlock>
  );
};

export default StudyList;