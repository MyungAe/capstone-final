import React from 'react';
import { Routes, Route } from 'react-router-dom';

import StudyList from './components/study/Study';
import StudyDetail from './components/study/StudyDetail';
import StudyJoin from './components/study/StudyJoin';
import StudyWrite from './components/study/StudyWrite';
import Home from './components/Home';
import SignIn from './components/sign/Signin';
import SignUp from './components/sign/SignUp';

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<StudyList />} path="/study" />
      <Route element={<StudyWrite />} path="/study/write" />
      <Route element={<StudyJoin />} path="/study/detail/join" />
      <Route element={<StudyDetail />} path="/study/detail" />
      <Route element={<SignIn />} path="/sign/signin" />
      <Route element={<SignUp />} path="/sign/signup" />
    </Routes>
  );
};

export default App;
