import React from 'react';
import { Link } from 'react-router-dom';

const StudyDetail = ({ study }) => {
  const sampleDetail = {
    title: '제목',
    topic: '어학, 취업',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
    region: '대전',
    isOpened: '모집 중',
    detail: '자세히 보기'
  };

  return (
    <>
      <h3>제목: {sampleDetail.title}</h3>
      <p>주제: {sampleDetail.topic}</p>
      <p>내용: {sampleDetail.description}</p>
      <p>지역: {sampleDetail.region}</p>
      <p>모집여부: {sampleDetail.isOpened}</p>
      <Link to='join'>
        <button>스터디 신청</button>
      </Link>
    </>
  );
};

export default StudyDetail;