import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import TopHeadLine from './components/TopHeadLine/TopHeadLine';


function App() {
  
  return (
    <div className="App">
      <h1>Breaking News</h1>
      <Header></Header>
      <TopHeadLine></TopHeadLine>
    </div>
  );
}

export default App;
