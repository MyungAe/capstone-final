import React from 'react';
import { Link } from 'react-router-dom';

const StudyWrite = () => {
  const onClickRegister = () => {
    const checkRegister = window.confirm('등록하시겠습니까?')
    if (checkRegister) {
      alert('스터디 그룹 등록이 완료되었습니다.');
    }
    else {
      alert('등록 취소되었습니다.');
    }

  }
  return (
    <div>
      <input placeholder='제목을 입력하세요.'></input>
      <Link to='/'>
        <button onClick={onClickRegister}>등록</button>
      </Link>
      <Link to="/">
        <button>취소</button>
      </Link>
    </div>
  );
};

export default StudyWrite;