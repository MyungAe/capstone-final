import React from 'react';
import { Link } from 'react-router-dom';
import StudyList from './StudyList';

const MainPage = () => {
  return (
    <div>
      <h3>개설된 스터디 목록</h3>
      <Link to='write'>
        <button>스터디 등록</button>
      </Link>
      <StudyList />
    </div>
  );
};

export default MainPage;