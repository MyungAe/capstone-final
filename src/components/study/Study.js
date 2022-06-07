import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../HeaderNav';
import FooterNav from '../FooterNav';
import StudyList from './StudyList';
import ContentWrap from '../ContentWrap';

const MainPage = () => {
  return (
    <>
      <HeaderNav />
      <ContentWrap>
        <div>
          <h3>개설된 스터디 목록</h3>
          <Link to="/study/write">
            <button>스터디 등록</button>
          </Link>
          <StudyList />
        </div>
      </ContentWrap>
      <FooterNav />
    </>
  );
};

export default MainPage;
