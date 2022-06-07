import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../HeaderNav';
import FooterNav from '../FooterNav';
import ContentWrap from '../ContentWrap';

const StudyWrite = () => {
  const onClickRegister = () => {
    const checkRegister = window.confirm('등록하시겠습니까?');
    if (checkRegister) {
      alert('스터디 그룹 등록이 완료되었습니다.');
    } else {
      alert('등록 취소되었습니다.');
    }
  };
  return (
    <>
      <HeaderNav />
      <ContentWrap>
        <div>
          <h2>스터디 그룹 만들기</h2>
          <form action="" method="post">
            <div>
              <label htmlFor="title">제목</label>
              <input
                type="text"
                id="title"
                placeholder="제목을 입력하세요"
                name="title"
                maxLength="100"
                required
              />
            </div>
            <div>
              <label htmlFor="topic">주제</label>
              <input id="topic" type="text" name="topic" />
            </div>
            <div>
              <label htmlFor="region">지역</label>
              <input id="region" type="text" name="region" />
            </div>
            <div>
              <label htmlFor="contents">내용</label>
              <textarea
                cols="100"
                rows="5"
                id="contents"
                name="contents"
                placeholder="스터디 그룹을 소개해주세요."
              />
            </div>
            <Link to="/study/detail">
              <button type="submit" onClick={onClickRegister}>
                등록
              </button>
            </Link>
          </form>
        </div>
      </ContentWrap>
      <FooterNav />
    </>
  );
};

export default StudyWrite;
