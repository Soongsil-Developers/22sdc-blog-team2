//@ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

// import Signin from './components/Signin';
import Signup from './components/Signup';
import Signin from './components/Signin';

import Home from './components/Home';
import Article from './components/Article';
import CreateEditArticle from './components/CreateEditArticle';
import Profile from './components/Profile';
import Settings from './components/Settings';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/settings" element={<Settings />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article2" element={<CreateEditArticle />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </RecoilRoot>
  );
}

export default App;
