import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StudyItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const StudyItem = ({ study }) => {
  const { title, topic, region, isOpened, url, urlToImage } = study;
  return (
    <StudyItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>주제: {topic}</p>
        <p>지역: {region}</p>
        <p>모집여부: {isOpened}</p>
        <Link to="/study/detail">
          <p>자세히 보기</p>
        </Link>
      </div>
    </StudyItemBlock>
  );
};

export default StudyItem;
