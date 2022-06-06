import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './components/study/MainPage';
import StudyDetail from './components/study/StudyDetail';
import StudyJoin from './components/study/StudyJoin';
import StudyWrite from './components/study/StudyWrite';

const App = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<StudyWrite />} path="/write" />
      <Route element={<StudyJoin />} path="/detail/join" />
      <Route element={<StudyDetail />} path="/detail" />
    </Routes>
  )
};

export default App;