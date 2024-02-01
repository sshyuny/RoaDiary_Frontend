import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Record from './pages/Record';
import Member from './pages/Member';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/record" element={<Record />}></Route>
          <Route path="/member" element={<Member />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
