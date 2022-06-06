import React from 'react';
import { Link } from 'react-router-dom';

const StudyJoin = () => {
  const onClickJoin = () => {
    const checkJoin = window.confirm("참가 신청을 하시겠습니까?");
    if (checkJoin) {
      alert('참가 신청이 완료됐습니다.');
    }
    else {
      alert('취소되었습니다.')
    }
  }

  return (
    <div>
      <input placeholder='이름'></input>
      <button onClick={onClickJoin}>참가 신청</button>
      <Link to='/'>
        <button>취소</button>
      </Link>
    </div>
  );
};

export default StudyJoin;